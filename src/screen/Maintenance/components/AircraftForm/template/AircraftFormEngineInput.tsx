import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'

const { engineText, invalidEngineText } =
    screenResources.maintenance.components.aircraftForm

export default function AircraftFormEngineInput() {
    return (
        <Form.Field name="engine">
            <div className={aircraftFormField()}>
                <Form.Label>{engineText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        value="Tulio Turbinas"
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidEngineText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
