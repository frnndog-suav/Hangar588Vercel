import { invalidText } from '@/src/screen/Account/components/UserInfoForm/styles'
import { genericStyle } from '@/src/styles'
import * as Form from '@radix-ui/react-form'
import { loginFormInput } from '../style'
import { screenResources } from '@/src/resources/screenResources'
import { MutableRefObject } from 'react'

const { missingPasswordText, passwordPlaceholderText } =
    screenResources.login.input

interface LoginFormPasswordInputProps {
    password: MutableRefObject<string | undefined>
}

export default function LoginFormPasswordInput({
    password
}: LoginFormPasswordInputProps) {
    return (
        <Form.Field name="password">
            <div
                className={genericStyle({
                    css: {
                        display: 'flex',
                        flexDirection: 'column'
                    }
                })}
            >
                <Form.Control asChild>
                    <input
                        type="password"
                        required
                        className={loginFormInput()}
                        placeholder={passwordPlaceholderText}
                        value={password.current}
                        onChange={(event) => (password.current = event.target.value)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={invalidText()}>{missingPasswordText}</div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
