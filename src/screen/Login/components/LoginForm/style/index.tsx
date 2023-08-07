import { CustomButtonStyle } from '@/src/types/components'
import { css } from '@stitches/react'

export const loginFormInput = css({
    width: 300,
    padding: 12,
    borderRadius: 24,
    border: '2px solid $onyx'
})

export const loginFormBody = css({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 40
})

export const loginFormSubmitButton = css({
    fontSize: 16,
    borderRadius: 24,
    border: 'none',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
    paddingBottom: 8,
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

export const loginFormOptionsSectionStyle = css({
    position: 'fixed',
    bottom: 40,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
})

export const loginFormOptionsStyle = css({
    fontWeight: 600,
    textAlign: 'center',
    '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer'
    }
})
