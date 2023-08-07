import Image from 'next/image'
import React from 'react'
import LoginModal from './LoginModal'

const backgroundImage = '/images/loginBackgroundImage.jpg'
// const backgroundImage = '/images/teste.jpg'

export default function TemplateLoginScreen() {
    return (
        <React.Fragment>
            <Image
                src={backgroundImage}
                alt="Login image"
                fill
                style={{ objectFit: 'cover' }}
            />
            <LoginModal />
        </React.Fragment>
    )
}
