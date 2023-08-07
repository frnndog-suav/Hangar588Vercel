import { genericStyle } from '@/src/styles'
import TemplateMaintenanceScreen from './template'

export default function MaintenanceScreen() {
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
            <TemplateMaintenanceScreen />
        </div>
    )
}
