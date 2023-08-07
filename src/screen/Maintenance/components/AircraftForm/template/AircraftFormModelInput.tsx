import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'

const { modelText, invalidModelText } =
    screenResources.maintenance.components.aircraftForm

export default function AircraftFormModelInput() {
    return (
        <Form.Field name="model">
            <div className={aircraftFormField()}>
                <Form.Label>{modelText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        value="Esquilo B4"
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidModelText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
