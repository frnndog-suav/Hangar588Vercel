import {
    SIDE_BAR_MENU_BACKGROUND_COLOR,
    SIDE_BAR_MENU_OPTIONS_ACTIVE_BACKGROUND_COLOR,
    SIDE_BAR_MENU_OPTIONS_HEIGHT,
    SIDE_BAR_MENU_OPTIONS_HOVER_BACKGROUND_COLOR,
    SIDE_BAR_MENU_OPTIONS_HOVER_TRANSITION,
    SIDE_BAR_MENU_OPTIONS_PADDING,
    SIDE_BAR_MENU_OPTIONS_SELECTED_BACKGROUND_COLOR
} from '@/src/constants/components'
import { SideBarOptionsConfiguration } from '@/src/constants/sideBarOptions'
import { genericStyle } from '@/src/styles'
import { css } from '@stitches/react'
import Link from 'next/link'

enum MenuItemState {
    Default = 'default',
    Selected = 'selected'
}

const linkStyle = css({
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    width: '100%',
    height: '100%'
})

const menuItem = css({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    height: SIDE_BAR_MENU_OPTIONS_HEIGHT,
    paddingLeft: SIDE_BAR_MENU_OPTIONS_PADDING,
    '&:hover': {
        backgroundColor: SIDE_BAR_MENU_OPTIONS_HOVER_BACKGROUND_COLOR,
        transition: SIDE_BAR_MENU_OPTIONS_HOVER_TRANSITION
    },
    '&:active': {
        backgroundColor: SIDE_BAR_MENU_OPTIONS_ACTIVE_BACKGROUND_COLOR
    },
    variants: {
        variant: {
            [MenuItemState.Default]: {
                backgroundColor: SIDE_BAR_MENU_BACKGROUND_COLOR
            },
            [MenuItemState.Selected]: {
                backgroundColor: SIDE_BAR_MENU_OPTIONS_SELECTED_BACKGROUND_COLOR
            }
        }
    }
})

type TemplateSideBarOptionType = {
    selectedPageId: number
    sideBarOptionsConfiguration: SideBarOptionsConfiguration
    handleSelectedPageId: (pageId: number) => void
}

export default function TemplateSideBarOption({
    selectedPageId,
    sideBarOptionsConfiguration,
    handleSelectedPageId
}: TemplateSideBarOptionType) {
    return (
        <li
            onClick={() => handleSelectedPageId(sideBarOptionsConfiguration.id)}
            className={menuItem({
                variant:
                    selectedPageId === sideBarOptionsConfiguration.id
                        ? MenuItemState.Selected
                        : MenuItemState.Default
            })}
        >
            <Link
                href={sideBarOptionsConfiguration.path}
                className={linkStyle()}
            >
                {sideBarOptionsConfiguration.sideBarIcon}
                <p
                    className={genericStyle({
                        css: { whiteSpace: 'nowrap' }
                    })}
                >
                    {sideBarOptionsConfiguration.sideBarText}
                </p>
            </Link>
        </li>
    )
}
