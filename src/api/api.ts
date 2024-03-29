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
    console.warn("Obsolete method. Please user profileApi object");
    return profileApi.getProfile(userId);
  },
  followToUser: (userId: number) => {
    return instance.post<FollowResponseType<{}>>(`follow/${userId}`, {});
  },
  unfollowToUser: (userId: number) => {
    return instance.delete<FollowResponseType<{}>>(`follow/${userId}`, {});
  },
};

export const profileApi = {
  getProfile: (userId: number) => {
    return instance.get<ProfileType>(`profile/${userId}`);
  },
  getProfileStatus: (userId: number) => {
    return instance.get<string>("profile/status/" + userId);
  },
  updateProfileStatus: (status: string) => {
    return instance.put<ResponseType<{}>>("profile/status", { status });
  },
};

export const authAPI = {
  me: () => {
    return instance.get<ResponseType<AuthReducerType>>(`auth/me`);
  },
  login: (
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: boolean
  ) => {
    return instance.post<ResponseType<{ userId: number }>>("/auth/login", {
      email,
      password,
      rememberMe: false,
      captcha,
    });
  },
  logout: () => {
    return instance.delete<ResponseType<{}>>("/auth/login");
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
type ResponseType<T> = {
  data: T;
  resultCode: number;
  messages: string[];
};
