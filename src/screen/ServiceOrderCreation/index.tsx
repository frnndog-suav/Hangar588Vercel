import ScreenContent from '@/src/components/ScreenContent'
import { genericStyle } from '@/src/styles'
import { UUID } from 'uuidjs'
import { ServiceOrderCreationComponent } from './compound'

const ServiceOrderCreationScreen = () => {
    const id = UUID.generate()

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    height: '100%'
                }
            })}
        >
            <ScreenContent title={'Criação de ordem de serviço'}>
                <div
                    className={genericStyle({
                        css: {
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            height: '100%'
                        }
                    })}
                >
                    <div
                        className={genericStyle({
                            css: {
                                display: 'flex',
                                gap: 20,
                                height: '100%'
                            }
                        })}
                    >
                        <ServiceOrderCreationComponent.Content />
                        <ServiceOrderCreationComponent.TaskMap />
                    </div>
                </div>
            </ScreenContent>
        </div>
    )
}

export default ServiceOrderCreationScreen
