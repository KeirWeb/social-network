import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { AppAction } from '../types/IApp.interface'
import { AuthAction } from '../types/IAuth.interface'
import { ProfileAction } from '../types/IProfile.interface'
import { UserAction } from '../types/IUser.interface'
import { DialogsAction } from '../types/dialogsPage'
import { appReducer } from './reducers/appReducer'
import { authReducer } from './reducers/authReducer'
import { dialogsReducer } from './reducers/dialogsReducer'
import { profileReducer } from './reducers/profileReducer'
import { usersReducer } from './reducers/usersReducer'

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type CombinedActions =
	| DialogsAction
	| ProfileAction
	| UserAction
	| AppAction
	| AuthAction

//@ts-ignore
window.store = store
