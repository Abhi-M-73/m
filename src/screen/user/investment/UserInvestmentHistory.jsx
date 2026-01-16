import { useQuery } from '@tanstack/react-query'
import ReusableDataTable from '../../../components/ui/ReusableDataTable'
import { getInvestmentHistory } from '../../../api/user.api'
import { dateFormatter, formatCurrency } from '../../../utils/additionalFn'
import { Link, useNavigate } from 'react-router-dom'

const UserInvestmentHistory = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['investmentHistory'],
        queryFn: getInvestmentHistory,
        staleTime: 5 * 60 * 1000,
    });

    const navigate = useNavigate();

    const columns = [
        { label: '#', key: 'sr', render: (value, row, rowIndex) => rowIndex + 1 },
        { label: 'Investment Amount', key: "amount", render: (value) => formatCurrency(value) },
        { label: 'Days', key: "daysCompleted", render: (value) => `${value} Days` },
        { label: 'Daily ROI(%)', key: "dailyRate", render: (value) => `${value} %` },
        {
            label: 'Status', key: 'status', render: (value) => {
                const statusStyles = {
                    ACTIVE: 'bg-green-100 text-green-800',
                    COMPLETED: 'bg-blue-100 text-blue-800',
                    CANCELLED: 'bg-red-100 text-red-800',
                };
                return (<span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[value] || 'bg-gray-100 text-gray-800'}`}>
                    {value}
                </span>
                );
            }
        },
        { label: 'Activation Date', key: 'startDate', render: (value) => dateFormatter(value) },
        {
            label: 'Action', key: '_id', render: (value) => {
                return (
                    <Link
                        to={`/roi-income?investmentId=${value}`}
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800`}
                    >
                        View Roi History
                    </Link>
                );
            }
        },
    ]

    return (
        <div>
            <ReusableDataTable
                data={data?.data || []}
                columns={columns}
                loading={isLoading}
            />
        </div>
    )
}

export default UserInvestmentHistory
