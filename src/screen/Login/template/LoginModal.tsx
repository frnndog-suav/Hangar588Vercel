import { css } from '@stitches/react'
import Image from 'next/image'
import LoginForm from '../components/LoginForm'

const logoImage = '/images/LogoOriginal.svg'
const altText = 'Hangar 588'
const logoHeight = 30
const logoWidth = 300

const loginContainer = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: 'rgba(255,255,255,0.8)',
    paddingTop: 40,
    paddingBottom: 40,
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
})

export default function LoginModal() {
    return (
        <div className={loginContainer()}>
            <Image
                src={logoImage}
                alt={altText}
                width={logoWidth}
                height={logoHeight}
                priority
            />
            <LoginForm />
        </div>
    )
}
