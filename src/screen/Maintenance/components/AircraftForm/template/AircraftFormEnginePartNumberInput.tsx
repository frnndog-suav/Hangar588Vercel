import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'
import { ChangeEvent, useState } from 'react'
import IMask from 'imask'

const { enginePartNumberText, invalidEnginePartNumberText } =
    screenResources.maintenance.components.aircraftForm

const enginePartNumberFormatter = IMask.createPipe({
    mask: '0000000000000000-000'
})

export default function AircraftFormEnginePartNumberInput() {
    const [enginePartNumber, setEnginePartNumber] =
        useState<string>('5645351323521321000')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEnginePartNumber(e.target.value)
    }

    return (
        <Form.Field name="enginePartNumber">
            <div className={aircraftFormField()}>
                <Form.Label>{enginePartNumberText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        onChange={handleOnChange}
                        value={enginePartNumberFormatter(enginePartNumber)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidEnginePartNumberText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
