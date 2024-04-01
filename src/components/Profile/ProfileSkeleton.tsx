import Skeleton from 'react-loading-skeleton'
import style from './Profile.module.scss'

const ProfileSkeleton = () => {
	return (
		<div className={style.profile}>
			<div className={style.profile__main}>
				<Skeleton />
			</div>
			<div className={style.userInfo}>
				<div className={style.userInfo__ava}>
					<Skeleton />
				</div>
				<div>
					<div className={style.userInfo__name}>
						<Skeleton />
					</div>
					<ul>
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</ul>
				</div>
			</div>
			<div className={style.myPosts}>
				<div className={style.myPosts__title}>
					<Skeleton />
				</div>
				<div className={style.myPosts__newPost}>
					<form>
						<Skeleton />
						<Skeleton />
					</form>
				</div>
				<ul>
					<Skeleton />
				</ul>
			</div>
		</div>
	)
}

export default ProfileSkeleton
