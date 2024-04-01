import { apiAxios } from '../api/api'
import { IProfile } from '../types/IProfile.interface'

const PROFILE = 'profile'

export class ProfileService {
	static getProfile(userID: string) {
		return apiAxios.get<IProfile>(`${PROFILE}/${userID}`)
	}
	static getStatus(userID: string) {
		return apiAxios.get<string>(`${PROFILE}/status/${userID}`)
	}
	static updateStatus(status: string) {
		return apiAxios.put<IResponse>(`${PROFILE}/status`, { status })
	}
}

interface IResponse {
	resultCode: number
	messages: string[]
	data: {}
}
