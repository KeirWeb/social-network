import axios from "axios";
import { UserType } from "../redux/users-reducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
});
type ResponseType<U> = {
  items: U[];
  totalCount: number;
  error: string;
};
export const usersApi = {
  getUsers: (page: number = 1, pageSize: number = 10) => {
    return instance
      .get<ResponseType<UserType>>(`users?page=${page}&count=${pageSize}`)
      .then((res) => res.data);
  },
};
