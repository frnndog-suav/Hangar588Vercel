import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import { formField, input, invalidText } from '../styles'

const { emailText, invalidEmailText } =
    screenResources.account.components.userInfoForm

export default function UserInfoFormEmailInput() {
    return (
        <Form.Field name="email">
            <div className={formField()}>
                <Form.Label>{emailText}</Form.Label>
                <Form.Control asChild>
                    <input type="email" required className={input()} />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={invalidText()}>{invalidEmailText}</div>
                </Form.Message>
                <Form.Message match="typeMismatch">
                    <div className={invalidText()}>{invalidEmailText}</div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
