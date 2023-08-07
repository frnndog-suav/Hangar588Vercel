import { UPPER_BAR_HEIGHT, UPPER_BAR_PADDING } from '@/src/constants/components'
import { css } from '@stitches/react'
import Image from 'next/image'
import Link from 'next/link'
import { CollapsibleProfileBox } from '../../CollapsibleProfileBox'

const logoImage = '/images/LogoOriginal.svg'
const altText = 'Hangar 588'
const logoHeight = 72
const logoWidth = 200

const headContainer = css({
    paddingLeft: UPPER_BAR_PADDING,
    paddingRight: UPPER_BAR_PADDING,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    minHeight: UPPER_BAR_HEIGHT,
    gap: 24,
    flexGrow: 1
})

const imageContainer = css({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
})

type TemplateUpperBarType = {
    handleRedirectHomePage: () => void
}

export const TemplateUpperBar = ({
    handleRedirectHomePage
}: TemplateUpperBarType) => (
    <div className={headContainer()}>
        <Link href="/home">
            <div className={imageContainer()} onClick={handleRedirectHomePage}>
                <Image
                    src={logoImage}
                    alt={altText}
                    width={logoWidth}
                    height={logoHeight}
                    priority
                />
            </div>
        </Link>
        <CollapsibleProfileBox />
    </div>
)
