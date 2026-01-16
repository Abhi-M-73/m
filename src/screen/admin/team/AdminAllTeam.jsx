import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import ReusableDataTable from '../../../components/ui/ReusableDataTable';
import { dateFormatter, formatCurrency, legButton, maskEmail } from '../../../utils/additionalFn';
import { getAllTeam, toggleLoginBlock } from '../../../api/admin.api';
import toast from 'react-hot-toast';

const AdminAllTeam = () => {
    const queryClient = useQueryClient();

    const { data } = useQuery({
        queryKey: ['AllTeam'],
        queryFn: getAllTeam,
        staleTime: 5 * 60 * 1000,
    });

    const { mutate: handleToggleLoginBlock, isPending } = useMutation({
        mutationFn: ({ userId, loginBlocked }) =>
            toggleLoginBlock(userId),
        onSuccess: () => {
            toast.success('User login status updated');
            queryClient.invalidateQueries({ queryKey: ['AllTeam'] });
        },
        onError: (error) => {
            console.error(error);
            toast.error('Something went wrong');
        },
    });

    const columns = [
        { label: '#', key: 'sr', render: (value, row, rowIndex) => rowIndex + 1 },
        { label: 'Username', key: "username" },
        { label: 'Email', key: 'email', render: (value) => maskEmail(value) },
        { label: 'Total Balance', key: 'mainWallet', render: (value) => formatCurrency(Number(value?.$numberDecimal)) },
        { label: 'Total Earnings', key: 'totalEarnings', render: (value) => formatCurrency(value) },
        { label: 'Total Investment', key: 'totalInvestment', render: (value) => formatCurrency(value) },
        { label: 'Referral Code', key: 'referralCode' },
        { label: 'Position', key: 'position', render: (value) => legButton(value) },
        {
            label: 'Block Status', key: 'loginBlocked', render: (value) => {
                return (
                    <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium 
                        ${value ? 'bg-red-600' : 'bg-emerald-600'}
                        text-white`}
                    >
                        {value ? 'Blocked' : 'Active'}
                    </span>
                );
            }
        },
        { label: 'Joined At', key: 'createdAt', render: (value) => dateFormatter(value) },
        {
            label: 'Action',
            key: 'loginBlocked',
            render: (value, row) => (
                <button
                    onClick={() =>
                        handleToggleLoginBlock({ userId: row._id, loginBlocked: value })
                    }
                    disabled={isPending}
                    className={`px-3 py-1 rounded-lg text-xs font-medium 
                        ${value ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'}
                        text-white transition`}
                >
                    {isPending ? 'Updating...' : value ? 'Unblock' : 'Block'}
                </button>
            ),
        },
    ];

    return (
        <div>
            <ReusableDataTable
                data={data?.users || []}
                columns={columns}
            />
        </div>
    );
};

export default AdminAllTeam;
