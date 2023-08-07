import { TemplateCircularButton } from './template'

type CircularButton = {
    altText: string
    src: string
    action: () => void
}

export const CircularButton = ({ action, altText, src }: CircularButton) => {
    return (
        <TemplateCircularButton altText={altText} src={src} action={action} />
    )
}
