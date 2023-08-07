import { invalidText } from '@/src/screen/Account/components/UserInfoForm/styles'
import { genericStyle } from '@/src/styles'
import * as Form from '@radix-ui/react-form'
import { loginFormInput } from '../style'
import { screenResources } from '@/src/resources/screenResources'
import { MutableRefObject } from 'react'

const { missingUsernameText, usernamePlaceholderText } =
    screenResources.login.input

interface LoginFormUsernameInputProps {
    username: MutableRefObject<string | undefined>
}

export default function LoginFormUsernameInput({
    username
}: LoginFormUsernameInputProps) {
    return (
        <Form.Field name="username">
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
                        type="text"
                        required
                        className={loginFormInput()}
                        placeholder={usernamePlaceholderText}
                        value={username.current}
                        onChange={(event) => (username.current = event.target.value)}
                    />
                </Form.Control>
                <Form.Message match="valueMissing">
                    <div className={invalidText()}>{missingUsernameText}</div>
                </Form.Message>
            </div>
        </Form.Field>
    )
}
