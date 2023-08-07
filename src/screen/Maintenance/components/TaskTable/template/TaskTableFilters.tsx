import { genericStyle } from '@/src/styles'
import MapMenu from '../../MapMenu'

export const TaskTableFilters = () => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    gap: 56
                }
            })}
        >
            <MapMenu />            
        </div>
    )
}
