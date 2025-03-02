import { create } from "zustand";
import { getHabbits } from "../firebase/habbit/habbitDB";


export const useHabbitStore = create((set) => ({
  habbits: [],

  setHabbits: (newHabbit) =>
    set((state) => ({ habbits: [...state.habbits, newHabbit] })),
  loadHabbitsFromDb: async (setLoading) => {
    try{
        const data = await getHabbits();
        set({ habbits: data });
        setLoading(false)
    } catch(err){
        console.log(`Ошибка при довабления в store данных из базы данных: ${err}`)
    }
  },
}));

export const useStoreLoading = create((set) => ({
    loading: true,
    setLoading: (newLoading) => set(() => ({loading: newLoading}))
}))