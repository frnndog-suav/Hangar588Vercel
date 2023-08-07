import { useServiceOrderStatusStore } from '@/src/store/components/ServiceOrderStatus/userServiceOrderStatus'
import TemplateServiceOrderByStatusMenu from './template'

const ServiceOrderByStatusMenu = () => {
    const { selectedStatus, setSelectedStatus } = useServiceOrderStatusStore()

    return (
        <TemplateServiceOrderByStatusMenu
            setSelectedStatus={setSelectedStatus}
        />
    )
}

export default ServiceOrderByStatusMenu
