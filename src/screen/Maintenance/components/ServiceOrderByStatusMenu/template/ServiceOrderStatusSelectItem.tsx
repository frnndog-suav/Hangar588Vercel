import { genericStyle } from '@/src/styles'
import { FC } from 'react'
import * as Select from '@radix-ui/react-select'

interface ServiceOrderStatusSelectItemProps {
    text: string
}

const ServiceOrderStatusSelectItem: FC<ServiceOrderStatusSelectItemProps> = ({
    text
}) => {
    return (
        <div
            className={genericStyle({
                css: {
                    fontSize: 16,
                    padding: 4,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '$timberWolf'
                    }
                }
            })}
        >
            <Select.Item value={text}>
                <Select.ItemText>{text}</Select.ItemText>
            </Select.Item>
        </div>
    )
}

export default ServiceOrderStatusSelectItem
