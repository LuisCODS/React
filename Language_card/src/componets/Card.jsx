import Language from "./Language";
import { data } from "../data/data";

function Card() {
  // console.log(data);
  return (
    <div className="card">
      <h1>Language</h1>
      <div className="langWrapper">
        {
          /*
            Pour chaque objet, on rend un composant <Language /> :

            {...obj} : utilise la décomposition des props (spread operator) → cela transmet toutes les propriétés de obj comme props au composant Language.

            key={index} : une clé unique est requise par React quand on affiche des listes. Ici, on utilise l'index comme clé (pas idéal mais souvent suffisant pour des listes statiques).
          */
          data.map((obj, index) => (
            <Language {...obj} key={index} />
          ))
        }
      </div>
    </div>
  );
}
export default Card;
