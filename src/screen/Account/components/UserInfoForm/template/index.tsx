import { buttonResources } from '@/src/resources/commonResources'
import { screenResources } from '@/src/resources/screenResources'
import { CustomButtonStyle } from '@/src/types/components'
import * as Form from '@radix-ui/react-form'
import { Button } from 'primereact/button'
import {
    userInfoFormBodyStyle,
    userInfoFormButtonStyle,
    userInfoFormInputShelfStyle,
    userInfoFormTitleStyle
} from '../styles'
import UserInfoFormAnacCertificationInput from './UserInfoFormAnacCertificationInput'
import UserInfoFormCompanyInput from './UserInfoFormCompanyInput'
import UserInfoFormCreaCertificationInput from './UserInfoFormCreaCertificationInput'
import UserInfoFormDescriptionTextArea from './UserInfoFormDescriptionTextArea'
import UserInfoFormEmailInput from './UserInfoFormEmailInput'
import UserInfoFormJobFunctionSelect from './UserInfoFormJobFunctionSelect'
import UserInfoFormNameInput from './UserInfoFormNameInput'

const { firstTitleText, secondTitleText } =
    screenResources.account.components.userInfoForm

type TemplateUserInfoFormType = {
    disableButton: boolean
    handleDisableButton: (value: boolean) => void
}

export default function TemplateUserInfoForm({
    disableButton,
    handleDisableButton
}: TemplateUserInfoFormType) {
    return (
        <Form.Root
            onSubmit={(event) => {
                event.preventDefault()
                handleDisableButton(true)
                console.log('submitado')
            }}
        >
            <div className={userInfoFormBodyStyle()}>
                <h1 className={userInfoFormTitleStyle()}>{firstTitleText}</h1>
                <div className={userInfoFormInputShelfStyle()}>
                    <UserInfoFormNameInput />
                    <UserInfoFormEmailInput />
                </div>
                <p className={userInfoFormTitleStyle()}>{secondTitleText}</p>
                <div className={userInfoFormInputShelfStyle()}>
                    <UserInfoFormAnacCertificationInput />
                    <UserInfoFormCreaCertificationInput />
                </div>
                <div className={userInfoFormInputShelfStyle()}>
                    <UserInfoFormJobFunctionSelect />
                    <UserInfoFormCompanyInput />
                </div>
                <UserInfoFormDescriptionTextArea />
            </div>
            <Form.Submit asChild>
                <Button
                    label={buttonResources.updateInformationsText}
                    className={userInfoFormButtonStyle({
                        variant: disableButton
                            ? CustomButtonStyle.Disabled
                            : CustomButtonStyle.Available
                    })}
                    disabled={disableButton}
                />
            </Form.Submit>
        </Form.Root>
    )
}
