import { TaskCategory } from '@/src/types/mockedTypes'
import { create } from 'zustand'

type MapMenuStore = {
    selectedCategory: TaskCategory
    setSelectedCategory: (taskCategory: TaskCategory) => void
}

export const useMapMenuStore = create<MapMenuStore>()((set) => ({
    selectedCategory: 0,
    setSelectedCategory: (taskCategory) =>
        set(() => ({ selectedCategory: taskCategory }))
}))
