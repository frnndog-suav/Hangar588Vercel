import Image from 'next/image'
import { SIDE_BAR_MENU_OPTIONS_ICONS_SIZE } from './components'
import { CustomIcons } from './icons'
import { PagePath } from './pagePath'

const iconSize = SIDE_BAR_MENU_OPTIONS_ICONS_SIZE

export type SideBarOptionsConfiguration = {
    id: number
    path: string
    sideBarText: string
    sideBarIcon: JSX.Element
}

export const sideMenuOptionHomePage: SideBarOptionsConfiguration = {
    id: 0,
    path: PagePath.Home,
    sideBarText: 'Página incial',
    sideBarIcon: (
        <Image
            src={CustomIcons.Home.path}
            alt={CustomIcons.Home.name}
            width={iconSize}
            height={iconSize}
            priority
        />
    )
}

export const sideMenuOptionMaintenancePage: SideBarOptionsConfiguration = {
    id: 1,
    path: PagePath.Maintenance,
    sideBarText: 'Manutenção',
    sideBarIcon: (
        <Image
            src={CustomIcons.Maintenance.path}
            alt={CustomIcons.Maintenance.name}
            width={iconSize}
            height={iconSize}
            priority
        />
    )
}

export const sideMenuOptionsAccountPage: SideBarOptionsConfiguration = {
    id: 2,
    path: PagePath.Account,
    sideBarText: 'Minha conta',
    sideBarIcon: (
        <Image
            src={CustomIcons.Person.path}
            alt={CustomIcons.Person.name}
            width={iconSize}
            height={iconSize}
            priority
        />
    )
}

export const sideMenuOptionExitPage: SideBarOptionsConfiguration = {
    id: 3,
    path: '/login',
    sideBarText: 'Sair',
    sideBarIcon: (
        <Image
            src={CustomIcons.Exit.path}
            alt={CustomIcons.Exit.name}
            width={iconSize}
            height={iconSize}
            priority
        />
    )
}

export const SideBarMenuOptions = {
    [sideMenuOptionHomePage.id]: sideMenuOptionHomePage,
    [sideMenuOptionMaintenancePage.id]: sideMenuOptionMaintenancePage,
    [sideMenuOptionsAccountPage.id]: sideMenuOptionsAccountPage,
    [sideMenuOptionExitPage.id]: sideMenuOptionExitPage
}
