import { create } from "zustand";

export const useUserStore = create((set) => ({
    email: "",
    password: "",
    username: "",

    setEmail: (newEmail) => set(({email: newEmail})),
    setPassword: (newPassword) => set(({password: newPassword})),
    setUsername: (newUsername) => set(({username: newUsername})),
}))