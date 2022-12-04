import React, { FC } from 'react'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div>
			{headerItems.map((value, idx) => {
				return <div key={value}>{value}</div>
			})}
		</div>
	)
}

export default AdminTableHeader
