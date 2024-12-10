import { create } from 'zustand';

interface UserData {
  id: string;
  username: string;
  email: string;
}

interface UserStore {
  user: UserData | null;
  isAuthenticated: boolean;
  setUser: (userData: UserData) => void;
  clearUser: () => void;
  updateUser: (userData: Partial<UserData>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (userData) => set({ user: userData, isAuthenticated: true }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
  updateUser: (userData) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...userData } : null,
    })),
}));