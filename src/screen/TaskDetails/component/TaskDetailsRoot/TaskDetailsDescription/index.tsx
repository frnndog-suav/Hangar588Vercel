import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface TaskDetailsDescriptionProps {
    label: string
    value?: string
    size: number
}

const TaskDetailsDescription: FC<TaskDetailsDescriptionProps> = ({
    label,
    size,
    value
}) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    flexGrow: size
                }
            })}
        >
            <label>{label}</label>
            <textarea
                rows={5}
                readOnly
                value={value}
                className={genericStyle({
                    css: {
                        border: '1px solid $battleshipGray',
                        fontSize: 16,
                        padding: 4,
                        borderRadius: 4,
                        resize: 'none',
                        outline: 'none',
                        whiteSpace: 'pre-line'
                    }
                })}
            ></textarea>
        </div>
    )
}

export default TaskDetailsDescription
