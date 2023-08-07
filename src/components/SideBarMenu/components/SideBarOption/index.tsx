import { SideBarOptionsConfiguration } from '@/src/constants/sideBarOptions'
import { useSelectedPageStore } from '@/src/store/components/SideBarMenu/useSelectedPageStore/useSelectedPageStore'
import TemplateSideBarOption from './template'

type SideBarOptionType = {
    sideBarOptionsConfiguration: SideBarOptionsConfiguration
}

export default function SideBarOption({
    sideBarOptionsConfiguration
}: SideBarOptionType) {
    const [selectedPageId, setSelectedPageId] = useSelectedPageStore(
        (state) => [state.selectedPageId, state.setSelectedPageId]
    )

    return (
        <TemplateSideBarOption
            sideBarOptionsConfiguration={sideBarOptionsConfiguration}
            selectedPageId={selectedPageId}
            handleSelectedPageId={setSelectedPageId}
        />
    )
}
