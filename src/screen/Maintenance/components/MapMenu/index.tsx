import { useMapMenuStore } from '@/src/store/components/MapMenu/useMapMenuStore'
import TemplateMapMenu from './template'

const MapMenu = () => {
    const setSelectedCategory = useMapMenuStore(
        (state) => state.setSelectedCategory
    )

    return <TemplateMapMenu setSelectedCategory={setSelectedCategory} />
}

export default MapMenu
