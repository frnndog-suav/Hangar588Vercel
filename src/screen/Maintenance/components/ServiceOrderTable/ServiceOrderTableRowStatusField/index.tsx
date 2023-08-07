import { genericStyle } from '@/src/styles'
import { ServiceOrderTemporary } from '@/src/types/mockedTypes'
import { FC } from 'react'

interface ServiceOrderTableRowStatusFieldProps {
    serviceOrder: ServiceOrderTemporary
}

const ServiceOrderTableRowStatusField: FC<
    ServiceOrderTableRowStatusFieldProps
> = ({ serviceOrder }) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                }
            })}
        >
            <label>{'Status'}</label>
            <input
                type="text"
                defaultValue={serviceOrder.status}
                className={genericStyle({
                    css: {
                        border: '1px solid $battleshipGray',
                        fontSize: 16,
                        padding: 4,
                        borderRadius: 4
                    }
                })}
            />
        </div>
    )
}

export default ServiceOrderTableRowStatusField
