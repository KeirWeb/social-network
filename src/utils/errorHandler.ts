import { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import {
	setAppErrorAction,
	setAppStatusAction,
} from '../store/actions/appAction'
import { CombinedActions } from '../store/store'

export const errorHandler = (err: any, dispatch: Dispatch<CombinedActions>) => {
	let errMessage: string
	const axiosErr = err as AxiosError<IServerError>
	if (axiosErr.isAxiosError) {
		errMessage = err.response
			? err.response.data.errorMessages[0].message
			: err.message
	} else {
		errMessage = (err as Error).message
	}
	dispatch(setAppErrorAction(errMessage))
	dispatch(setAppStatusAction('failed'))
}

interface IServerError {
	errorMessages: Array<{ fields: string; message: string }>
}
