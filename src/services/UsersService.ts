import { apiAxios } from '../api/api'
import { IUser } from '../types/IUser.interface'

const USERS = 'users'

export class UsersService {
	static get(payload?: Partial<IUserQueryParams>) {
		return apiAxios.get<IUserResponse>(USERS, {
			params: {
				...payload,
			},
		})
	}
}
export interface IUserQueryParams {
	count: number
	page: number
	term: string
	friend: boolean
}

interface IUserResponse {
	error: null | string
	items: IUser[]
	totalCount: number
}
