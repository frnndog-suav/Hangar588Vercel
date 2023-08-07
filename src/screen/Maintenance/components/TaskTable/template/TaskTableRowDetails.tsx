import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface TaskTableRowDetailsProps {
    children: React.ReactNode
}

const TaskTableRowDetails: FC<TaskTableRowDetailsProps> = ({ children }) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right',
                    minWidth: 'fit-content'
                }
            })}
        >
            {children}
        </div>
    )
}

export default TaskTableRowDetails
