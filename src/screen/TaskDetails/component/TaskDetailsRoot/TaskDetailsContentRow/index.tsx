import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface TaskDetailsContentRowProps {
    children: React.ReactNode
}

const TaskDetailsContentRow: FC<TaskDetailsContentRowProps> = ({
    children
}) => (
    <div
        className={genericStyle({
            css: {
                display: 'flex',
                gap: 24
            }
        })}
    >
        {children}
    </div>
)

export default TaskDetailsContentRow
