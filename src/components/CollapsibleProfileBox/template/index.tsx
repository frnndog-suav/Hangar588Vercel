import { buttonResources } from '@/src/resources/commonResources'
import { templateCollapsibleProfileBoxResources } from '@/src/resources/componentsResources'
import { genericStyle } from '@/src/styles'
import { Info } from '@/src/types/mockedTypes'
import * as Collapsible from '@radix-ui/react-collapsible'
import React from 'react'
import AvatarShowcase from '../../Avatar'
import {
    CollapsibleTriggerStyle,
    collapsibleRoot,
    collapsibleTrigger,
    expandedContent,
    profileButton,
    userInfo
} from '../styles'
import styles from '../styles/collapsibleContent.module.css'
import { AvatarSize } from '../../Avatar/template'
import Link from 'next/link'

type TemplateCollapsibleProfileBox = {
    info: Info
    shouldOpen: boolean
    handleRedirectToAccountPage: () => void
    handleExpandUserInfoBox: (value: boolean) => void
}

const {
    certificationTemplate,
    jobFunctionText,
    companyTemplate,
    aircraftsAmountTemplate
} = templateCollapsibleProfileBoxResources

export const TemplateCollapsibleProfileBox = ({
    info,
    shouldOpen,
    handleExpandUserInfoBox,
    handleRedirectToAccountPage
}: TemplateCollapsibleProfileBox) => (
    <React.Fragment>
        <Collapsible.Root
            className={collapsibleRoot()}
            open={shouldOpen}
            onOpenChange={handleExpandUserInfoBox}
        >
            <Collapsible.Trigger
                className={collapsibleTrigger({
                    variant: shouldOpen
                        ? CollapsibleTriggerStyle.Expanded
                        : CollapsibleTriggerStyle.Retracted
                })}
            >
                <div className={userInfo()}>
                    <p className={genericStyle({ css: { fontSize: 16 } })}>
                        {info.name}
                    </p>
                    <p className={genericStyle({ css: { fontSize: 14 } })}>
                        {certificationTemplate.replace(
                            '{0}',
                            info.certification
                        )}
                    </p>
                </div>
                <AvatarShowcase
                    avatarFallBackText={info.avatarFallBackText}
                    imageSrc={info.avatarImage}
                    name={info.name}
                    avatarSize={AvatarSize.UpperBar}
                />
            </Collapsible.Trigger>
            <Collapsible.Content
                className={styles.CollapsibleContent}
                onClick={() => handleExpandUserInfoBox(false)}
            >
                <div className={expandedContent()}>
                    <div>
                        <p>{jobFunctionText}</p>
                        <p>{info.jobFunction}</p>
                    </div>
                    <div>
                        <p>{companyTemplate.replace('{0}', info.company)}</p>
                        <p>
                            {aircraftsAmountTemplate.replace(
                                '{0}',
                                info.aircraftsAmount.toString()
                            )}
                        </p>
                    </div>
                </div>
                <Link
                    href="/account"
                    className={genericStyle({
                        css: {
                            textDecoration: 'none'
                        }
                    })}
                >
                    <div
                        className={profileButton()}
                        onClick={handleRedirectToAccountPage}
                    >
                        {buttonResources.checkProfileText}
                    </div>
                </Link>
            </Collapsible.Content>
        </Collapsible.Root>
    </React.Fragment>
)
