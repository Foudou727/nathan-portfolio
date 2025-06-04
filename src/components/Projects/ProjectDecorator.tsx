import cloud from '../../assets/ProjectDecorators/cloud.png'
import star from '../../assets/ProjectDecorators/one-star-icon.png'
//import sun from '../../assets/ProjectDecorators/sun.png'    
import nightTime from '../../assets/ProjectDecorators/night-time.png'
import tomato from '../../assets/ProjectDecorators/tomato.png'
import barbecue from '../../assets/ProjectDecorators/barbecue.png'
import thunder from '../../assets/ProjectDecorators/thunder.png'
import iceCream from '../../assets/ProjectDecorators/ice-cream.png'
import cinnamonRoll from '../../assets/ProjectDecorators/cinnamon roll.png'
import tree from '../../assets/ProjectDecorators/tree.png'
import cookie from '../../assets/ProjectDecorators/cookie.png'
//import carrot from '../../assets/ProjectDecorators/carrot.png'
import bee from '../../assets/ProjectDecorators/bee.png'
import ladybug from '../../assets/ProjectDecorators/ladybug.png'
//import fox from '../../assets/ProjectDecorators/fox.png'
//import tutel from '../../assets/ProjectDecorators/tutel.png'
//import whale from '../../assets/ProjectDecorators/whale.png'
import butterfly from '../../assets/ProjectDecorators/butterfly.png'

import { useContext } from 'react'
import { AppContext } from '../../model/context'
import React from 'react'


interface Props {
    index: number
}

function PrivateProjectDecorator({index}: Props) {

    const randomValue = useContext(AppContext).cardSeed[index]

    const decorators = [
        (
            <>
                <img src={cloud} alt={'cloud'} 
                    className='absolute left-2/5 -top-1/5 rotate-20 scale-50'
                />
                <img src={thunder} alt={'thunder'} 
                    className='absolute right-5/9 -top-1/8 rotate-340 scale-40'
                />
            </>
        ),
        (
            <>
                <img src={star} alt={'star'} 
                    className='absolute top-6/11 left-11/20 rotate-15 scale-25'
                />
                <img src={star} alt={'star'} 
                    className='absolute -top-20/51 -left-24/65 rotate-330 scale-18'
                />
                <img src={nightTime} alt={'night-time'} 
                    className='absolute -top-13/70 left-8/15 scale-30'
                />
            </>
        ),
        (
            <>
                <img src={tomato} alt={'tomato'} 
                    className='absolute top-6/11 left-4/7 scale-25'
                />
                <img src={tree} alt={'tree'} 
                    className='absolute -top-1/11 right-5/9 rotate-5 scale-35  '
                />
                <img src={barbecue} alt={'barbecue'} 
                    className='absolute bottom-5/11 left-4/7 -rotate-5 scale-30'
                />
            </>
        ),
        (
            <>
                <img src={iceCream} alt={'ice-cream'} 
                    className='absolute top-6/11 left-4/7 scale-30 rotate-5'
                />
                <img src={cookie} alt={'cookie'} 
                    className='absolute bottom-17/31 left-3/7 scale-15 -rotate-3'
                />
                <img src={cinnamonRoll} alt={'roll'} 
                    className='absolute top-7/31 right-4/7 scale-26 rotate-7'
                />

            </>
        ),
        (
            <>
                <img src={bee} alt={'bee'} 
                    className='absolute bottom-4/31 right-5/9 scale-26 rotate-7'
                />
                <img src={ladybug} alt={'ladybug'} 
                    className='absolute top-2/7 left-4/7 scale-22 rotate-7'
                />
                <img src={butterfly} alt={'ladybug'} 
                    className='absolute -top-3/8 left-1/4 scale-31 rotate-7'
                />
            </>
        )

    ]


    return decorators[randomValue%decorators.length]
}

const ProjectDecorator = React.memo(PrivateProjectDecorator)

export default ProjectDecorator
