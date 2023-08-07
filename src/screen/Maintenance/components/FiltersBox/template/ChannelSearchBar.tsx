import SearchBar from '@/src/components/SearchBar'
import { buttonResources } from '@/src/resources/commonResources'
import { screenResources } from '@/src/resources/screenResources'
import { genericStyle } from '@/src/styles'
import React from 'react'

const { searchBarPlaceholderText } =
    screenResources.home.components.channelViewer

export default function ChannelSearchBar() {
    return (
        <React.Fragment>
            <label className={genericStyle({ css: { fontSize: 24 } })}>
                Canal
            </label>
            <SearchBar
                buttonText={buttonResources.searchText}
                placeholderText={searchBarPlaceholderText}
            />
        </React.Fragment>
    )
}
