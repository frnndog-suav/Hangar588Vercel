import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface TaskDetailsMainInputProps {
    label: string
    value: string
    size: number
}

const TaskDetailsMainInput: FC<TaskDetailsMainInputProps> = ({
    label,
    size,
    value
}) => (
    <div
        className={genericStyle({
            css: {
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                flexGrow: size,
                fontWeight: 600                
            }
        })}
    >
        <label>{label}</label>
        <input
            className={genericStyle({
                css: {
                    border: '1px solid $battleshipGray',
                    fontSize: 16,
                    padding: 4,
                    borderRadius: 4
                }
            })}
            type="text"
            value={value}
            readOnly
        />
    </div>
)
export default TaskDetailsMainInput
