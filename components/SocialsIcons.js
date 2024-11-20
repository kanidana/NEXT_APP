import Image from 'next/image'
import facebook from '../public/facebook.svg'
import linkedin from '../public/linkedin.svg'
import tiktok from '../public/tiktok.svg'
import whatsapp from '../public/whatsapp.svg'


const SocialsIcons = () => {
    return (
        <div>
            <a href='#'><Image className='social' src={facebook} alt='facebook' width={24} height={24} /></a>
            <a href='#'><Image className='social' src={tiktok} alt='tiktok' width={24} height={24}  /></a>
            <a href='#'><Image className='social' src={whatsapp} alt='whatsapp' width={24} height={24}  /></a>
            <a href='#'><Image className='social' src={linkedin} alt='linkedin' width={24} height={24} /></a>
        </div>
    );
};

export default SocialsIcons;