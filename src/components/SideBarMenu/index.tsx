import { useSideBarStore } from '@/src/store/global/useSideBarStore/useSideBarStore'
import { TemplateSideBar } from './template'

export const SideBar = () => {
    const [shouldDisplay] = useSideBarStore((state) => [state.shouldDisplay])
    return <TemplateSideBar shouldOpenSideBar={shouldDisplay} />
}
