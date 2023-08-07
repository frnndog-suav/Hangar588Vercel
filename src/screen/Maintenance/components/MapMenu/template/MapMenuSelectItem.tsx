import { genericStyle } from '@/src/styles'
import * as Select from '@radix-ui/react-select'

type MapMenuSelectItem = {
    text: string
}

export default function MapMenuSelectItem({ text }: MapMenuSelectItem) {
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
