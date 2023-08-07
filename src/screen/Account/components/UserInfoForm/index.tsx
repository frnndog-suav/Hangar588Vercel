import { useState } from 'react'
import TemplateUserInfoForm from './template'

export default function UserInfoForm() {
    const [disableButton, setDisableButton] = useState<boolean>(false)

    const handleDisableButton = (value: boolean) => setDisableButton(value)

    return (
        <TemplateUserInfoForm
            disableButton={disableButton}
            handleDisableButton={handleDisableButton}
        />
    )
}
