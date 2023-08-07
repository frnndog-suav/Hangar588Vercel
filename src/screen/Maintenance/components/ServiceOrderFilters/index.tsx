import { genericStyle } from '@/src/styles'
import { useRouter } from 'next/navigation'
import ServiceOrderByStatusMenu from '../ServiceOrderByStatusMenu'

const ServiceOrder = () => {
    const router = useRouter()

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    gap: 32
                }
            })}
        >
            {/* <ServiceOrderCreationModal /> */}
            <button
                onClick={() => {
                    router.push(`/maintenance/service-order/creation`)
                }}
                className={genericStyle({
                    css: {
                        backgroundColor: '$shammrockGreen',
                        borderRadius: 8,
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: 20,
                        padding: 8,
                        cursor: 'pointer'
                    }
                })}
            >
                {'Criar ordem de serviço'}
            </button>
            <ServiceOrderByStatusMenu />
            <button
                className={genericStyle({
                    css: {
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        color: '$davysGray',
                        fontWeight: 500,
                        fontSize: 24,
                        padding: 16,
                        cursor: 'pointer'
                    }
                })}
            >
                {'Buscar ordem de serviço'}
            </button>
        </div>
    )
}

export default ServiceOrder
