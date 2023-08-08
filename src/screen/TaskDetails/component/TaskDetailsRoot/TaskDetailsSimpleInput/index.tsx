import { genericStyle } from '@/src/styles'
import { css } from '@stitches/react'
import { FC } from 'react'

const inputStyle = css({
    border: '1px solid $battleshipGray',
    fontSize: 16,
    padding: 4,
    borderRadius: 4,
    outline: 'none',
    variants: {
        variant: {
            blue: {
                backgroundColor: '$marianBlue',
                color: '#fff',
                border: '1px solid $whiteSmoke'
            },
            green: {
                backgroundColor: '$shammrockGreen',
                color: '#fff',
                border: '1px solid $whiteSmoke'
            },
            gray: {
                backgroundColor: '$timberWolf',
                color: '#fff',
                border: '1px solid $whiteSmoke'
            },
            normal: {
                backgroundColor: '#fff',
                color: '#000'
            }
        }
    },
    defaultVariants: {
        variant: 'normal'
    }
})

interface TaskDetailsSimpleInputProps {
    label: string
    value: string
    size: number
    green?: boolean
    blue?: boolean
    gray?: boolean
}

const TaskDetailsSimpleInput: FC<TaskDetailsSimpleInputProps> = ({
    label,
    value,
    size,
    blue,
    green,
    gray
}) => {
    let style: 'blue' | 'green' | 'normal' | 'gray' = 'normal'

    if (blue) {
        style = 'blue'
    } else if (green) {
        style = 'green'
    } else if (gray) {
        style = 'gray'
    }

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
            <input
                className={inputStyle({ variant: style })}
                type="text"
                value={value}
                readOnly
            />
        </div>
    )
}

export default TaskDetailsSimpleInput
