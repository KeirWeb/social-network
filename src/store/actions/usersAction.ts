import { Dispatch } from 'redux'
import { FollowService } from '../../services/FollowService'
import { UsersService } from '../../services/UsersService'
import { IUser, UserActionTypes } from '../../types/IUser.interface'
import { errorHandler } from '../../utils/errorHandler'
import { getPages } from '../../utils/getPages'
import { CombinedActions, RootState } from '../store'
import { setAppErrorAction, setAppStatusAction } from './appAction'

export const followAction = (id: number) =>
	({
		type: UserActionTypes.FOLLOW,
		id,
	} as const)

export const unfollowAction = (id: number) =>
	({
		type: UserActionTypes.UNFOLLOW,
		id,
	} as const)

export const setUsersAction = (users: IUser[]) =>
	({
		type: UserActionTypes.SET_USERS,
		users,
	} as const)

export const setCurrentPageAction = (page: number) =>
	({ type: UserActionTypes.SET_CURRENT_PAGE, page } as const)

export const setTotalPagesAction = (value: number) =>
	({ type: UserActionTypes.SET_TOTAL_PAGES, value } as const)

export const setPageSizeAction = (value: number) =>
	({ type: UserActionTypes.SET_PAGE_SIZE, value } as const)
export const addFollowProgressAction = (userID: number) =>
	({ type: UserActionTypes.ADD_FOLLOW_PROGRESS, userID } as const)
export const deleteFollowProgressAction = (userID: number) =>
	({ type: UserActionTypes.DELETE_FOLLOW_PROGRESS, userID } as const)

export const fetchUsersThunk =
	() =>
	async (dispatch: Dispatch<CombinedActions>, getState: () => RootState) => {
		const usersPage = getState().usersPage
		dispatch(setAppStatusAction('loading'))
		dispatch(setAppErrorAction(null))
		try {
			const res = await UsersService.get({
				count: usersPage.pageSize,
				page: usersPage.currentPage,
			})
			dispatch(setUsersAction(res.data.items))
			const totalPages = getPages(res.data.totalCount, usersPage.pageSize)
			dispatch(setTotalPagesAction(totalPages))
			dispatch(setAppStatusAction('succeeded'))
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}
export const followThunk =
	(userID: number) => async (dispatch: Dispatch<CombinedActions>) => {
		try {
			dispatch(addFollowProgressAction(userID))
			dispatch(setAppErrorAction(null))
			const res = await FollowService.follow(userID)
			if (!res.data.resultCode) {
				dispatch(followAction(userID))
			} else {
				dispatch(setAppErrorAction(res.data.messages[0]))
			}
		} catch (error) {
			errorHandler(error, dispatch)
		} finally {
			dispatch(deleteFollowProgressAction(userID))
		}
	}
export const unFollowThunk =
	(userID: number) => async (dispatch: Dispatch<CombinedActions>) => {
		try {
			dispatch(addFollowProgressAction(userID))
			dispatch(setAppErrorAction(null))
			const res = await FollowService.unFollow(userID)
			if (!res.data.resultCode) {
				dispatch(unfollowAction(userID))
			} else {
				dispatch(setAppErrorAction(res.data.messages[0]))
			}
		} catch (error) {
			errorHandler(error, dispatch)
		} finally {
			dispatch(deleteFollowProgressAction(userID))
		}
	}
