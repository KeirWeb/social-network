import { apiAxios } from '../api/api'

const FOLLOW = 'follow'

export class FollowService {
	static getFollowedStatus(userID: number) {
		return apiAxios.get<boolean>(`${FOLLOW}/${userID}`)
	}
	static follow(userID: number) {
		return apiAxios.post<IResponse>(`${FOLLOW}/${userID}`, {})
	}
	static unFollow(userID: number) {
		return apiAxios.delete<IResponse>(`${FOLLOW}/${userID}`)
	}
}

interface IResponse {
	resultCode: number
	messages: string[]
	data: {}
}
