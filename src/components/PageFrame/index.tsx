import TemplatePageFrame from './template'

type PageFrameType = {
    children: React.ReactNode
}

export default function PageFrame({ children }: PageFrameType) {
    return <TemplatePageFrame>{children}</TemplatePageFrame>
}
