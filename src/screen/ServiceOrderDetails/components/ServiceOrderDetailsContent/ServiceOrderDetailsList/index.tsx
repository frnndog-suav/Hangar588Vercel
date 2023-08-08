import { genericStyle } from '@/src/styles'
import { TaskTemporary } from '@/src/types/mockedTypes'
import { FC } from 'react'
import { ServiceOrderDetailsContent } from '../compound'

interface ServiceOrderDetailsListProps {
    tasks: TaskTemporary[]
}

const ServiceOrderDetailsList: FC<ServiceOrderDetailsListProps> = ({
    tasks
}) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    height: 500,
                    overflowY: 'auto'
                }
            })}
        >
            {tasks.map((task) => (
                <ServiceOrderDetailsContent.ListItem
                    key={`service-order-details-${task.id}`}
                    task={task}
                />
            ))}
        </div>
    )
}

export default ServiceOrderDetailsList
