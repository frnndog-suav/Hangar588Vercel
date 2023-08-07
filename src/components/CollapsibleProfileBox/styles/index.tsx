import { css, keyframes } from '@stitches/react'
import { UPPER_BAR_HEIGHT, UPPER_BAR_PADDING } from '@/src/constants/components'

const collapsiblePaddingX = 16
const collapsibleTextColor = '$marianBlue'
const buttonTextColor = '#fff'
const buttonBackgroundColor = '$marianBlue'
const buttonBackgroundHoverColor = '$yaleBlue'
const buttonHeight = 30
const buttonFontSize = 16
const avatarSize = 45
const avatarBorderRadius = 999

export enum CollapsibleTriggerStyle {
    Expanded = 0,
    Retracted = 1
}

export const collapsibleRoot = css({
    display: 'flex',
    top: 0,
    flexDirection: 'column',
    position: 'absolute',
    right: UPPER_BAR_PADDING,
    backgroundColor: 'transparent'
})

export const collapsibleTrigger = css({
    display: 'flex',
    padding: collapsiblePaddingX,
    minHeight: UPPER_BAR_HEIGHT,
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    variants: {
        variant: {
            [CollapsibleTriggerStyle.Expanded]: {
                color: '$marianBlue',
                backgroundColor: '#fff'
            },
            [CollapsibleTriggerStyle.Retracted]: {
                color: '$marianBlue',
                backgroundColor: '#fff',
                '&:hover': {
                    backgroundColor: '$whiteSmoke'
                }
            }
        }
    },
    defaultVariants: {
        variant: CollapsibleTriggerStyle.Retracted
    }
})

export const userInfo = css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginRight: 24,
    gap: 4
})

export const avatarRoot = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarBorderRadius
})

export const avatarImage = css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
})

export const avatarFallback = css({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 15,
    fontWeight: 500
})

export const expandedContent = css({
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingTop: 18,
    paddingBottom: 14,
    paddingLeft: collapsiblePaddingX,
    paddingRight: collapsiblePaddingX,
    color: collapsibleTextColor
})

export const profileButton = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    border: 'none',
    backgroundColor: buttonBackgroundColor,
    color: buttonTextColor,
    cursor: 'pointer',
    height: buttonHeight,
    fontFamily: 'inherit',
    fontSize: buttonFontSize,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: buttonBackgroundHoverColor
    }
})
