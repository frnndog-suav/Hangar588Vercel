import { create } from 'zustand'

type SelectedPageState = {
    selectedPageId: number
    setSelectedPageId: (pageId: number) => void
}

export const useSelectedPageStore = create<SelectedPageState>()((set) => ({
    selectedPageId: 0,
    setSelectedPageId: (pageId) => set(() => ({ selectedPageId: pageId }))
}))
