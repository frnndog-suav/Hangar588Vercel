import { genericStyle } from '@/src/styles'
import { ServiceOrderTemporary } from '@/src/types/mockedTypes'
import { FC } from 'react'

interface ServiceOrderTableRowTitleFieldProps {
    serviceOrder: ServiceOrderTemporary
}

const ServiceOrderTableRowTitleField: FC<
    ServiceOrderTableRowTitleFieldProps
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
            <label>{'Ordem de Serviço'}</label>
            <input
                type="text"
                defaultValue={serviceOrder.name}
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

export default ServiceOrderTableRowTitleField
