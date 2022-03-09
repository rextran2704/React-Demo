import request from "./APIServices";

import { ACCESS_TOKEN } from "../constants";
import { AxiosResponse } from "axios";

export function signin() {}

export function signout(): void {
  localStorage.removeItem(ACCESS_TOKEN);
}

type UserType = {
  user: { name: string };
};

function getCurrentUser(): Promise<AxiosResponse<UserType>> {
  let token: string | null = localStorage.getItem(ACCESS_TOKEN);
  if (!token) return Promise.reject("No access token available");

  return request("GET", "/user");
}

export { getCurrentUser };
