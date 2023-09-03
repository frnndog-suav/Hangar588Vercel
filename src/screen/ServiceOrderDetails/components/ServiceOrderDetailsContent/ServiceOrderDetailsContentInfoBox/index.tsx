import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface ServiceOrderDetailsContentInfoBoxProps {
    size: number
    label: string
    value?: string
}

const ServiceOrderDetailsContentInfoBox: FC<
    ServiceOrderDetailsContentInfoBoxProps
> = ({ size, label, value }) => {
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
                className={genericStyle({
                    css: {
                        border: '1px solid $battleshipGray',
                        fontSize: 16,
                        padding: 4,
                        borderRadius: 4,
                        outline: 'none'
                    }
                })}
                type="text"
                readOnly
                value={value}
            />
        </div>
    )
}

export default ServiceOrderDetailsContentInfoBox
