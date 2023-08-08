import { genericStyle } from '@/src/styles'
import { TaskTemporary } from '@/src/types/mockedTypes'
import {
    CheckCircleIcon,
    PauseCircleIcon,
    PlayCircleIcon as PlayCircleOutlined,
    TrashIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { ServiceOrderDetailsContent } from '../compound'

interface ServiceOrderDetailsListItemProps {
    task: TaskTemporary
}

const ServiceOrderDetailsListItem: FC<ServiceOrderDetailsListItemProps> = ({
    task
}) => {
    const router = useRouter()

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    gap: 20,
                    backgroundColor: '$whiteSmoke',
                    borderRadius: 8,
                    padding: 16,
                    alignItems: 'center'
                }
            })}
        >
            <ServiceOrderDetailsContent.InfoBox
                label={'Tarefa'}
                size={1}
                value={task.taskName}
            />
            <ServiceOrderDetailsContent.InfoBox
                label={'Tempo decorrido'}
                size={0.5}
                value={task.staleTimeDate}
            />
            <ServiceOrderDetailsContent.InfoBox
                label={'Status'}
                size={0.5}
                value={'Aberto'}
            />
            <PlayCircleOutlined
                className={genericStyle({
                    css: { width: 35 }
                })}
            />
            <PauseCircleIcon
                className={genericStyle({
                    css: { width: 35 }
                })}
            />
            <CheckCircleIcon
                className={genericStyle({
                    css: { width: 35 }
                })}
            />
            <TrashIcon
                className={genericStyle({
                    css: { width: 35 }
                })}
            />
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
                    router.push(`/maintenance/task/${task.id}`)
                }}
            >
                Ver mais detalhes
            </p>
        </div>
    )
}

export default ServiceOrderDetailsListItem
