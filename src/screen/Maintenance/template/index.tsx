import ScreenContent from '@/src/components/ScreenContent'
import { screenResources } from '@/src/resources/screenResources'
import { genericStyle } from '@/src/styles'
import { css } from '@stitches/react'
import FiltersBox from '../components/FiltersBox'
import MaintenanceTabs from '../components/MaintenanceTabs'

const maintenancePageContent = css({
    display: 'flex',
    marginTop: 40,
    gap: 40
})

export default function TemplateMaintenanceScreen() {
    return (
        <ScreenContent title={screenResources.maintenance.title}>
            <div className={maintenancePageContent()}>
                <FiltersBox />
                <div
                    className={genericStyle({
                        css: {
                            display: 'flex',
                            flexDirection: 'column',
                            paddingTop: 32,
                            width: '100%'
                        }
                    })}
                >
                    <label
                        className={genericStyle({
                            css: {
                                fontSize: 24,
                                fontWeight: 600,
                                color: '$marianBlue'
                            }
                        })}
                    >
                        {'Esquilo B4 - PT-HJK'}
                    </label>
                    <MaintenanceTabs />
                </div>
            </div>
        </ScreenContent>
    )
}
