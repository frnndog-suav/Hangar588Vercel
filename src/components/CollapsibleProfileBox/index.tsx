import { sideMenuOptionsAccountPage } from '@/src/constants/sideBarOptions'
import { MOCKED_INFO } from '@/src/mock/collapsibleProfileBox'
import { useSelectedPageStore } from '@/src/store/components/SideBarMenu/useSelectedPageStore/useSelectedPageStore'
import { useState } from 'react'
import { TemplateCollapsibleProfileBox } from './template'

export const CollapsibleProfileBox = () => {
    const [openUserInfo, setOpenUserInfo] = useState<boolean>(false)
    const [setSelectedPageId] = useSelectedPageStore((state) => [
        state.setSelectedPageId
    ])

    const handleSideBarMenuSelection = () => {
        setSelectedPageId(sideMenuOptionsAccountPage.id)
    }

    const handleUserInfoController = (value: boolean) => {
        setOpenUserInfo(value)
    }

    return (
        <TemplateCollapsibleProfileBox
            info={MOCKED_INFO}
            handleExpandUserInfoBox={handleUserInfoController}
            shouldOpen={openUserInfo}
            handleRedirectToAccountPage={handleSideBarMenuSelection}
        />
    )
}
