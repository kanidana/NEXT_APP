import MyImage from '../public/MyImage.jpg'
import Image from "next/image";

const Home = () => {
    return(
        <section>
                <div>
                        <div className='def'>
                            <Image 
                                src={MyImage} 
                                alt="Ma Photo"
                                width={250}
                                className='maphoto'
                                
                            />
                            <p className='def1'>Diplome d'une licence en EEAI et passionnee par le developpement web full start,
                            l'IA et le Marketing digital.</p>
                        
                        </div>

                        <div className='about'>
                            <h1 className='def1'>A propos de moi</h1>
                            <p className='def2'>Je suis Coulibaly Gnon Adiara K. je suis passionnee par le developpement web full stark, l'IA et la Marketing Digital.
                                j'ai une licence en Electronique, electrotechnique , Automatisme et Informatique
                                obtenue a l'universite felix houphouet boigny de Cocody a abidjan.
                            </p>
                        </div>
                        
                </div>               

        </section>
    )
}

export default Home;