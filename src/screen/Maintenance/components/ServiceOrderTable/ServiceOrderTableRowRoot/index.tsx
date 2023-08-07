import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface ServiceOrderTableRowRootProps {
    children: React.ReactNode
}

const ServiceOrderTableRowRoot: FC<ServiceOrderTableRowRootProps> = ({
    children
}) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    paddingTop: 16,
                    paddingBottom: 16,
                    gap: 32
                }
            })}
        >
            {children}
        </div>
    )
}

export default ServiceOrderTableRowRoot
