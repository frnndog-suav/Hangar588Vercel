import { genericStyle } from '@/src/styles'
import { FC } from 'react'

interface ServiceOrderCreationTextInputFieldProps {
    label: string
    placeholder?: string
    disabled?: boolean
    defaultValue?: string
}

const ServiceOrderCreationTextInputField: FC<
    ServiceOrderCreationTextInputFieldProps
> = ({ label, placeholder = '', disabled = false, defaultValue = '' }) => {
    return (
        <div
            className={genericStyle({
                css: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    width: '100%'
                }
            })}
        >
            <label
                className={genericStyle({
                    css: {
                        fontSize: 16
                    }
                })}
            >
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
                className={genericStyle({
                    css: {
                        border: '1px solid $battleshipGray',
                        fontSize: 16,
                        padding: 4,
                        borderRadius: 4
                    }
                })}
            />
        </div>
    )
}

export default ServiceOrderCreationTextInputField
