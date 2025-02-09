import { Button } from 'primereact/button';

const Accueil = () => {
    return (
        <div>
            <h1 className="flex justify-content-center text-black font-bold">Bienvenue dans ton Pokédex ultime ! </h1>
            <h4 className="flex justify-content-center mx-5 text-black text-center font-bold"> 🌟 Attrape-les tous en explorant les fiches détaillées de chaque Pokémon <br/>et découvre tous leurs secrets. 
              </h4>
              <p className="flex justify-content-center text-black font-bold"> 🌟 Pour commencer, clique sur </p>
             
              <div className="flex justify-content-center">
                <a href="/list" className="p-button font-bold">
                Liste des Pokémons
               </a>
        </div>
        </div>
    )
}

export default Accueil;