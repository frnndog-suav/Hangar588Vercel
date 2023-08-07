import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import IMask from 'imask'
import { ChangeEvent, useState } from 'react'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'

const { engineCyclesText, invalidEngineCyclesText } =
    screenResources.maintenance.components.aircraftForm

const ngCyclesFormatter = IMask.createPipe({
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

//TODO (fernando.goia) Verify whats 'NG' stands for 
// g - gas
// f - free turbine
export default function AircraftFormNGInputs() {
    const [ngCycles, setNGCycles] = useState<string>('')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNGCycles(e.target.value)
    }

    return (
        <Form.Field name="ngCycles">
            <div className={aircraftFormField()}>
                <Form.Label>{engineCyclesText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        onChange={handleOnChange}
                        className={aircraftFormInput()}
                        value={ngCyclesFormatter(ngCycles)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidEngineCyclesText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
