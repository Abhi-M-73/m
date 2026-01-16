import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import ReusableDataTable from '../../../components/ui/ReusableDataTable';
import { dateFormatter, formatCurrency, legButton, maskEmail } from '../../../utils/additionalFn';
import { getTopupHistory } from '../../../api/admin.api';

const AdminTopupHistory = () => {

    const { data } = useQuery({
        queryKey: ['topupHistory'],
        queryFn: getTopupHistory,
        staleTime: 5 * 60 * 1000,
    });

    const columns = [
        { label: '#', key: 'sr', render: (value, row, rowIndex) => rowIndex + 1 },
        { label: 'Username', key: "username" },
        { label: 'Email', key: "userId", render: (value) => maskEmail(value?.email) || "N/A" },
        { label: 'Topup Amount', key: 'amount', render: (value) => formatCurrency(value) },
        { label: 'Previous Balance', key: 'previousBalance', render: (value) => formatCurrency(value) },
        { label: 'New Balance', key: 'newBalance', render: (value) => formatCurrency(value) },
        { label: 'Date', key: 'createdAt', render: (value) => dateFormatter(value) },
    ];

    return (
        <div>
            <ReusableDataTable
                data={data?.history || []}
                columns={columns}
            />
        </div>
    );
};

export default AdminTopupHistory;
