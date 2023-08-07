import { genericStyle } from '@/src/styles'
import { blackA } from '@radix-ui/colors'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { keyframes, styled } from '@stitches/react'
import { useRouter } from 'next/router'

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
})

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: blackA.blackA9,
    position: 'fixed',
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

const DialogContent = styled(Dialog.Content, {
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow:
        'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '600px',
    maxHeight: '85vh',
    padding: 25,
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': { outline: 'none' }
})

const DialogTitle = styled(Dialog.Title, {
    margin: 0,
    fontWeight: 500,
    color: '#000',
    fontSize: 20
})

const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    position: 'absolute',
    top: 10,
    right: 10,
    '&:hover': { backgroundColor: '$whiteSmoke', cursor: 'pointer' }
})

const ServiceOrderCreationModal = () => {
    const router = useRouter()

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    className={genericStyle({
                        css: {
                            backgroundColor: '$shammrockGreen',
                            borderRadius: 8,
                            color: '#fff',
                            fontWeight: 500,
                            fontSize: 24,
                            padding: 16,
                            cursor: 'pointer'
                        }
                    })}
                >
                    {'Criar ordem de serviço'}
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle>Nome da OS</DialogTitle>

                    <div
                        className={genericStyle({
                            css: {
                                display: 'flex',
                                gap: 20,
                                marginTop: 20,
                                marginBottom: 20
                            }
                        })}
                    >
                        <input
                            type="text"
                            placeholder="Digite o nome da OS"
                            className={genericStyle({
                                css: {
                                    border: '1px solid $battleshipGray',
                                    fontSize: 20,
                                    padding: 4,
                                    borderRadius: 4,
                                    width: '100%'
                                }
                            })}
                        />
                        <button
                            onClick={() => {
                                router.push(
                                    `/maintenance/service-order/creation`
                                )
                            }}
                            className={genericStyle({
                                css: {
                                    backgroundColor: '$shammrockGreen',
                                    borderRadius: 8,
                                    color: '#fff',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    padding: 8,
                                    cursor: 'pointer'
                                }
                            })}
                        >
                            {'Continuar'}
                        </button>
                    </div>

                    <Dialog.Close asChild>
                        <IconButton aria-label="Close">
                            <Cross2Icon />
                        </IconButton>
                    </Dialog.Close>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ServiceOrderCreationModal
