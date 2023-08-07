import { genericStyle } from '@/src/styles'
import { TaskTemporary } from '@/src/types/mockedTypes'
import { useRouter } from 'next/router'
import { TaskTableRowComponent } from '../compound'

type TaskTableRowProps = {
    task: TaskTemporary
}

export const TaskTableRow = ({ task }: TaskTableRowProps) => {
    const router = useRouter()

    return (
        <TaskTableRowComponent.Root>
            <TaskTableRowComponent.Display>
                <TaskTableRowComponent.Name task={task} />
                <div
                    className={genericStyle({
                        css: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        }
                    })}
                >
                    <TaskTableRowComponent.StaleTime task={task} />
                    <TaskTableRowComponent.AvailableHours task={task} />
                </div>
            </TaskTableRowComponent.Display>
            <TaskTableRowComponent.Details>
                <p
                    className={genericStyle({
                        css: {
                            color: '$marianBlue',
                            fontWeight: 600,
                            fontSize: 20,
                            cursor: 'pointer',
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }
                    })}
                    onClick={() => {
                        router.push(`/maintenance/task/${task.id}`)
                    }}
                >
                    Ver mais detalhes
                </p>
            </TaskTableRowComponent.Details>
        </TaskTableRowComponent.Root>
    )
}
