import { genericStyle } from '@/src/styles'
import * as Form from '@radix-ui/react-form'
import { css } from '@stitches/react'
import AircraftFormOwnerInput from './AircraftFormOwnerInput'
import AircraftFormDocumentInput from './AircraftFormDocumentInput'
import { screenResources } from '@/src/resources/screenResources'
import AircraftFormModelInput from './AircraftFormModelInput'
import AircraftFormCertificationInput from './AircraftFormCertificationInput'
import AircraftFormEngineInput from './AircraftFormEngineInput'
import AircraftFormEnginePartNumberInput from './AircraftFormEnginePartNumberInput'
import AircraftFormSerialNumber from './AircraftFormSerialNumber'
import AircraftFormEngineSerialNumberInput from './AircraftFormEnginSerialNumberInput'
import AircraftFormFlightHoursInput from './AircraftFormFlightHoursInput'
import AircraftFormCyclesInput from './AircraftFormCyclesInput'
import AircraftFormNGInputs from './AircraftFormNGInputs'
import AircraftFormNFInput from './AircraftFormNFInput'
import AircraftFormEngineFlightHoursInputs from './AircraftFormEngineFlightHoursInputs'
import AircraftFormLastFlightDate from './AircraftFormLastFlightDate'

export const aircraftInformationBodyStyle = css({
    display: 'flex',
    flexDirection: 'column',
    gap: 24
})

export const aircraftFormInputShelfStyle = css({
    display: 'flex',
    gap: 32
})

const aircraftFormTitle = css({
    fontWeight: 500,
    fontSize: 24
})

const aircraftFormContainerStyle = css({
    display: 'flex',
    gap: 24
})

const { aircraftInformationText, aircraftFlightInformationText } =
    screenResources.maintenance.components.aircraftForm

export default function TemplateAircraftForm() {
    return (
        <Form.Root
            onSubmit={(event) => {
                event.preventDefault()
                // handleDisableButton(true)
                console.log('submitado')
            }}
        >
            <div className={aircraftFormContainerStyle()}>
                <div className={aircraftInformationBodyStyle()}>
                    <h1 className={aircraftFormTitle()}>
                        {aircraftInformationText}
                    </h1>
                    <div className={aircraftFormInputShelfStyle()}>
                        <AircraftFormOwnerInput />
                        <AircraftFormDocumentInput />
                    </div>
                    <div className={aircraftFormInputShelfStyle()}>
                        <AircraftFormModelInput />
                        <AircraftFormCertificationInput />
                    </div>
                    <div className={aircraftFormInputShelfStyle()}>
                        <AircraftFormSerialNumber />
                        <AircraftFormEnginePartNumberInput />
                    </div>
                    <div className={aircraftFormInputShelfStyle()}>
                        <AircraftFormEngineInput />
                        <AircraftFormEngineSerialNumberInput />
                    </div>
                </div>
                <div className={aircraftInformationBodyStyle()}>
                    <h1 className={aircraftFormTitle()}>
                        {aircraftFlightInformationText}
                    </h1>
                    <AircraftFormFlightHoursInput />
                    <AircraftFormEngineFlightHoursInputs />
                    <AircraftFormCyclesInput />
                    <AircraftFormNGInputs />
                    <AircraftFormNFInput />
                    <AircraftFormLastFlightDate />
                </div>
            </div>
        </Form.Root>
    )
}
