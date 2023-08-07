import { screenResources } from '@/src/resources/screenResources'
import { genericStyle } from '@/src/styles'
import { css } from '@stitches/react'

//TODO (fernando.goia) Don't delete this
const magnifyingGlassIcon = 'icons/magnifying-glass.svg'
const iconButtonSize = 20

const { searchBarPlaceholderText } =
    screenResources.home.components.channelViewer

const searchBarStyle = css({
    border: '1px solid $silver',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: '100%',
    outline: 'none'
})

const searchBarButtonStyle = css({
    display: 'flex',
    alignItems: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    border: 'none',
    backgroundColor: '$marianBlue',
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '$yaleBlue'
    },
    '&:active': {
        backgroundColor: '$spaceCadet'
    }
})

type TemplateSearchBarType = {
    buttonText: string
    placeholderText?: string
}

export default function TemplateSearchBar({
    buttonText,
    placeholderText
}: TemplateSearchBarType) {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex'
                }
            })}
        >
            <input
                type="text"
                placeholder={placeholderText}
                className={searchBarStyle()}
            />
            <button
                onClick={() => console.log('teste')}
                className={searchBarButtonStyle()}
            >
                {/* TODO (fernando.goia) Use material icons here */}
                {/* <Image
                            alt="search"
                            src={magnifyingGlassIcon}
                            width={iconButtonSize}
                            height={iconButtonSize}
                            style={{ fill: 'currentcolor' }}
                        /> */}
                <label
                    className={genericStyle({
                        css: {
                            fontSize: 16,
                            paddingLeft: 16,
                            paddingRight: 16,
                            cursor: 'pointer'
                        }
                    })}
                >
                    {buttonText}
                </label>
            </button>
        </div>
    )
}
