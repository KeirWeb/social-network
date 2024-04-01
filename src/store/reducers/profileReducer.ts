import {
	IEntityProfile,
	ProfileAction,
	ProfileActionTypes,
} from '../../types/IProfile.interface'

const initialState = {} as IEntityProfile

export const profileReducer = (
	state = initialState,
	action: ProfileAction
): IEntityProfile => {
	switch (action.type) {
		case ProfileActionTypes.SET_USERS:
			return { ...state, ...action.data }
		case ProfileActionTypes.SET_STATUS:
			return { ...state, status: action.status }
		default:
			return state
	}
}
