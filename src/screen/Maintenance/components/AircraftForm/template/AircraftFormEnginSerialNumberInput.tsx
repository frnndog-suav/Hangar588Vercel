import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'
import IMask from 'imask'
import { ChangeEvent, useState } from 'react'

const { invalidEngineSNText, engineSNText } =
    screenResources.maintenance.components.aircraftForm

const engineSerialNumberFormatter = IMask.createPipe({
    mask: '000000000-00'
})

export default function AircraftFormEngineSerialNumberInput() {
    const [engineSerialNumber, setEngineSerialNumber] =
        useState<string>('54481211200')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEngineSerialNumber(e.target.value)
    }

    return (
        <Form.Field name="engineSN">
            <div className={aircraftFormField()}>
                <Form.Label>{engineSNText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        onChange={handleOnChange}
                        value={engineSerialNumberFormatter(engineSerialNumber)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidEngineSNText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
