import ScreenContent from '@/src/components/ScreenContent'
import { mockedServiceOrderDescription } from '@/src/mock/generalMocks'
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
            <ScreenContent title={'Detalhes da task'}>
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
                                value="AS 350"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Revision"
                                value="023"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Revision Date"
                                value="01/01/2023"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Issue Date"
                                value="01/01/2023"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="ATA Chapter"
                                value="25"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Chapter Section Subject"
                                value="01/01/2023"
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="ATA Title"
                                value="Equipments & Furnishing"
                                size={3}
                            />
                            <TaskDetails.SimpleInput
                                label="Task Number"
                                value="25/66/00/000/000/016"
                                size={3}
                            />
                            <TaskDetails.SimpleInput
                                label="Task Status (N.R)"
                                value="N"
                                size={0.5}
                            />
                            <TaskDetails.SimpleInput
                                label="Task Title"
                                value={tasks?.taskName ?? ''}
                                size={0.5}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="Climatic Condition"
                                value="Salt-laden atmosphere"
                                size={2.5}
                            />
                            <TaskDetails.SimpleInput
                                label="MOD"
                                value="PRE MOD 074957"
                                size={2.5}
                            />
                            <div
                                className={genericStyle({
                                    css: {
                                        display: 'flex',
                                        flexGrow: 3.9
                                    }
                                })}
                            ></div>
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.Description
                                label="Description"
                                value={mockedServiceOrderDescription}
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="MPN"
                                value="76370-110"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="PN"
                                value="704A41815032"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Linked Task"
                                value="TBO"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Maintenance Mode"
                                value="N15F210B"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Frequency"
                                value="Periodic"
                                size={1}
                            />
                            <TaskDetails.SimpleInput
                                label="Event Type"
                                value="Periodic"
                                size={1}
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="HUMS"
                                value=""
                                size={1.5}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Sampling Threshold"
                                value=""
                                size={1.5}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Limit 1"
                                value="600"
                                size={1.5}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Unit 1"
                                value="FH"
                                size={1.5}
                                green
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="Provisional 1"
                                value="No"
                                size={1.5}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="FS 1"
                                value=""
                                size={1.5}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Margin 1"
                                value="60"
                                size={1.5}
                                green
                            />
                            <TaskDetails.SimpleInput
                                label="Margin Unit 1"
                                value="FH"
                                size={1.5}
                                green
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="HUMS"
                                value=""
                                size={1.5}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Sampling Threshold"
                                value=""
                                size={1.5}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Limit 2"
                                value="600"
                                size={1.5}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Unit 2"
                                value="FH"
                                size={1.5}
                                blue
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="Provisional 2"
                                value="No"
                                size={1.5}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="FS 2"
                                value=""
                                size={1.5}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Margin 2"
                                value="60"
                                size={1.5}
                                blue
                            />
                            <TaskDetails.SimpleInput
                                label="Margin Unit 2"
                                value="FH"
                                size={1.5}
                                blue
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="HUMS"
                                value=""
                                size={1.5}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Sampling Threshold"
                                value=""
                                size={1.5}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Limit 3"
                                value="600"
                                size={1.5}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Unit 3"
                                value="FH"
                                size={1.5}
                                gray
                            />
                        </TaskDetails.ContentRow>
                        <TaskDetails.ContentRow>
                            <TaskDetails.SimpleInput
                                label="Provisional 3"
                                value="No"
                                size={1.5}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="FS 3"
                                value=""
                                size={1.5}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Margin 3"
                                value="60"
                                size={1.5}
                                gray
                            />
                            <TaskDetails.SimpleInput
                                label="Margin Unit 3"
                                value="FH"
                                size={1.5}
                                gray
                            />
                        </TaskDetails.ContentRow>
                    </TaskDetails.Root>
                </React.Fragment>
            </ScreenContent>
        </div>
    )
}

export default TaskDetailsScreen
