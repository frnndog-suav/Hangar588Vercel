import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import {
    aircraftFormField,
    aircraftFormInput,
    aircraftFormInvalidText
} from '../styles'

const { certificationText, invalidCertificationText } =
    screenResources.maintenance.components.aircraftForm

export default function AircraftFormCertificationInput() {
    return (
        <Form.Field name="certification">
            <div className={aircraftFormField()}>
                <Form.Label>{certificationText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        value="PT-HJK"
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidCertificationText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
