import React from 'react'
import { UpperBar } from '../../UpperBar'
import { css } from '@stitches/react'
import { SideBar } from '../../SideBarMenu'

const screenBody = css({
    display: 'flex',
    height: '92.3vh',
    backgroundColor: '$antiFlashWhite'
})

const componentStyle = css({
    height: '92.3vh',
    width: '100vw'
})

type TemplatePageFrameType = {
    children: React.ReactNode
}

export default function TemplatePageFrame({ children }: TemplatePageFrameType) {
    return (
        <React.Fragment>
            <UpperBar />
            <div className={screenBody()}>
                <SideBar />
                <div className={componentStyle()}>{children}</div>
            </div>
        </React.Fragment>
    )
}
