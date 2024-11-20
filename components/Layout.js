import SocialsIcons from "./SocialsIcons";
import Link from 'next/link'
const Layout = ({children}) => {
    return (
        <section>
            <div className="navBar">
                <div >
                    <Link className="name" href="/"><span>&lt; </span>.DDH<span> /&gt;</span></Link>
                </div>

                <div>
                    <Link className="navlink" href="/Contacts">Contacts</Link>
                    <Link className="navlink" href="/Competences">Competences</Link>
                    <Link className="navlink" href="/Projets">Projets</Link>
                </div>

                <div>
                    <SocialsIcons />
                </div>
            </div>

            <main>{children}</main>

            <div className='footer'>
                <p>Gnon Adiara Coulibaly</p>
                <SocialsIcons />
                <Link className="name" href="/"><span>&lt; </span>.DDH<span> /&gt;</span></Link>
            </div>

        </section>
    );
};

export default Layout;