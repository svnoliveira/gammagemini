//export const API_BASE_URL = "http://api.gammagenini.com/api/";
export const API_BASE_URL = "http://127.0.0.1:8000/api/";

export async function request<T>(
  method: "GET" | "POST" | "PATCH" | "DELETE",
  url: string,
  body?: any,
  token?: string
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  const res = await fetch(`${API_BASE_URL}${url}`, options);

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${await res.text()}`);
  }

  return res.json();
}

export const get = <T>(url: string, token?: string) =>
  request<T>("GET", url, undefined, token);
export const post = <T>(url: string, body: any, token?: string) =>
  request<T>("POST", url, body, token);
export const patch = <T>(url: string, body: any, token?: string) =>
  request<T>("PATCH", url, body, token);
export const del = <T>(url: string, token?: string) =>
  request<T>("DELETE", url, undefined, token);
