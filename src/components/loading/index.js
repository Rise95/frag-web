import React from 'react'
import {
    Container
} from './style'
import Lottie from 'react-lottie';
import AnimationData from '../../animations/loader.json'
import AnimationData1 from '../../animations/loader1.json'
import AnimationDataDefault from '../../animations/loaderDefault.json'

export default ({
    type
}) => {

    const selectAnimation = () => {
        switch (type) {
            case 0:
                return AnimationData
            case 1:
                return AnimationData1
            default:
                return AnimationDataDefault
        }
    }

    return (
        <Container>
            <Lottie 
                options={{
                    loop: true,
                    autoplay: true, 
                    animationData: selectAnimation(),
                }}
                height={200}
                width={200}
            />
        </Container>
    )
}