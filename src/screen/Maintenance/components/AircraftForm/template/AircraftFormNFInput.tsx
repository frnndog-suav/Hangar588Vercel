import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import IMask from 'imask'
import { ChangeEvent, useState } from 'react'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'

const { nfCyclesText, invalidNfCyclesText } =
    screenResources.maintenance.components.aircraftForm

const nfCyclesFormatter = IMask.createPipe({
    mask: Number, // enable number mask
    // scale: 2, // digits after point, 0 for integers
    thousandsSeparator: '.', // any single char
    padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
    normalizeZeros: true, // appends or removes zeros at ends
    radix: ',', // fractional delimiter
    mapToRadix: ['.'], // symbols to process as radix
    // additional number interval options (e.g.)
    min: 0
})

export default function AircraftFormNFInput() {
    const [nfCycles, setNFCycles] = useState<string>('')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNFCycles(e.target.value)
    }

    return (
        <Form.Field name="nfCycles">
            <div className={aircraftFormField()}>
                <Form.Label>{nfCyclesText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        onChange={handleOnChange}
                        className={aircraftFormInput()}
                        value={nfCyclesFormatter(nfCycles)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidNfCyclesText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
