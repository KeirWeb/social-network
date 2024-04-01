import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/button/Button'
import avatar from '../../assets/img/avatar.jpg'
import { IUser } from '../../types/IUser.interface'
import styles from './Users.module.scss'

interface UsersItemProps {
	user: IUser
	followInProgress: Record<string, number>
	follow: (id: number) => void
	unfollow: (id: number) => void
}

const UsersItem: FC<UsersItemProps> = ({
	user,
	followInProgress,
	follow,
	unfollow,
}) => {
	const followHandler = () => {
		follow(user.id)
	}
	const unfollowHandler = () => {
		unfollow(user.id)
	}
	return (
		<div key={user.id} className={styles.item}>
			<div className={styles.avatar}>
				<div className={styles.image}>
					<Link to={`/profile/${user.id}`}>
						<img
							src={user.photos.small ? user.photos.small : avatar}
							alt={user.name}
						/>
					</Link>
				</div>
				{user.followed ? (
					<Button
						onClick={unfollowHandler}
						size='small'
						disabled={followInProgress[user.id] !== undefined}
					>
						Unfollowed
					</Button>
				) : (
					<Button
						onClick={followHandler}
						size='small'
						disabled={followInProgress[user.id] !== undefined}
					>
						Followed
					</Button>
				)}
			</div>
			<div className={styles.content}>
				<div className={styles.userinfo}>
					<div className={styles.userinfoItem}>{user.name}</div>
				</div>
				<div className={styles.statusComment}>{user.status}</div>
			</div>
		</div>
	)
}

export default UsersItem
