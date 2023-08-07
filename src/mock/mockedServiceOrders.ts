import { ServiceOrderStatus, ServiceOrderTemporary } from '../types/mockedTypes'

export const mockedServiceOrders: ServiceOrderTemporary[] = [
    {
        id: 'a4d9accc-f9a1-44cc-bf4f-ec645e9ece7c',
        name: 'OS123456',
        status: ServiceOrderStatus.Closed
    },
    {
        id: '0f4f41fc-3bae-4c2d-9d0b-2c37e4249548',
        name: 'OS323254',
        status: ServiceOrderStatus.Open
    },
    {
        id: '58ded88a-3bae-43dc-b31f-5d9b6f287ad8',
        name: 'OS987654',
        status: ServiceOrderStatus.Closed
    },
    {
        id: '5b4061ff-ed76-4f42-b4bd-13bd4e7f230c',
        name: 'OS123456',
        status: ServiceOrderStatus.Open
    },
    {
        id: '10acab6f-f6d0-4052-ac7f-051e90dd942d',
        name: 'OS564309',
        status: ServiceOrderStatus.Closed
    },
    {
        id: 'c78ebc46-38b1-4fd0-8c2e-62f57f34df22',
        name: 'OS777111',
        status: ServiceOrderStatus.Open
    },
    {
        id: 'f1883c2f-01d6-4cb5-b3e1-076eb2c6a3ed',
        name: 'OS203948',
        status: ServiceOrderStatus.Closed
    },
]
