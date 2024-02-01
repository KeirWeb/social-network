import axios from "axios";
import { UserType } from "../redux/users-reducer";
import { ProfileType } from "../redux/profile-reducer";
import { AuthReducerType } from "../redux/auth-reducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const usersApi = {
  getUsers: (page: number = 1, pageSize: number = 10) => {
    return instance
      .get<GetUsersResponseType<UserType>>(
        `users?page=${page}&count=${pageSize}`
      )
      .then((res) => res.data);
  },
  getCurrentUser: (userId: number) => {
    return instance.get<ProfileType>(`profile/${userId}`);
  },
  followToUser: (userId: number) => {
    return instance.post<FollowResponseType<{}>>(`follow/${userId}`, {});
  },
  unfollowToUser: (userId: number) => {
    return instance.delete<FollowResponseType<{}>>(`follow/${userId}`, {});
  },
  authorizationСheck: () => {
    return instance.get<AuthResponseType>(`auth/me`);
  },
};

type FollowResponseType<U> = {
  data: U;
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
};
type GetUsersResponseType<T> = {
  error: null | string;
  items: T[];
  totalCount: number;
};
type AuthResponseType = {
  data: AuthReducerType;
  resultCode: number;
  messages: string[];
};
