import { apiAxios } from "../api/api";
import { IAuth } from "../types/IAuth.interface";

const AUTH = "auth";

export class AuthService {
  static me() {
    return apiAxios.get<IResponse<IAuth>>(`${AUTH}/me`);
  }
  static login(payload: IAuthPayload) {
    return apiAxios.post<IResponse<{ userID: number }>>(
      `${AUTH}/login`,
      payload
    );
  }
  static logout() {
    return apiAxios.delete<IResponse>(`${AUTH}/login`);
  }

  static getCaptcha() {
    return apiAxios.get<{ url: string }>("security/get-captcha-url");
  }
}

interface IResponse<T = {}> {
  resultCode: number;
  messages: string[];
  data: T;
}
export interface IAuthPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string | null;
}
