import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getLevelTeam } from '../../../api/user.api';
import ReusableDataTable from '../../../components/ui/ReusableDataTable';

const UserLevelTeam = () => {
  const { data } = useQuery({
    queryKey: ['levelTeam'],
    queryFn: getLevelTeam,
    staleTime: 5 * 60 * 1000,
  });

  const columns = [
    { label: '#', key: 'sr', render: (value, row, rowIndex) => rowIndex + 1 },
  
  ]

  return (
    <div>
      <ReusableDataTable
        data={ []}
        columns={columns}
       />
    </div>
  )
}

export default UserLevelTeam
