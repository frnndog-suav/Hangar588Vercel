import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import IMask from 'imask'
import { ChangeEvent, useState } from 'react'
import { formField, input, invalidText } from '../styles'

const { creaCertificationText, invalidCreaCertificationText } =
    screenResources.account.components.userInfoForm

const creaPipe = IMask.createPipe({
    mask: '000000000-0'
})

export default function UserInfoFormCreaCertificationInput() {
    const [creaCode, setCreaCode] = useState<string>('')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCreaCode(e.target.value)
    }

    return (
        <Form.Field name="creaAertification">
            <div className={formField()}>
                <Form.Label>{creaCertificationText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={input()}
                        onChange={handleOnChange}
                        value={creaPipe(creaCode)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={invalidText()}>
                        {invalidCreaCertificationText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
