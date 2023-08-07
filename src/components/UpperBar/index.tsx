import { sideMenuOptionHomePage } from '@/src/constants/sideBarOptions'
import { useSelectedPageStore } from '@/src/store/components/SideBarMenu/useSelectedPageStore/useSelectedPageStore'
import { TemplateUpperBar } from './template'

export const UpperBar = () => {
    const [setSelectedPageId] = useSelectedPageStore((state) => [
        state.setSelectedPageId
    ])

    const handleSideBarMenuSelection = () => {
        setSelectedPageId(sideMenuOptionHomePage.id)
    }

    return (
        <TemplateUpperBar handleRedirectHomePage={handleSideBarMenuSelection} />
    )
}
