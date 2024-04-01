import {
	setAppErrorAction,
	setAppStatusAction,
} from '../store/actions/appAction'

export enum AppActionTypes {
	SET_STATUS = 'APP/SET_STATUS',
	SET_ERROR = 'App/SET_ERROR',
}

export type AppAction =
	| ReturnType<typeof setAppStatusAction>
	| ReturnType<typeof setAppErrorAction>
