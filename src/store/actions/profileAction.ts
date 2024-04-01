import { Dispatch } from 'redux'
import { ProfileService } from '../../services/ProfileService'
import { IProfile, ProfileActionTypes } from '../../types/IProfile.interface'
import { errorHandler } from '../../utils/errorHandler'
import { CombinedActions } from '../store'
import { setAppErrorAction, setAppStatusAction } from './appAction'

export const setUserProfile = (data: IProfile) =>
	({
		type: ProfileActionTypes.SET_USERS,
		data,
	} as const)
export const setStatusProfile = (status: string) =>
	({ type: ProfileActionTypes.SET_STATUS, status } as const)

export const fetchUsersProfile =
	(userID: string) => async (dispatch: Dispatch<CombinedActions>) => {
		dispatch(setAppStatusAction('loading'))
		dispatch(setAppErrorAction(null))
		try {
			const res = await ProfileService.getProfile(userID)
			dispatch(setUserProfile(res.data))
			dispatch(setAppStatusAction('succeeded'))
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}

export const getStatusUserByID =
	(userID: string) => async (dispatch: Dispatch<CombinedActions>) => {
		dispatch(setAppStatusAction('loading'))
		dispatch(setAppErrorAction(null))
		try {
			const res = await ProfileService.getStatus(userID)
			dispatch(setStatusProfile(res.data))
			dispatch(setAppStatusAction('succeeded'))
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}
export const updateStatusProfile =
	(status: string) => async (dispatch: Dispatch<CombinedActions>) => {
		dispatch(setAppStatusAction('loading'))
		dispatch(setAppErrorAction(null))
		try {
			const res = await ProfileService.updateStatus(status)
			if (!res.data.resultCode) {
				dispatch(setStatusProfile(status))
				dispatch(setAppStatusAction('succeeded'))
			} else {
				dispatch(setAppStatusAction('failed'))
				dispatch(setAppErrorAction(res.data.messages[0]))
			}
		} catch (error) {
			errorHandler(error, dispatch)
		}
	}
