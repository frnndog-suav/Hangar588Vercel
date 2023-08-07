import { ServiceOrderStatus } from '../types/mockedTypes'

export const serviceOrderStatusEnumConverter = (
    serviceOrderStatusText: string
) => {
    switch (serviceOrderStatusText) {
        case 'Abertos':
            return ServiceOrderStatus['Open']
        case 'Fechados':
            return ServiceOrderStatus['Closed']
        default:
            return ServiceOrderStatus['All']
    }
}
