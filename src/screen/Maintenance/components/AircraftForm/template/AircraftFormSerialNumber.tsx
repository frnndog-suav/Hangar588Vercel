import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'
import IMask from 'imask'
import { ChangeEvent, useState } from 'react'

const { aircraftSNText, invalidAircraftSNText } =
    screenResources.maintenance.components.aircraftForm

const aircraftSNFormatter = IMask.createPipe({
    mask: '000000000-00'
})

export default function AircraftFormSerialNumber() {
    const [aircraftSN, setAircraftSN] = useState<string>('54481211200')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAircraftSN(e.target.value)
    }

    return (
        <Form.Field name="aircraftSN">
            <div className={aircraftFormField()}>
                <Form.Label>{aircraftSNText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        onChange={handleOnChange}
                        value={aircraftSNFormatter(aircraftSN)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidAircraftSNText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
