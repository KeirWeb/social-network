import { AppActionTypes } from '../../types/IApp.interface'
import { RequestStatusType } from '../reducers/appReducer'

export const setAppStatusAction = (status: RequestStatusType) =>
	({ type: AppActionTypes.SET_STATUS, status } as const)

export const setAppErrorAction = (error: string | null) =>
	({ type: AppActionTypes.SET_ERROR, error } as const)
