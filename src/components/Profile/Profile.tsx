import { FC } from 'react'
import { IEntityProfile } from '../../types/IProfile.interface'
import style from './Profile.module.scss'
import UserInfo from './UserInfo/UserInfo'

interface ProfileProps {
	profilePage: IEntityProfile
	updateStatus: (status: string) => Promise<void>
}

const Profile: FC<ProfileProps> = ({ profilePage, updateStatus }) => {
	return (
		<div className={style.profile}>
			<div className={style.profile__main}>
				<img
					src='https://img.freepik.com/premium-photo/mountain-landscape-with-lake-mountains-background_887562-4077.jpg'
					alt=''
				/>
			</div>
			<UserInfo profileData={profilePage} updateStatus={updateStatus} />
			{/* <MyPostsContainer /> */}
		</div>
	)
}

export default Profile
