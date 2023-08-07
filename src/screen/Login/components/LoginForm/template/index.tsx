import { screenResources } from '@/src/resources/screenResources'
import { genericStyle } from '@/src/styles'
import { CustomButtonStyle } from '@/src/types/components'
import * as Form from '@radix-ui/react-form'
import { Button } from 'primereact/button'
import { useRef } from 'react'
import {
    loginFormBody,
    loginFormOptionsSectionStyle,
    loginFormOptionsStyle,
    loginFormSubmitButton
} from '../style'
import LoginFormPasswordInput from './LoginFormPasswordInput'
import LoginFormUsernameInput from './LoginFormUsernameInput'

const { createAccountText, forgotMyPasswordText, loginButtonText } =
    screenResources.login

type TemplateLoginFormType = {
    isDisabled: boolean
    handleDisableButton: (value: boolean) => void
    handleRedirectToHomePage: () => void
}

export default function TemplateLoginForm({
    isDisabled,
    handleDisableButton,
    handleRedirectToHomePage
}: TemplateLoginFormType) {
    const username = useRef<string>()
    const password = useRef<string>()

    return (
        <Form.Root
            onSubmit={(event) => {
                event.preventDefault()
                if (
                    username.current === 'raskova' &&
                    password.current === 'churrasco2023'
                ) {
                    handleDisableButton(true)
                    username.current = ''
                    password.current = ''
                    handleRedirectToHomePage()
                }
            }}
        >
            <div className={loginFormBody()}>
                <LoginFormUsernameInput username={username} />
                <LoginFormPasswordInput password={password} />
                <div className={genericStyle({ css: { marginTop: 40 } })}>
                    <Form.Submit asChild>
                        <Button
                            label={loginButtonText}
                            className={loginFormSubmitButton({
                                variant: isDisabled
                                    ? CustomButtonStyle.Disabled
                                    : CustomButtonStyle.Available
                            })}
                            disabled={isDisabled}
                        />
                    </Form.Submit>
                </div>
                <div className={loginFormOptionsSectionStyle()}>
                    <p className={loginFormOptionsStyle()}>
                        {forgotMyPasswordText}
                    </p>
                    <p className={loginFormOptionsStyle()}>
                        {createAccountText}
                    </p>
                </div>
            </div>
        </Form.Root>
    )
}
