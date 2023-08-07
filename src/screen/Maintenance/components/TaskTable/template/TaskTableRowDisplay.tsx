import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface TaskTableRowDisplayProps {
    children: React.ReactNode
}

const TaskTableRowDisplay: FC<TaskTableRowDisplayProps> = ({ children }) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    width: '100%'
                }
            })}
        >
            {children}
        </div>
    )
}

export default TaskTableRowDisplay
