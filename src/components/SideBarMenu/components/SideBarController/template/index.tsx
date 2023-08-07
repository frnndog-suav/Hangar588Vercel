import {
    SIDE_BAR_MENU_BACKGROUND_COLOR,
    SIDE_BAR_MENU_OPTIONS_ACTIVE_BACKGROUND_COLOR,
    SIDE_BAR_MENU_OPTIONS_HEIGHT,
    SIDE_BAR_MENU_OPTIONS_HOVER_BACKGROUND_COLOR,
    SIDE_BAR_MENU_OPTIONS_HOVER_TRANSITION,
    SIDE_BAR_MENU_OPTIONS_ICONS_SIZE,
    SIDE_BAR_MENU_OPTIONS_PADDING
} from '@/src/constants/components'
import { CustomIcons } from '@/src/constants/icons'
import { genericStyle } from '@/src/styles'
import Image from 'next/image'

type TemplateSideBarControllerType = {
    handleSideBarDisplay: () => void
}

export default function TemplateSideBarController({
    handleSideBarDisplay
}: TemplateSideBarControllerType) {
    return (
        <div
            onClick={handleSideBarDisplay}
            className={genericStyle({
                css: {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: SIDE_BAR_MENU_OPTIONS_HEIGHT,
                    paddingLeft: SIDE_BAR_MENU_OPTIONS_PADDING,
                    backgroundColor: SIDE_BAR_MENU_BACKGROUND_COLOR,
                    '&:hover': {
                        backgroundColor:
                            SIDE_BAR_MENU_OPTIONS_HOVER_BACKGROUND_COLOR,
                        transition: SIDE_BAR_MENU_OPTIONS_HOVER_TRANSITION
                    },
                    '&:active': {
                        backgroundColor:
                            SIDE_BAR_MENU_OPTIONS_ACTIVE_BACKGROUND_COLOR
                    }
                }
            })}
        >
            <Image
                src={CustomIcons.HamburguerMenu.path}
                alt={CustomIcons.HamburguerMenu.name}
                width={SIDE_BAR_MENU_OPTIONS_ICONS_SIZE}
                height={SIDE_BAR_MENU_OPTIONS_ICONS_SIZE}
                priority
            />
        </div>
    )
}
