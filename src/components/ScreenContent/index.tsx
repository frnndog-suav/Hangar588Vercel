import TemplateScreenContent from './template'

type ScreenContentType = {
    title: string
    children: JSX.Element
}

export default function ScreenContent({ title, children }: ScreenContentType) {
    return (
        <TemplateScreenContent title={title}>{children}</TemplateScreenContent>
    )
}
