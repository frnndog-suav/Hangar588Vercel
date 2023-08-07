import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import { formField, input, invalidText } from '../styles'

const { fullNameText, invalidFullNameText } =
    screenResources.account.components.userInfoForm

export default function UserInfoFormNameInput() {
    return (
        <Form.Field name="fullName">
            <div className={formField()}>
                <Form.Label>{fullNameText}</Form.Label>
                <Form.Control asChild>
                    <input type="text" required className={input()} />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={invalidText()}>{invalidFullNameText}</div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
