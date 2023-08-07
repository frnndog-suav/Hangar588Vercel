import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import IMask from 'imask'
import { ChangeEvent, useState } from 'react'
import { aircraftFormField, aircraftFormInput, aircraftFormInvalidText } from '../styles'

const { ownerDocumentText, invalidOwnerDocumentText } =
    screenResources.maintenance.components.aircraftForm

const documentFormatter = IMask.createPipe({
    mask: '00.000.000/0000-00'
})

export default function AircraftFormDocumentInput() {
    const [document, setDocument] = useState<string>('123123123123')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDocument(e.target.value)
    }

    return (
        <Form.Field name="ownerDocument">
            <div className={aircraftFormField()}>
                <Form.Label>{ownerDocumentText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={aircraftFormInput()}
                        onChange={handleOnChange}
                        value={documentFormatter(document)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={aircraftFormInvalidText()}>
                        {invalidOwnerDocumentText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
