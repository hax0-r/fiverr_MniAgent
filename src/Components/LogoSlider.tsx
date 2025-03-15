import Slider from 'react-infinite-logo-slider'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const LogoSlider = () => {
    
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={logo1} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo2} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo3} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={logo4} alt="any3" className='w-36' />
            </Slider.Slide>
        </Slider>
    )
}              
                     
export default LogoSlider