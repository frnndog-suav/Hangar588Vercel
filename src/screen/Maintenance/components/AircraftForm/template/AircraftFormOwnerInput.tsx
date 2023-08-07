import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'

const { ownerText, invalidOwnerText } =
    screenResources.maintenance.components.aircraftForm

export default function AircraftFormOwnerInput() {
    return (
        <Form.Field name="owner">
            <div className={aircraftFormField()}>
                <Form.Label>{ownerText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        value="Vicente Alfândega"
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidOwnerText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
