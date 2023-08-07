import { useMapMenuStore } from '@/src/store/components/MapMenu/useMapMenuStore'
import { TemplateTaskTable } from './template'
import { getMockedTasks } from './mock'

export const TaskTable = () => {
    const [selectedCategory] = useMapMenuStore((state) => [
        state.selectedCategory
    ])

    const tasks = getMockedTasks(selectedCategory)

    return <TemplateTaskTable tasks={tasks} />
}
