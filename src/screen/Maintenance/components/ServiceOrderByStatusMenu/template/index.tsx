import { CustomIcons } from '@/src/constants/icons'
import { ServiceOrderStatus } from '@/src/types/mockedTypes'
import { serviceOrderStatusEnumConverter } from '@/src/utils/serviceOrderStatusEnumConverter'
import * as Select from '@radix-ui/react-select'
import { css } from '@stitches/react'
import Image from 'next/image'
import { FC } from 'react'
import ServiceOrderStatusSelectItem from './ServiceOrderStatusSelectItem'

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
    cursor: 'pointer',
    width: 200
})

const selectContent = css({
    overflow: 'hidden',
    backgroundColor: '$whiteSmoke',
    borderRadius: 6,
    border: '1px solid $antiFlashWhite'
})

interface TemplateServiceOrderByStatusMenuProps {
    setSelectedStatus: (status: ServiceOrderStatus) => void
}

const TemplateServiceOrderByStatusMenu: FC<
    TemplateServiceOrderByStatusMenuProps
> = ({ setSelectedStatus }) => {
    return (
        <Select.Root
            onValueChange={(selectedItem) =>
                setSelectedStatus(serviceOrderStatusEnumConverter(selectedItem))
            }
        >
            <Select.Trigger
                aria-label="ServiceOrderStatus"
                id="ServiceOrderStatus"
            >
                <div className={selectTrigger()}>
                    <Select.Value placeholder={'Filtro por status'} />
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
                        <ServiceOrderStatusSelectItem text="Todos" />
                        <ServiceOrderStatusSelectItem text="Abertos" />
                        <ServiceOrderStatusSelectItem text="Fechados" />
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default TemplateServiceOrderByStatusMenu
