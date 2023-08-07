import { USER_INFO_FORM_JOB_FUNCTION_SELECT_WIDTH } from '@/src/constants/components'
import { CustomIcons } from '@/src/constants/icons'
import { TaskCategory } from '@/src/types/mockedTypes'
import { taskCategoryEnumConverter } from '@/src/utils/taskCategoryEnumConverter'
import * as Select from '@radix-ui/react-select'
import { css } from '@stitches/react'
import Image from 'next/image'
import MapMenuSelectItem from './MapMenuSelectItem'

const iconSize = 15

const selectTrigger = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 2,
    paddingTop: 2,
    fontSize: 16,
    color: 'black',
    width: USER_INFO_FORM_JOB_FUNCTION_SELECT_WIDTH,
    cursor: 'pointer'
})

const selectContent = css({
    overflow: 'hidden',
    backgroundColor: '$whiteSmoke',
    borderRadius: 6,
    border: '1px solid $antiFlashWhite'
})

type TemplateMapMenuProps = {
    setSelectedCategory: (taskCategory: TaskCategory) => void
}

const TemplateMapMenu = ({ setSelectedCategory }: TemplateMapMenuProps) => {
    return (
        <Select.Root
            onValueChange={(selectedItem) =>
                setSelectedCategory(taskCategoryEnumConverter(selectedItem))
            }
        >
            <Select.Trigger aria-label="JobFunction" id="jobFunction">
                <div className={selectTrigger()}>
                    <Select.Value placeholder={'Menu de mapa'} />
                    <Select.Icon>
                        <Image
                            src={CustomIcons.ArrowDown.path}
                            alt={CustomIcons.ArrowDown.name}
                            width={iconSize}
                            height={iconSize}
                            priority
                        />
                    </Select.Icon>
                </div>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className={selectContent()}>
                    <Select.ScrollUpButton>
                        <Image
                            src={CustomIcons.ArrowUp.path}
                            alt={CustomIcons.ArrowUp.name}
                            width={iconSize}
                            height={iconSize}
                            priority
                        />
                    </Select.ScrollUpButton>
                    <Select.Viewport>
                        <MapMenuSelectItem text="Motor" />
                        <MapMenuSelectItem text="Componentes" />
                        <MapMenuSelectItem text="Tarefas" />
                        <MapMenuSelectItem text="Boletim AD" />
                        <MapMenuSelectItem text="Boletim AD do motor" />
                        <MapMenuSelectItem text="Componente do motor" />
                        <MapMenuSelectItem text="Estoque virtual" />
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default TemplateMapMenu
