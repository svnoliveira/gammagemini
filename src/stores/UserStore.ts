import { create } from "zustand";
import { adminStore } from "./AdminStore";
import { ITokenDecoded, IUser, IUserState, TToken } from "./@userTypes";
import { jwtDecode } from "jwt-decode";
import { post, retrieve } from "@/lib/fetchClient";

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
      const data = await post<TToken>("/login/", {
        username,
        password,
      });
      if (data) {
        const token = data.access;
        console.log("reached token", token);
        const decoded: ITokenDecoded = jwtDecode(token) || { user_id: -1 };
        const userID: number = decoded.user_id;
        console.log("reached user", userID);
        const user = get().userList.find((userInfo) => userInfo.id === userID);
        console.log("reached user data", user);
        if (!user) {
          setError("User not found");
          return;
        }
        localStorage.setItem("@GGemini:token", token);
        console.log("reached post local storage");
        const new_userData = {
          token,
          user,
        };
        set({ userData: new_userData });
        setMessage("Login success!");
      }
    } catch (error: unknown) {
      console.log(error);
      setError("Tentativa de login falhou");
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

  loadUser: () => {
    try {
      let loggedUser = localStorage.getItem("@GGemini:token") || "";
      if (loggedUser) {
        loggedUser = loggedUser as string;
        const decoded: ITokenDecoded = jwtDecode(loggedUser);
        const userID: number = decoded.user_id;
        const user = get().userList.find((userInfo) => userInfo.id === userID);
        if (user) {
          set({ userData: { user: user, token: loggedUser } });
        } else {
          get().logout();
        }
      }
    } catch (error) {
      console.error(error);
      get().logout();
    }
  },

  loadUserList: async () => {
    try {
      const data = await retrieve<IUser[]>("/users/");
      if (data) {
        set({ userList: data });
      }
    } catch (error) {
      console.error(error);
    }
  },
}));
