import { Component } from 'react'
import style from '../UserInfo.module.scss'

interface PropsType {
	lookingForAJob: boolean
	lookingForAJobDescription: string
}

class UserDesc extends Component<PropsType> {
	render() {
		const { lookingForAJob, lookingForAJobDescription } = this.props
		return (
			<div className={style.userInfo__desc}>
				<div className={style.userInfo__item}>
					<span className={style.userInfo__itemLabel}>Looking for a job:</span>
					<span className={style.userInfo__itemValue}>
						{lookingForAJob ? 'yes' : 'no'}
					</span>
				</div>
				<div className={style.userInfo__item}>
					<span className={style.userInfo__itemLabel}>Work expectations:</span>
					<span className={style.userInfo__itemValue}>
						{lookingForAJobDescription ? lookingForAJobDescription : '...'}
					</span>
				</div>
			</div>
		)
	}
}

export default UserDesc
