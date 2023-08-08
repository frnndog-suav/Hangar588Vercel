import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface ServiceOrderDetailsOptionsButtonProps {
    label: string
}

const ServiceOrderDetailsOptionsButton: FC<
    ServiceOrderDetailsOptionsButtonProps
> = ({ label }) => {
    return (
        <button
            className={genericStyle({
                css: {
                    backgroundColor: '$marianBlue',
                    color: '#fff',
                    fontSize: 16,
                    padding: 10,
                    borderRadius: 8,
                    width: '100%',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '$yaleBlue',
                        transition: '0.3s'
                    },
                    '&:active': {
                        backgroundColor: '$spaceCadet',
                    }
                }
            })}
        >
            {label}
        </button>
    )
}

export default ServiceOrderDetailsOptionsButton
