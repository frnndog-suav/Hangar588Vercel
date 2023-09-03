import { useMapMenuStore } from '@/src/store/components/MapMenu/useMapMenuStore'
import useServiceOrderTask from '@/src/store/components/ServiceOrderTask/useServiceOrderTask'
import { genericStyle } from '@/src/styles'
import { TaskTemporary } from '@/src/types/mockedTypes'
import MapMenu from '../../Maintenance/components/MapMenu'
import { getMockedTasks } from '../../Maintenance/components/TaskTable/mock'

const ServiceOrderCreationTaskMap = () => {
    const { addTask, selectedTasks } = useServiceOrderTask()
    const [selectedCategory] = useMapMenuStore((state) => [
        state.selectedCategory
    ])

    const tasks = getMockedTasks(selectedCategory)

    const isAlreadySelected = (task: TaskTemporary) =>
        selectedTasks.some((selectedTask) => selectedTask.id === task.id)

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    borderRadius: 8,
                    marginTop: 40,
                    paddingTop: 30,
                    paddingBottom: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    gap: 24,
                    flexGrow: 0.2,
                    width: 550,
                    position: 'relative'
                }
            })}
        >
            <MapMenu />

            <div
                className={genericStyle({
                    css: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                        height: 500,
                        overflowY: 'auto'
                    }
                })}
            >
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={genericStyle({
                            css: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                minHeight: 40,
                                backgroundColor: '$whiteSmoke',
                                borderRadius: 8,
                                padding: 16
                            }
                        })}
                    >
                        <label
                            className={genericStyle({
                                css: {
                                    overflowWrap: 'break-word',
                                    width: 350
                                }
                            })}
                        >
                            {task.taskTitle}
                        </label>
                        {!isAlreadySelected(task) && (
                            <button
                                onClick={() => addTask(task)}
                                className={genericStyle({
                                    css: {
                                        backgroundColor: '$shammrockGreen',
                                        borderRadius: 8,
                                        color: '#fff',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        padding: 8,
                                        cursor: 'pointer'
                                    }
                                })}
                            >
                                {'Adicionar task na OS'}
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div
                className={genericStyle({
                    css: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16
                    }
                })}
            >
                <button
                    className={genericStyle({
                        css: {
                            backgroundColor: '$marianBlue',
                            borderRadius: 8,
                            color: '#fff',
                            fontWeight: 500,
                            fontSize: 20,
                            padding: 8,
                            height: 50,
                            cursor: 'pointer'
                        }
                    })}
                >
                    {'Criar tarefa de reparo'}
                </button>
                <button
                    className={genericStyle({
                        css: {
                            backgroundColor: '$shammrockGreen',
                            borderRadius: 8,
                            color: '#fff',
                            fontWeight: 500,
                            fontSize: 20,
                            padding: 8,
                            height: 50,
                            cursor: 'pointer'
                        }
                    })}
                >
                    {'Criar tarefa de substituição'}
                </button>
            </div>
        </div>
    )
}

export default ServiceOrderCreationTaskMap
