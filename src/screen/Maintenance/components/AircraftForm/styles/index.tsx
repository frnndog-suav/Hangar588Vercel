import { AIRCRAFT_FORM_LARGE_INPUT_WIDTH } from '@/src/constants/components'
import { css } from '@stitches/react'

export const aircraftFormField = css({
    display: 'flex',
    flexDirection: 'column'
})

export const aircraftFormInput = css({
    border: '1px solid $battleshipGray',
    fontSize: 16,
    padding: 4,
    borderRadius: 4,
    width: AIRCRAFT_FORM_LARGE_INPUT_WIDTH,
    outline: 'none'
})

export const aircraftFormInvalidText = css({
    marginTop: 8,
    color: '$engineeringOrange'
})
