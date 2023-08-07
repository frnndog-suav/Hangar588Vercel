import { css } from '@stitches/react'
import Image from 'next/image'

const iconWidth = 20
const iconHeight = 20

const buttonStyle = css({
    height: 35,
    width: 35,
    border: 'none',
    borderRadius: 999,
    backgroundColor: '#fff',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '$whiteSmoke'
    },
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px'
})

const buttonContent = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

type TemplateCircularButtonType = {
    src: string
    altText: string
    action: () => void
}

export const TemplateCircularButton = ({
    src,
    altText,
    action
}: TemplateCircularButtonType) => (
    <button onClick={action} className={buttonStyle()}>
        <div className={buttonContent()}>
            <Image
                src={src}
                alt={altText}
                width={iconWidth}
                height={iconHeight}
                priority
            />
        </div>
    </button>
)
