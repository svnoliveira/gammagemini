//export const API_BASE_URL =
//  "https://webapp397901.ip-50-116-31-203.cloudezapp.io/api";
export const API_BASE_URL = "http://api.gammagemini.com/api";

export async function request<T>(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  url: string,
  body?: unknown,
  token?: string
): Promise<T | false> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    //credentials: "include",
  };

  try {
    const res = await fetch(`${API_BASE_URL}${url}`, options);

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${await res.text()}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const retrieve = <T>(url: string, token?: string) =>
  request<T>("GET", url, undefined, token);
export const post = <T>(url: string, body: unknown, token?: string) =>
  request<T>("POST", url, body, token);
export const patch = <T>(url: string, body: unknown, token?: string) =>
  request<T>("PATCH", url, body, token);
export const del = <T>(url: string, token?: string) =>
  request<T>("DELETE", url, undefined, token);
