import React from 'react'
import ChannelViewer from '../components/ChannelViewer'
import ScreenContent from '@/src/components/ScreenContent'
import { screenResources } from '@/src/resources/screenResources'
import { css } from '@stitches/react'

const homePageContent = css({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 40,
    gap: 40
})

export default function TemplateHomeScreen() {
    return (
        <ScreenContent title={screenResources.home.title}>
            <div className={homePageContent()}>
                <ChannelViewer />
            </div>
        </ScreenContent>
    )
}
