import * as Tabs from '@radix-ui/react-tabs'
import { css } from '@stitches/react'
import AircraftForm from '../../AircraftForm'
import ServiceOrder from '../../ServiceOrderFilters'
import { TaskTable } from '../../TaskTable'
import { TaskTableFilters } from '../../TaskTable/template/TaskTableFilters'
import ServiceOrderTable from '../../ServiceOrderTable'

const aircraftInfoContainer = css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 36,
    gap: 16
})

const tabListitemStyle = css({
    backgroundColor: '$antiFlashWhite',
    fontSize: 20,
    color: '$marianBlue',
    fontWeight: 600,
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline'
    }
})

const tabListContainerStyle = css({
    display: 'flex',
    paddingTop: 20,
    paddingBottom: 20,
    gap: 56
})

const tabContainerStyle = css({
    display: 'flex',
    flexDirection: 'column'
})

const tabContainer = css({
    display: 'flex',
    flexDirection: 'column'
})

const TemplateMaintenanceTabs = () => {
    return (
        <Tabs.Root className={tabContainerStyle()} defaultValue="tab1">
            <Tabs.List
                className={tabListContainerStyle()}
                aria-label="Manage your account"
            >
                <Tabs.Trigger className={tabListitemStyle()} value="tab1">
                    {'Informações da aeronave'}
                </Tabs.Trigger>
                <Tabs.Trigger className={tabListitemStyle()} value="tab2">
                    {'Mapa de tarefas'}
                </Tabs.Trigger>
                <Tabs.Trigger className={tabListitemStyle()} value="tab3">
                    {'Ordem de serviço'}
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
                <div className={aircraftInfoContainer()}>
                    <AircraftForm />
                </div>
            </Tabs.Content>
            <Tabs.Content value="tab2">
                <div className={tabContainer()}>
                    <TaskTableFilters />
                    <TaskTable />
                </div>
            </Tabs.Content>
            <Tabs.Content value="tab3">
                <div className={tabContainer()}>
                    <ServiceOrder />
                    <ServiceOrderTable />
                </div>
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default TemplateMaintenanceTabs
