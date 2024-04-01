import { ChangeEvent, FC } from 'react'
import Pagination from '../../UI/pagination/Pagination'
import { IEntityUser } from '../../types/IUser.interface'
import styles from './Users.module.scss'
import UsersItem from './UsersItem'
import UsersItemSkeleton from './UsersItemSkeleton'

interface UsersProps {
	usersPage: IEntityUser
	isLoading: boolean
	changePageHandler: (e: ChangeEvent<unknown>, page: number) => void
	follow: (id: number) => void
	unfollow: (id: number) => void
}

const Users: FC<UsersProps> = ({
	usersPage,
	isLoading,
	follow,
	unfollow,
	changePageHandler,
}) => {
	const { users, totalPages, currentPage, followInProgress } = usersPage
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Users</h1>
			<div className={styles.users}>
				{isLoading && !users.length && <UsersItemSkeleton count={5} />}
				{users.map(user => {
					return (
						<UsersItem
							key={user.id}
							user={user}
							follow={follow}
							unfollow={unfollow}
							followInProgress={followInProgress}
						/>
					)
				})}
			</div>
			<div className={styles.showmore}></div>
			<Pagination
				count={totalPages}
				page={currentPage}
				onChange={changePageHandler}
				size='large'
				sx={{
					'& .MuiPagination-ul': {
						justifyContent: 'center',
					},
				}}
			/>
		</div>
	)
}

export default Users
