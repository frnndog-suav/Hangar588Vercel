import { genericStyle } from '@/src/styles'
import * as Separator from '@radix-ui/react-separator'
import { css } from '@stitches/react'

const separatorStyle = css({
    height: 1,
    backgroundColor: '$battleshipGray',    
})

const contentContainer = css({
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
})

type TemplateScreenContent = {
    title: string
    children: JSX.Element
}

export default function TemplateScreenContent({
    title,
    children
}: TemplateScreenContent) {
    return (
        <div className={contentContainer()}>
            <p
                className={genericStyle({
                    css: { fontWeight: 700, fontSize: 32, color: '$marianBlue' }
                })}
            >
                {title}
            </p>
            <Separator.Root className={separatorStyle()} decorative />
           {children}
        </div>
    )
}
