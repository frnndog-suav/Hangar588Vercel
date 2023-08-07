import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import IMask from 'imask'
import { ChangeEvent, useState } from 'react'
import { formField, input, invalidText } from '../styles'

const { anacCertificationText, invalidAnacCertificationText } =
    screenResources.account.components.userInfoForm

const anacPipe = IMask.createPipe({
    mask: '000000'
})

export default function UserInfoFormAnacCertificationInput() {
    const [anacCode, setAnacCode] = useState<string>('')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAnacCode(e.target.value)
    }

    return (
        <Form.Field name="anacCertification">
            <div className={formField()}>
                <Form.Label>{anacCertificationText}</Form.Label>
                <Form.Control asChild>
                    <input
                        type="text"
                        required
                        className={input()}
                        onChange={handleOnChange}
                        value={anacPipe(anacCode)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={invalidText()}>
                        {invalidAnacCertificationText}
                    </div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
