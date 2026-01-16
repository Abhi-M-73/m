import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getDirectreferralIncome } from '../../../api/user.api';
import Loader from '../../../components/ui/Loader';
import ReusableDataTable from '../../../components/ui/ReusableDataTable';
import { dateFormatter, formatCurrency, formatPercentage, levelButton, maskEmail } from '../../../utils/additionalFn';

const UserReferralIncome = () => {
  const { data } = useQuery({
    queryKey: ['directreferralIncome'],
    queryFn: getDirectreferralIncome,
    staleTime: 5 * 60 * 1000,
  });

  const columns = [
    { label: '#', key: 'sr', render: (value, row, rowIndex) => rowIndex + 1 },
    { label: 'From User', key: "fromUserId" , render: (value) => value?.username || 'N/A' },
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
      />
    </div>
  )
}

export default UserReferralIncome
