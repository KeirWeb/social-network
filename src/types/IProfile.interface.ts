import {
	setStatusProfile,
	setUserProfile,
} from '../store/actions/profileAction'

export enum ProfileActionTypes {
	SET_USERS = 'PROFILE/SET_PROFILE',
	SET_STATUS = 'PROFILE/SET_STATUS',
}

export interface IProfile {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: IContacts
	photos: IPhotos
}
export interface IEntityProfile extends IProfile {
	status: string
}

interface IContacts {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}
interface IPhotos {
	small: string
	large: string
}

export type ProfileAction =
	| ReturnType<typeof setUserProfile>
	| ReturnType<typeof setStatusProfile>
