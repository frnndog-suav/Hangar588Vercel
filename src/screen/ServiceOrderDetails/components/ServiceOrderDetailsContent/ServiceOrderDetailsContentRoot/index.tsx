import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface ServiceOrderDetailsContentRootProps {
    children: React.ReactNode
}

const ServiceOrderDetailsContentRoot: FC<
    ServiceOrderDetailsContentRootProps
> = ({ children }) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    padding: 24,
                    gap: 16
                }
            })}
        >
            {children}
        </div>
    )
}

export default ServiceOrderDetailsContentRoot
