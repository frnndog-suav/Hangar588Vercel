import { genericStyle } from '@/src/styles'
import { css } from '@stitches/react'

const aircraftOptionStyle = css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    border: '1px solid $silver',
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    cursor: 'pointer',
    backgroundColor: '$ghostWhite',
    '&:hover': {
        backgroundColor: '$lavenderWeb'
    },
    '&:active': {
        backgroundColor: '$powderBlue'
    }
})

export default function AircraftOption() {
    return (
        <div className={aircraftOptionStyle()}>
            <p>{'Modelo: Esquilo B4'}</p>
            <p
                className={genericStyle({
                    css: { fontSize: 18, fontWeight: 700 }
                })}
            >
                {'Matrícula: PT-HJK'}
            </p>
        </div>
    )
}
