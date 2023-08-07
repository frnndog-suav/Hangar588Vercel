import { USER_INFO_FORM_JOB_FUNCTION_SELECT_WIDTH } from '@/src/constants/components'
import { CustomIcons } from '@/src/constants/icons'
import { screenResources } from '@/src/resources/screenResources'
import * as Label from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'
import { css } from '@stitches/react'
import Image from 'next/image'
import UserInfoFormJobFunctionSelectItem from './UserInfoFormJobFunctionSelectItem'

const iconSize = 15

const formContainer = css({
    button: {
        background: '#fff',
        border: '1px solid $battleshipGray',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column'
    }
})

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

const { jobFunctionText, jobFunctionSelectPlaceholderText } =
    screenResources.account.components.userInfoForm

export default function UserInfoFormJobFunctionSelect() {
    return (
        <div className={formContainer()}>
            <Label.Root htmlFor="jobFunction">{jobFunctionText}</Label.Root>
            <Select.Root>
                <Select.Trigger aria-label="JobFunction" id="jobFunction">
                    <div className={selectTrigger()}>
                        <Select.Value
                            placeholder={jobFunctionSelectPlaceholderText}
                        />
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
                            <UserInfoFormJobFunctionSelectItem text="Apple" />
                            <UserInfoFormJobFunctionSelectItem text="Banana" />
                            <UserInfoFormJobFunctionSelectItem text="Blueberry" />
                            <UserInfoFormJobFunctionSelectItem text="Grapes" />
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    )
}
