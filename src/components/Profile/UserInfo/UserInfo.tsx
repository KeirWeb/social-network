import { FC } from 'react'
import avatar from '../../../assets/img/avatar.jpg'
import { IEntityProfile } from '../../../types/IProfile.interface'
import UserDesc from './UserDesc/UserDesc'
import style from './UserInfo.module.scss'
import UserStatus from './UserStatus/UserStatus'

interface UserInfoProps {
	profileData: IEntityProfile
	updateStatus: (status: string) => Promise<void>
}

const UserInfo: FC<UserInfoProps> = ({ profileData, updateStatus }) => {
	const {
		contacts,
		fullName,
		lookingForAJob,
		lookingForAJobDescription,
		photos,
		status,
	} = profileData
	return (
		<div className={style.userInfo}>
			<div className={style.userInfo__ava}>
				<img src={photos.small ? photos.small : avatar} alt='' />
			</div>
			<div>
				<div className={style.userInfo__name}>{fullName}</div>
				<UserDesc
					lookingForAJob={lookingForAJob}
					lookingForAJobDescription={lookingForAJobDescription}
				/>
				<UserStatus status={status} updateStatus={updateStatus} />
			</div>
		</div>
	)
}

export default UserInfo
