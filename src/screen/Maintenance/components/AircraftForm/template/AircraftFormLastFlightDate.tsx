import { ChangeEvent, useState } from 'react'
import * as Form from '@radix-ui/react-form'
import IMask from 'imask'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'
import { screenResources } from '@/src/resources/screenResources'

const { lastFlightDateText, invalidLastFlightDateText } =
    screenResources.maintenance.components.aircraftForm

const lastFlightDateFormatter = IMask.createPipe({
    mask: '00/00/0000'
})

const AircraftFormLastFlightDate = () => {
    const [lastFlightDate, setLastFlightDate] = useState<string>('17/07/2023')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastFlightDate(e.target.value)
    }

    return (
        <Form.Field name="ngCycles">
            <div className={aircraftFormField()}>
                <Form.Label>{lastFlightDateText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        onChange={handleOnChange}
                        className={aircraftFormInput()}
                        value={lastFlightDateFormatter(lastFlightDate)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidLastFlightDateText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}

export default AircraftFormLastFlightDate
