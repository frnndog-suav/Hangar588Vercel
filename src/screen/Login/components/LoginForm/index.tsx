import { useState } from 'react'
import TemplateLoginForm from './template'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { PagePath } from '@/src/constants/pagePath'

export default function LoginForm() {
    const [disabled, setDisabled] = useState<boolean>(false)
    const router = useRouter()

    const handleRedirectToHomePage = () => router.push(PagePath.Home)

    const handleDisableButton = (value: boolean) => setDisabled(value)

    //TODO (fernando.goia) Implement react-hook-forms
    const { register } = useForm()

    return (
        <TemplateLoginForm
            isDisabled={disabled}
            handleRedirectToHomePage={handleRedirectToHomePage}
            handleDisableButton={handleDisableButton}
        />
    )
}
