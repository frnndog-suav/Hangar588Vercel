import SearchBar from '@/src/components/SearchBar'
import { buttonResources } from '@/src/resources/commonResources'
import { screenResources } from '@/src/resources/screenResources'
import { genericStyle } from '@/src/styles'
import { css } from '@stitches/react'
import ChannelOption from './ChannelOption'

const heliAgroImg = '/images/heliAgro.png'

const { searchBarPlaceholderText } =
    screenResources.home.components.channelViewer

const channelViewerContainer = css({
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    width: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 36,
    gap: 40
})

const channelScroll = css({
    display: 'flex',
    flexDirection: 'column',
    gap: 16
})

const channelViewerContent = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
})

export default function TemplateChannelViewer() {
    return (
        <div className={channelViewerContainer()}>
            <p className={genericStyle({ css: { fontSize: 24 } })}>
                Meus Canais
            </p>
            <div className={channelViewerContent()}>
                <div className={channelScroll()}>
                    <ChannelOption
                        fallbackText="HA"
                        name="HeliAgro"
                        src={heliAgroImg}
                    />
                    <ChannelOption
                        fallbackText="TP"
                        name="TulioPark"
                        src={heliAgroImg}
                    />
                    <ChannelOption
                        fallbackText="PG"
                        name="Pedro's Garage"
                        src={heliAgroImg}
                    />
                </div>
                <SearchBar
                    buttonText={buttonResources.searchText}
                    placeholderText={searchBarPlaceholderText}
                />
            </div>
        </div>
    )
}
