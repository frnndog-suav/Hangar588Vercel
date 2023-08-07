import { createStitches } from '@stitches/react'

export const { css } = createStitches({
    theme: {
        colors: {
            engineeringOrange: '#c91717',
            ghostWhite: '#EEF2FB',
            lavenderWeb: '#CDD9F3',
            powderBlue: '#ADC1EB',
            aliceBlue: '#F0F8FF',
            marianBlue: '#21408e',
            yaleBlue: '#1B3474',
            spaceCadet: '#132553',
            onyx: '#3d3d3d',
            whiteSmoke: '#f4f4f4',
            antiFlashWhite: '#EBEBEB',
            silver: '#e0e0e0',
            timberWolf: '#d6d6d6',
            battleshipGray: '#858585',
            shammrockGreen: '#449F6E',
            davysGray: '#575D63'
        }
    },
    utils: {
        customYPadding: (value: string) => ({
            paddingTop: value,
            paddingBottom: value
        }),
        customPaddingX: (value: string) => ({
            paddingLeft: value,
            paddingRight: value
        })
    }
})

export const genericStyle = css({})
