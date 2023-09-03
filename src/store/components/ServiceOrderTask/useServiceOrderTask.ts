import { TaskTemporary } from '@/src/types/mockedTypes'
import { create } from 'zustand'

interface ServiceOrderTask {
    selectedTasks: TaskTemporary[]
    addTask: (task: TaskTemporary) => void
    clear: () => void
    removeTask: (taskId?: string) => void
}

const useServiceOrderTask = create<ServiceOrderTask>((set) => ({
    selectedTasks: [],
    clear: () => set({ selectedTasks: [] }),
    removeTask: (taskId?: string) =>
        set((state) => ({
            selectedTasks: state.selectedTasks.filter(
                (task) => task.id !== taskId
            )
        })),
    addTask: (task: TaskTemporary) =>
        set((state) => ({
            selectedTasks: [...state.selectedTasks, task]
        }))
}))

export default useServiceOrderTask
