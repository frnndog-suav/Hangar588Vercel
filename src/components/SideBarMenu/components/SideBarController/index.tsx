import { useSideBarStore } from '@/src/store/global/useSideBarStore/useSideBarStore'
import TemplateSideBarController from './template'

export default function SideBarController() {
    const [shouldDisplay, setIsDisplaying] = useSideBarStore((state) => [
        state.shouldDisplay,
        state.setIsDisplaying
    ])

    const handleSideBarDisplay = () => {
        setIsDisplaying(shouldDisplay !== null ? !shouldDisplay : true)
    }

    return (
        <TemplateSideBarController
            handleSideBarDisplay={handleSideBarDisplay}
        />
    )
}
