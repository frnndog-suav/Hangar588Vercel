import { USER_INFO_FORM_INPUT_WIDTH } from '@/src/constants/components'
import { CustomButtonStyle } from '@/src/types/components'
import { css } from '@stitches/react'

export const formField = css({
    display: 'flex',
    flexDirection: 'column'
})

export const input = css({
    border: '1px solid $battleshipGray',
    fontSize: 16,
    padding: 4,
    borderRadius: 4,
    width: USER_INFO_FORM_INPUT_WIDTH,
    outline: 'none'
})

export const invalidText = css({
    marginTop: 8,
    color: '$engineeringOrange'
})

export const userInfoFormTitleStyle = css({
    fontWeight: 500,
    fontSize: 24
})

export const userInfoFormBodyStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    height: '500px'
})

export const userInfoFormInputShelfStyle = css({
    display: 'flex',
    gap: 32
})

export const userInfoFormButtonStyle = css({
    fontSize: 16,
    borderRadius: 8,
    border: 'none',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 12,
    variants: {
        variant: {
            [CustomButtonStyle.Disabled]: {
                backgroundColor: '$antiFlashWhite',
                color: '$battleshipGray'
            },
            [CustomButtonStyle.Available]: {
                cursor: 'pointer',
                backgroundColor: '$marianBlue',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '$yaleBlue'
                },
                '&:active': {
                    backgroundColor: '$spaceCadet'
                }
            }
        }
    },
    defaultVariants: {
        variant: 'available'
    }
})
