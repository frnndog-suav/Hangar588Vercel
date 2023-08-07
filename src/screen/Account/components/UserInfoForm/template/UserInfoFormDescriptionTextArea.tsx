import { screenResources } from '@/src/resources/screenResources'
import * as Form from '@radix-ui/react-form'
import { css } from '@stitches/react'
import { InputTextarea } from 'primereact/inputtextarea'
import { formField } from '../styles'
import { USER_INFO_FORM_TEXT_AREA_WIDTH } from '@/src/constants/components'

const { descriptionText } = screenResources.account.components.userInfoForm

const textArea = css({
    border: '1px solid $battleshipGray',
    padding: 8,
    borderRadius: 4,
    maxWidth: USER_INFO_FORM_TEXT_AREA_WIDTH,
    minHeight: '100px',
    resize: 'none',
    outline: 'none'
})

export default function UserInfoFormDescriptionTextArea() {
    return (
        <Form.Field name="description">
            <div className={formField()}>
                <Form.Label>{descriptionText}</Form.Label>
                <Form.Control asChild>
                    <InputTextarea className={textArea()} />
                </Form.Control>
            </div>
        </Form.Field>
    )
}
