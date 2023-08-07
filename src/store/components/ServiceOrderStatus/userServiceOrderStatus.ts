import { ServiceOrderStatus } from '@/src/types/mockedTypes'
import { create } from 'zustand'

type ServiceOrderStatusStore = {
    selectedStatus: ServiceOrderStatus
    setSelectedStatus: (status: ServiceOrderStatus) => void
    setOpen: () => void
    setClosed: () => void
}

export const useServiceOrderStatusStore = create<ServiceOrderStatusStore>()((set) => ({
    selectedStatus: 0,
    setSelectedStatus: (status) => set(() => ({ selectedStatus: status })),
    setOpen: () => set(() => ({ selectedStatus: ServiceOrderStatus.Open })),
    setClosed: () => set(() => ({ selectedStatus: ServiceOrderStatus.Closed }))
}))
