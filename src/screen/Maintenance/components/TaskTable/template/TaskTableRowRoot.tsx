import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface TaskTableRowRootProps {
    children: React.ReactNode
}

const TaskTableRowRoot: FC<TaskTableRowRootProps> = ({ children }) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    gap: 150,
                }
            })}
        >
            {children}
        </div>
    )
}

export default TaskTableRowRoot
