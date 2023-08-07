import SearchBar from '@/src/components/SearchBar'
import { buttonResources } from '@/src/resources/commonResources'
import { css, genericStyle } from '@/src/styles'
import React from 'react'
import AircraftOption from './AircraftOption'
import InformationBox from './InformationBox'
import { screenResources } from '@/src/resources/screenResources'

const {
    addAircraftText,
    availableSpaceText,
    title,
    totalSpaceText,
    usedSpaceText,
    searchAircraftPlaceholderText
} = screenResources.maintenance.components.aircraftList

const aircraftOptionsScrollStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: 12
})

const addAircraftButtonStyle = css({
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    backgroundColor: '$marianBlue',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    justifyContent: 'center',
    fontSize: 16,
    marginBottom: 40,
    '&:hover': {
        backgroundColor: '$yaleBlue'
    },
    '&:active': {
        backgroundColor: '$spaceCadet'
    }
})

const informationBoxSection = css({
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16
})

export default function TemplateAircraftList() {
    return (
        <React.Fragment>
            <label className={genericStyle({ css: { fontSize: 24 } })}>
                {title}
            </label>
            <div className={aircraftOptionsScrollStyle()}>
                <AircraftOption />
                <AircraftOption />
                <AircraftOption />
                <AircraftOption />
                <AircraftOption />
            </div>
            <button className={addAircraftButtonStyle()}>
                {addAircraftText}
            </button>
            <div className={informationBoxSection()}>
                <InformationBox label={totalSpaceText} value={'10'} />
                <InformationBox label={usedSpaceText} value={'5'} />
                <InformationBox label={availableSpaceText} value={'5'} dark />
            </div>
            <SearchBar
                buttonText={buttonResources.searchText}
                placeholderText={searchAircraftPlaceholderText}
            />
        </React.Fragment>
    )
}
