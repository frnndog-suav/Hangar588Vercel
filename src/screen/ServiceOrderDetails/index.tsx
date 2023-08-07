import ScreenContent from '@/src/components/ScreenContent'
import { mockedServiceOrders } from '@/src/mock/mockedServiceOrders'
import { genericStyle } from '@/src/styles'
import { useRouter } from 'next/router'
import React from 'react'

const ServiceOrderDetailsScreen = () => {
    const router = useRouter()
    const { id } = router.query

    const serviceOrder = mockedServiceOrders.find((so) => so.id === id)

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }
            })}
        >
            <ScreenContent title={'Detalhes da Order de Serviço'}>
                <React.Fragment>
                    <p
                        className={genericStyle({
                            css: {
                                marginTop: 40,
                                marginBottom: 8,
                                fontSize: 24
                            }
                        })}
                    >
                        {serviceOrder?.name}
                    </p>
                </React.Fragment>
            </ScreenContent>
        </div>
    )
}

export default ServiceOrderDetailsScreen
