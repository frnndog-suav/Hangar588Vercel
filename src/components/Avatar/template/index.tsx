import * as Avatar from '@radix-ui/react-avatar'
import { css } from '@stitches/react'

const upperBarSize = 45
const pageContentSize = 100
const channelOptionSize = 40
const avatarBorderRadius = 999

export enum AvatarSize {
    UpperBar = 'upperBar',
    PageContent = 'pageContent',
    ChannelOption = 'channelOption'
}

const avatarRoot = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: avatarBorderRadius,
    variants: {
        variant: {
            [AvatarSize.UpperBar]: {
                width: upperBarSize,
                height: upperBarSize
            },
            [AvatarSize.PageContent]: {
                width: pageContentSize,
                height: pageContentSize
            },
            [AvatarSize.ChannelOption]: {
                width: channelOptionSize,
                height: channelOptionSize
            }
        }
    }
})

const avatarImage = css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
})

const avatarFallback = css({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 15,
    fontWeight: 500
})

type TemplateAvatarShowcaseType = {
    imageSrc: string
    name: string
    avatarFallBackText: string
    avatarSize: AvatarSize
}

export default function TemplateAvatarShowcase({
    avatarFallBackText,
    imageSrc,
    name,
    avatarSize
}: TemplateAvatarShowcaseType) {
    return (
        <Avatar.Root className={avatarRoot({ variant: avatarSize })}>
            <Avatar.Image className={avatarImage()} src={imageSrc} alt={name} />
            <Avatar.Fallback className={avatarFallback()} delayMs={600}>
                {avatarFallBackText}
            </Avatar.Fallback>
        </Avatar.Root>
    )
}
