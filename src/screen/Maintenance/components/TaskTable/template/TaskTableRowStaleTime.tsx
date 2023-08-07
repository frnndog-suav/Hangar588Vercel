import { genericStyle } from '@/src/styles'
import { TaskTemporary } from '@/src/types/mockedTypes'
import { FC } from 'react'

interface TaskTableRowStaleTimeProps {
    task: TaskTemporary
}

const TaskTableRowStaleTime: FC<TaskTableRowStaleTimeProps> = ({ task }) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                }
            })}
        >
            <label
                className={genericStyle({
                    css: {
                        fontSize: 16,
                        fontWeight: 500,
                        color: '$onyx'
                    }
                })}
            >
                Data de vencimento
            </label>
            <input
                type="text"
                required
                className={genericStyle({
                    css: {
                        border: '1px solid $battleshipGray',
                        fontSize: 16,
                        padding: 4,
                        borderRadius: 4,
                        outline: 'none',
                        fontWeight: 500
                    }
                })}
                defaultValue={task.staleTimeDate}
            />
        </div>
    )
}

export default TaskTableRowStaleTime
