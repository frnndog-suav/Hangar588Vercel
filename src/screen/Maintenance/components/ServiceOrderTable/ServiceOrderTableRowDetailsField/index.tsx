import { genericStyle } from '@/src/styles'
import { ServiceOrderTemporary } from '@/src/types/mockedTypes'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface ServiceOrderTableRowDetailsFieldProps {
    serviceOrder: ServiceOrderTemporary
}

const ServiceOrderTableRowDetailsField: FC<
    ServiceOrderTableRowDetailsFieldProps
> = ({ serviceOrder }) => {
    const router = useRouter()

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    alignItems: 'center'
                }
            })}
        >
            <p
                className={genericStyle({
                    css: {
                        color: '$marianBlue',
                        fontWeight: 600,
                        fontSize: 20,
                        cursor: 'pointer',
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    }
                })}
                onClick={() => {
                    router.push(`/maintenance/service-order/${serviceOrder.id}`)
                }}
            >
                Ver mais detalhes
            </p>
        </div>
    )
}

export default ServiceOrderTableRowDetailsField
