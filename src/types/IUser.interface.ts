import {
	addFollowProgressAction,
	deleteFollowProgressAction,
	followAction,
	setCurrentPageAction,
	setPageSizeAction,
	setTotalPagesAction,
	setUsersAction,
	unfollowAction,
} from '../store/actions/usersAction'

export enum UserActionTypes {
	FOLLOW = 'FOLLOW',
	UNFOLLOW = 'UNFOLLOW',
	SET_USERS = 'SET_USERS',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
	SET_PAGE_SIZE = 'SET_PAGE_SIZE',
	ADD_FOLLOW_PROGRESS = 'ADD_FOLLOW_PROGRESS',
	DELETE_FOLLOW_PROGRESS = 'DELETE_FOLLOW_PROGRESS',
}

export type UserAction =
	| ReturnType<typeof followAction>
	| ReturnType<typeof unfollowAction>
	| ReturnType<typeof setUsersAction>
	| ReturnType<typeof setCurrentPageAction>
	| ReturnType<typeof setTotalPagesAction>
	| ReturnType<typeof setPageSizeAction>
	| ReturnType<typeof addFollowProgressAction>
	| ReturnType<typeof deleteFollowProgressAction>

export interface IUser {
	name: string
	id: number
	uniqueUrlName: null | string
	photos: {
		small: null | string
		large: null | string
	}
	status: null | string
	followed: boolean
}

export interface IEntityUser {
	users: IUser[]
	totalPages: number
	currentPage: number
	pageSize: number
	followInProgress: Record<string, number>
}
