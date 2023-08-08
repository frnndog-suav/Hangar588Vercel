import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface ServiceOrderDetailsRowProps {
    children: React.ReactNode
}

const ServiceOrderDetailsRow: FC<ServiceOrderDetailsRowProps> = ({
    children
}) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    gap: 20
                }
            })}
        >
            {children}
        </div>
    )
}

export default ServiceOrderDetailsRow
