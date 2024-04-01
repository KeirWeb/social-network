import { AppAction, AppActionTypes } from '../../types/IApp.interface'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initState = {
	status: 'idle' as RequestStatusType,
	error: null as null | string,
}

type IAppState = typeof initState

export const appReducer = (state = initState, action: AppAction): IAppState => {
	switch (action.type) {
		case AppActionTypes.SET_STATUS:
			return { ...state, status: action.status }
		case AppActionTypes.SET_ERROR:
			return { ...state, error: action.error }
		default:
			return state
	}
}
