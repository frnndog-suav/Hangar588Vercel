import TemplateAvatarShowcase, { AvatarSize } from './template'

type AvatarShowcaseType = {
    imageSrc: string
    name: string
    avatarFallBackText: string
    avatarSize: AvatarSize
}

export default function AvatarShowcase({
    avatarFallBackText,
    imageSrc,
    name,
    avatarSize
}: AvatarShowcaseType) {
    return (
        <TemplateAvatarShowcase
            avatarFallBackText={avatarFallBackText}
            imageSrc={imageSrc}
            name={name}
            avatarSize={avatarSize}
        />
    )
}
