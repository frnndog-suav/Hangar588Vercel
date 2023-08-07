import { css } from '@stitches/react'
import AircraftList from '../../AircraftList'
import ChannelSearchBar from './ChannelSearchBar'

const filtersBoxContainerStyle = css({
    display: 'flex',
    flexDirection: 'column',
    width: 400,    
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 36,
    gap: 16
})

type TemplateFiltersBoxType = {}

export default function TemplateFiltersBox({}: TemplateFiltersBoxType) {
    return (
        <div className={filtersBoxContainerStyle()}>
            <ChannelSearchBar />
            <AircraftList />
        </div>
    )
}
