import { useQuery } from '@tanstack/react-query'
import ReusableDataTable from '../../../components/ui/ReusableDataTable'
import { getDirectTeam } from '../../../api/user.api'
import { dateFormatter, formatCurrency, legButton, maskEmail } from '../../../utils/additionalFn'

const UserDirectTeam = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['directTeam'],
    queryFn: getDirectTeam,
    staleTime: 5 * 60 * 1000,
  });

  const columns = [
    { label: '#', key: 'sr', render: (value, row, rowIndex) => rowIndex + 1 },
    { label: 'Username', key: "username" },
    { label: 'Email', key: 'email', render: (value) => maskEmail(value) },
    { label: 'Total Earnings', key: 'totalEarnings', render: (value) => formatCurrency(value) },
    { label: 'Total Investment', key: 'totalInvestment', render: (value) => formatCurrency(value) },
    { label: 'Referral Code', key: 'referralCode' },
    { label: 'Position', key: 'position', render: (value) => legButton(value) },
    { label: 'Joined At', key: 'createdAt', render: (value) => dateFormatter(value) },
  ]

  return (
    <div>
      <ReusableDataTable
        data={data?.data?.referredUsers || []}
        columns={columns}
        loading={isLoading}
      />
    </div>
  )
}

export default UserDirectTeam
