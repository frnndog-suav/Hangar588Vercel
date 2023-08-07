import {
    SideBarMenuOptions,
    sideMenuOptionExitPage,
    sideMenuOptionHomePage,
    sideMenuOptionMaintenancePage,
    sideMenuOptionsAccountPage
} from '@/src/constants/sideBarOptions'
import { css } from '@stitches/react'
import SideBarController from '../components/SideBarController'
import SideBarOption from '../components/SideBarOption'
import { getSideBarVariant } from '../functions/getSideBarVariant/getSideBarVariant'
import { sideBarContainer } from '../styles'

type TemplateSideBarType = {
    shouldOpenSideBar: boolean | null
}

const menuItemsList = css({
    width: '100%'
})

export const TemplateSideBar = ({ shouldOpenSideBar }: TemplateSideBarType) => (
    <nav
        className={sideBarContainer({
            variant: getSideBarVariant(shouldOpenSideBar)
        })}
    >
        <ul className={menuItemsList()}>
            <SideBarController />
            <SideBarOption
                sideBarOptionsConfiguration={
                    SideBarMenuOptions[sideMenuOptionHomePage.id]
                }
            />
            <SideBarOption
                sideBarOptionsConfiguration={
                    SideBarMenuOptions[sideMenuOptionMaintenancePage.id]
                }
            />
            <SideBarOption
                sideBarOptionsConfiguration={
                    SideBarMenuOptions[sideMenuOptionsAccountPage.id]
                }
            />
            <SideBarOption
                sideBarOptionsConfiguration={
                    SideBarMenuOptions[sideMenuOptionExitPage.id]
                }
            />
        </ul>
    </nav>
)
