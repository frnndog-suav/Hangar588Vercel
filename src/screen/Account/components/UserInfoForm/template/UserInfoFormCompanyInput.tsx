import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import { formField, input } from '../styles'

const { companyText } = screenResources.account.components.userInfoForm

export default function UserInfoFormCompanyInput() {
    return (
        <Form.Field name="company">
            <div className={formField()}>
                <Form.Label>{companyText}</Form.Label>
                <Form.Control asChild>
                    <input type="text" className={input()} />
                </Form.Control>
            </div>
        </Form.Field>
    )
}
