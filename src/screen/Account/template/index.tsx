import AvatarShowcase from '@/src/components/Avatar'
import { AvatarSize } from '@/src/components/Avatar/template'
import ScreenContent from '@/src/components/ScreenContent'
import { screenResources } from '@/src/resources/screenResources'
import { Info } from '@/src/types/mockedTypes'
import { css } from '@stitches/react'
import React from 'react'
import UserInfoForm from '../components/UserInfoForm'

const infoContainer = css({
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
})

const accountPageContent = css({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    gap: 40
})

type TemplateAccountScreenType = {
    info: Info
}

export default function TemplateAccountScreen({
    info
}: TemplateAccountScreenType) {
    return (
        <ScreenContent title={screenResources.account.title}>
            <div className={accountPageContent()}>
                <AvatarShowcase
                    avatarFallBackText={info.avatarFallBackText}
                    imageSrc={info.avatarImage}
                    name={info.name}
                    avatarSize={AvatarSize.PageContent}
                />
                <div className={infoContainer()}>
                    <UserInfoForm />
                </div>
            </div>
        </ScreenContent>
    )
}
