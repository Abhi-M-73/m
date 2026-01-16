import React from 'react'
import { getLevelIncome } from '../../../api/user.api';
import ReusableDataTable from '../../../components/ui/ReusableDataTable';
import { useQuery } from '@tanstack/react-query';
import { dateFormatter, formatCurrency, formatPercentage, levelButton, maskEmail } from '../../../utils/additionalFn';

const UserLevelIncome = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['levelTeam'],
    queryFn: getLevelIncome,
    staleTime: 5 * 60 * 1000,
  });

  const columns = [
    { label: '#', key: 'sr', render: (value, row, rowIndex) => rowIndex + 1 },
    { label: 'From User', key: "fromUserId", render: (value) => value?.username || 'N/A' },
    { label: 'From User Email', key: 'fromUserId', render: (value) => maskEmail(value?.email) },
    { label: 'Total Investment', key: 'investmentId', render: (value) => formatCurrency(value?.amount) },
    { label: 'Referral Income', key: 'amount', render: (value) => formatCurrency(value) },
    { label: 'Percentage(%)', key: 'percentage', render: (value) => formatPercentage(value) },
    { label: 'Level', key: 'level', render: (value) => levelButton(value) },
    { label: 'Date', key: 'createdAt', render: (value) => dateFormatter(value) },
  ]

  return (
    <div>
      <ReusableDataTable
        data={data?.history || []}
        columns={columns}
        loading={isLoading}
      />
    </div>
  )
}

export default UserLevelIncome
