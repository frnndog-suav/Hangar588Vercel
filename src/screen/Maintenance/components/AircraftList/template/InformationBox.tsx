import { genericStyle } from '@/src/styles'
import { css } from '@stitches/react'

const informationBox = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    width: '60px', //TODO (fernando.goia) Verify width according to screen resolution
    fontSize: 16,
    variants: {
        variant: {
            light: {
                border: '1px solid $silver',
                backgroundColor: '$ghostWhite'
            },
            dark: {
                backgroundColor: '$marianBlue',
                color: '#fff'
            }
        }
    },
    defaultVariants: {
        variant: 'light'
    }
})

type InformationBoxType = {
    label: string
    value: string
    dark?: boolean
}

export default function InformationBox({
    label,
    value,
    dark
}: InformationBoxType) {
    return (
        <div className={informationBox({ variant: dark ? 'dark' : 'light' })}>
            <label>{label}</label>
            <p
                className={genericStyle({
                    css: {
                        fontWeight: 600
                    }
                })}
            >
                {value}
            </p>
        </div>
    )
}
