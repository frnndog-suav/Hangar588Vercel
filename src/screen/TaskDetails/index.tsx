import ScreenContent from '@/src/components/ScreenContent'
import { useMapMenuStore } from '@/src/store/components/MapMenu/useMapMenuStore'
import { genericStyle } from '@/src/styles'
import { useRouter } from 'next/router'
import React from 'react'
import { getMockedTasks } from '../Maintenance/components/TaskTable/mock'
import { TaskDetails } from './component/TaskDetailsRoot/compound'

const TaskDetailsScreen = () => {
    const router = useRouter()
    const { id } = router.query
    const [selectedCategory] = useMapMenuStore((state) => [
        state.selectedCategory
    ])

    const tasks = getMockedTasks(selectedCategory).find(
        (category) => category.id === id
    )

    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflowY: 'scroll'
                }
            })}
        >
            <ScreenContent title={'Detalhes da task "' + tasks?.taskTitle + '"'}>
                <React.Fragment>
                    <p
                        className={genericStyle({
                            css: {
                                marginTop: 40,
                                marginBottom: 8,
                                fontSize: 24
                            }
                        })}
                    >
                        {tasks?.taskName}
                    </p>
                    <TaskDetails.Root>
                        <TaskDetails.ContentRow>
                            <TaskDetails.MainInput
                                label="CADASTRO"
                                value=""
                                size={1}
                            />
                            <TaskDetails.MainInput
                                label="REGISTRO"
                                value=""
                                size={1}
                            />
                            <TaskDetails.MainInput
                                label="STATUS"
                                value=""
                                size={1}
                            />
                            <TaskDetails.MainInput
                                label="HORAS VOADAS"
                                value=""
                                size={1}
                            />
                            <TaskDetails.MainInput
                                label="TEMPO CALENDÁRIO"
                                value=""
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                        <hr
                            className={genericStyle({
                                css: {
                                    border: '1px solid $antiFlashWhite',
                                    width: '100%'
                                }
                            })}
                        />
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="Aircraft Type"
                                value={tasks?.aircraftType}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Revision"
                                value={tasks?.revision}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Revision Date"
                                value={tasks?.revisionDate}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Issue Date"
                                value={tasks?.issueDate}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="ATA Chapter"
                                value={tasks?.ataChapter}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Chapter Section Subject"
                                value={tasks?.chapterSectionSubject}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="ATA Title"
                                value={tasks?.ataTitle}
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="Task Number"
                                value=""
                                size={2.5}
                            />
                            <TaskDetails.SimpleInput
                                label="Task Status (N.R)"
                                value=""
                                size={2.5}
                            />
                            <TaskDetails.SimpleInput
                                label="Task Title"
                                value={tasks?.taskTitle}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="MOD"
                                value={tasks?.mod}
                                size={2.5}
                            />
                            <TaskDetails.SimpleInput
                                label="Climatic Condition"
                                value={tasks?.climaticCondition}
                                size={2.5}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.Description
                                label="Description"
                                value={tasks?.description}
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="MPN"
                                value={tasks?.mpn}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="PN"
                                value={tasks?.pn}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Linked Task"
                                value=""
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Maintenance Mode"
                                value={tasks?.maintenanceMode}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Frequency"
                                value={tasks?.frequency}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Event Type"
                                value={tasks?.eventType}
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="HUMS"
                                value={tasks?.fhHums}
                                size={1}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Sampling Threshold"
                                value={tasks?.fhSamplingThreshold}
                                size={1}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Limit 1"
                                value={tasks?.fhLimit}
                                size={1}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Unit 1"
                                value={tasks?.fhUnit}
                                size={1}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Provisional 1"
                                value={tasks?.fhProvisionnal}
                                size={1}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="FS 1"
                                value={tasks?.fhFs}
                                size={1}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Margin 1"
                                value={tasks?.fhMargin}
                                size={1}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Margin Unit 1"
                                value={tasks?.fhMarginUnit}
                                size={1}
                                green
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="HUMS"
                                value={tasks?.calendarHums}
                                size={1}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Sampling Threshold"
                                value={tasks?.calendarSamplingThreshold}
                                size={1}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Limit 2"
                                value={tasks?.calendarLimit}
                                size={1}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Unit 2"
                                value={tasks?.calendarUnit}
                                size={1}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Provisional 2"
                                value={tasks?.calendarProvisionnal}
                                size={1}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="FS 2"
                                value={tasks?.calendarFs}
                                size={1}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Margin 2"
                                value={tasks?.calendarMargin}
                                size={1}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Margin Unit 2"
                                value={tasks?.calendarUnit}
                                size={1}
                                blue
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="HUMS"
                                value={tasks?.cycleHums}
                                size={1}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Sampling Threshold"
                                value={tasks?.cycleSamplingThreshold}
                                size={1}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Limit 3"
                                value={tasks?.cycleLimit}
                                size={1}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Unit 3"
                                value={tasks?.cycleUnit}
                                size={1}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Provisional 3"
                                value={tasks?.cycleProvisionnal}
                                size={1}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="FS 3"
                                value={tasks?.cycleFs}
                                size={1}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Margin 3"
                                value={tasks?.cycleMargin}
                                size={1}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Margin Unit 3"
                                value={tasks?.cycleMarginUnit}
                                size={1}
                                gray
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="Ref Manual"
                                value={tasks?.refManual}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Documentation"
                                value={tasks?.documentation}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Source Document / Code MRB"
                                value={tasks?.sourceDocument}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Zones"
                                value={tasks?.zones}
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="K-Factor"
                                value={tasks?.kFactor}
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                    </TaskDetails.Root>
                </React.Fragment>
            </ScreenContent>
        </div>
    )
}

export default TaskDetailsScreen
