
const Contacts = () => {
    return (
            <div className="contact">
                <div >
                    <p>Vous pouvez me contacter pour plus d'information sur moi, pour un emploi ou pour une collaboration.
                        Je suis ouverte et disposer pour aventure dans la tech prete a acquerir de nouvelles competences</p>
                </div>
                <form>
                    <h1>Me contacter</h1>
                    <input type="text" placeholder="Nom"/><br/>
                    <input type="text" placeholder="Prenoms"/><br/>
                    <input type="email" placeholder="Adresse Mail"/><br/>
                    <select>
                        <option>Vous etes?</option>
                        <option>Une entreprise</option>
                        <option>Un etudant</option>
                        <option>Une startup</option>
                        <option>autres...</option>
                    </select><br/>
                    <input type="number" placeholder="Telephone"/><br/>
                    <textarea placeholder="Sujet"/><br/>
                    <button type="submit">Envoyez</button>
                </form>
            </div>  

    );
};

export default Contacts;