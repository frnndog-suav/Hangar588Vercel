import { create } from 'zustand'

type SideBarState = {
    shouldDisplay: boolean | null
    setIsDisplaying: (shouldDisplay: boolean | null) => void
}

export const useSideBarStore = create<SideBarState>()((set) => ({
    shouldDisplay: null,
    setIsDisplaying: (shouldDisplay) =>
        set(() => ({ shouldDisplay: shouldDisplay }))
}))
 