import { mockedServiceOrders } from '@/src/mock/mockedServiceOrders'
import { genericStyle } from '@/src/styles'
import { ServiceOrderTableRow } from './compound'

const ServiceOrderTable = () => {
    return (
        <div
            className={genericStyle({
                css: {
                    backgroundColor: '#fff',
                    marginTop: 32,
                    borderRadius: 12,
                    padding: 20,
                    gap: 10
                }
            })}
        >
            <h2
                className={genericStyle({
                    css: {
                        fontSize: 24
                    }
                })}
            >
                {'Histórico de Ordem de Serviço'}
            </h2>
            {mockedServiceOrders.map((so) => (
                <ServiceOrderTableRow.Root key={so.id}>
                    <ServiceOrderTableRow.TitleField serviceOrder={so} />
                    <ServiceOrderTableRow.StatusField serviceOrder={so} />
                    <ServiceOrderTableRow.DetailsField serviceOrder={so} />
                </ServiceOrderTableRow.Root>
            ))}
        </div>
    )
}

export default ServiceOrderTable
