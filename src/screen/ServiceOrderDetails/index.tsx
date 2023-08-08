import ScreenContent from '@/src/components/ScreenContent'
import { mockedServiceOrders } from '@/src/mock/mockedServiceOrders'
import { useMapMenuStore } from '@/src/store/components/MapMenu/useMapMenuStore'
import { genericStyle } from '@/src/styles'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { getMockedTasks } from '../Maintenance/components/TaskTable/mock'
import { ServiceOrderDetailsContent } from './components/ServiceOrderDetailsContent/compound'
import { TaskCategory } from '@/src/types/mockedTypes'

const ServiceOrderDetailsScreen = () => {
    const router = useRouter()
    const { id } = router.query

    const serviceOrder = mockedServiceOrders.find((so) => so.id === id)

    const [setSelectedCategory] = useMapMenuStore((state) => [
        state.setSelectedCategory
    ])

    useEffect(
        () => setSelectedCategory(TaskCategory.Components),
        [setSelectedCategory]
    )

    const tasks = getMockedTasks(TaskCategory.Components)

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
                    <ServiceOrderDetailsContent.Root>
                        <ServiceOrderDetailsContent.Row>
                            <ServiceOrderDetailsContent.InfoBox
                                label={'Status'}
                                size={1}
                                value={'Aberto'}
                            />
                            <ServiceOrderDetailsContent.InfoBox
                                label={'Data de criação'}
                                size={1}
                                value={'01/01/2023'}
                            />
                            <ServiceOrderDetailsContent.InfoBox
                                label={'Qtd. Tarefas'}
                                size={1}
                                value={'5'}
                            />
                            <ServiceOrderDetailsContent.InfoBox
                                label={'Tarefas concluídas'}
                                size={1}
                                value={'5'}
                            />
                            <ServiceOrderDetailsContent.InfoBox
                                label={'Tarefas em aberto'}
                                size={1}
                                value={'5'}
                            />
                        </ServiceOrderDetailsContent.Row>
                        <hr
                            className={genericStyle({
                                css: {
                                    border: '1px solid $antiFlashWhite',
                                    width: '100%'
                                }
                            })}
                        />
                        <ServiceOrderDetailsContent.List tasks={tasks} />
                        <ServiceOrderDetailsContent.Row>
                            <ServiceOrderDetailsContent.OptionButton label="Começar tarefa" />
                            <ServiceOrderDetailsContent.OptionButton label="Pausar tarefa" />
                            <ServiceOrderDetailsContent.OptionButton label="Concluir tarefa" />
                            <ServiceOrderDetailsContent.OptionButton label="Imprimir Cartões" />
                            <ServiceOrderDetailsContent.OptionButton label="Imprimir OS" />
                            <ServiceOrderDetailsContent.OptionButton label="Fechar OS" />
                        </ServiceOrderDetailsContent.Row>
                    </ServiceOrderDetailsContent.Root>
                </React.Fragment>
            </ScreenContent>
        </div>
    )
}

export default ServiceOrderDetailsScreen
