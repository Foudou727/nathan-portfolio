import cloud from '../../assets/cloud.png'
import star from '../../assets/one-star-icon.png'
import sun from '../../assets/sun.png'
import nightTime from '../../assets/night-time.png'
import tomato from '../../assets/tomato.png'
import barbecue from '../../assets/barbecue.png'
import thunder from '../../assets/thunder.png'
import iceCream from '../../assets/ice-cream.png'
import cinnamonRoll from '../../assets/cinnamon roll.png'



interface Props {
    randomValue: number
}

export default function ProjectDecorator({randomValue}: Props) {

    const decorators = [
        (
            <>
                <img src={cloud} alt={'cloud'} 
                    className='absolute left-2/5 -top-1/5 rotate-20 scale-50'
                />
                <img src={thunder} alt={'thunder'} 
                    className='absolute right-5/9 -bottom-19/37 rotate-340 scale-40'
                />
            </>
        ),
        (
            <>
                <img src={star} alt={'star'} 
                    className='absolute top-6/11 left-11/20 rotate-15 scale-25'
                />
                <img src={star} alt={'star'} 
                    className='absolute -top-20/51 -left-24/65 rotate-100 scale-18'
                />
                <img src={nightTime} alt={'night-time'} 
                    className='absolute -top-18/47 left-8/15 scale-30'
                />
            </>
        ),

    ]


    return decorators[randomValue%decorators.length]
}