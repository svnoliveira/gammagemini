import { create } from "zustand";
import { adminStore } from "./AdminStore";
import { IUserState, TToken } from "./@userTypes";
import { jwtDecode } from "jwt-decode";
import { post } from "@/lib/fetchClient";

const setError = adminStore.getState().setError;
const setMessage = adminStore.getState().setMessage;
const setLoading = adminStore.getState().setLoading;

export const userStore = create<IUserState>()((set, get) => ({
  userData: { user: null, token: "" },
  userList: [],

  setUserData: (userData) => set({ userData }),
  setUserList: (userList) => set({ userList }),

  login: async (username, password) => {
    setLoading(true);
    try {
      const data = await post<TToken>("auth/login/", {
        username,
        password,
      });
      const token = data.access;
      const decoded: any = jwtDecode(token);
      const userID: number = decoded.user_id;
      const user = get().userList.find((userInfo) => userInfo.id === userID);
      if (!user) {
        setError("User not found");
        return;
      }
      localStorage.setItem("@GGemini:token", token);
      const new_userData = {
        token,
        user,
      };
      set({ userData: new_userData });
      setMessage("Login success!");
    } catch (error: any) {
      console.log(error);
      setError(
        error.message === "Usuário desativado"
          ? "Usuário desativado"
          : "Tentativa de login falhou"
      );
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
        setMessage("");
      }, 2000);
    }
  },
  logout: () => {
    localStorage.removeItem("@GGemini:token");
    set({ userData: { user: null, token: "" } });
  },
}));
