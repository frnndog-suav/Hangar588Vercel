import AvatarShowcase from '@/src/components/Avatar'
import { AvatarSize } from '@/src/components/Avatar/template'
import { css } from '@stitches/react'

const channelOption = css({
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    border: '1px solid $silver',
    borderRadius: 8,
    padding: 8,
    cursor: 'pointer',
    backgroundColor: '$ghostWhite',
    '&:hover': {
        backgroundColor: '$lavenderWeb'
    },
    '&:active': {
        backgroundColor: '$powderBlue'
    }
})

type ChannelOptionType = {
    src: string
    name: string
    fallbackText: string
}

export default function ChannelOption({
    name,
    src,
    fallbackText
}: ChannelOptionType) {
    return (
        <div className={channelOption()}>
            <AvatarShowcase
                avatarFallBackText={fallbackText}
                avatarSize={AvatarSize.ChannelOption}
                imageSrc={src}
                name={name}
            />
            <p>{name}</p>
        </div>
    )
}
