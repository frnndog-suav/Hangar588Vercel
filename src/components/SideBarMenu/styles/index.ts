import { SIDE_BAR_MENU_BACKGROUND_COLOR } from '@/src/constants/components'
import { css, keyframes } from '@stitches/react'

const sideBarBackgroundColor = SIDE_BAR_MENU_BACKGROUND_COLOR
const sideBarAnimationTime = '500ms'
const maxSideBarWidth = 270
const minSideBarWidth = 50

export const openSideBarAnimation = keyframes({
    '0%': { width: minSideBarWidth },
    '100%': { width: maxSideBarWidth }
})

export const closeSideBarAnimation = keyframes({
    '0%': { width: maxSideBarWidth },
    '100%': { width: minSideBarWidth }
})

export enum SideBarStyle {
    InitialState = 0,
    Open = 1,
    Close = 2
}

export const sideBarContainer = css({
    display: 'flex',
    paddingTop: 50,
    //TODO (fernando.goia) Use this to stick sideBar to the left side of screen
    // position: 'fixed',
    // height: '100%',
    left: 0,
    overflow: 'hidden',
    backgroundColor: sideBarBackgroundColor,
    transition: sideBarAnimationTime,
    variants: {
        variant: {
            [SideBarStyle.Open]: {
                width: maxSideBarWidth,
                animation: `${openSideBarAnimation} ${sideBarAnimationTime}`
            },
            [SideBarStyle.Close]: {
                width: minSideBarWidth,
                animation: `${closeSideBarAnimation} ${sideBarAnimationTime}`
            },
            [SideBarStyle.InitialState]: {
                width: minSideBarWidth
            }
        }
    }
})
