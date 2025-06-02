import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    /*
      On utilise la syntaxe de décomposition [...items, newItem] au lieu de push() car:
      1. React exige l'immutabilité - on ne doit pas modifier directement le state
      2. push() modifie le tableau original, ce qui peut causer des bugs
      3. [...items, newItem] crée une nouvelle copie du tableau avec le nouvel élément
      4. Cela garantit que React détecte le changement et re-render correctement
    */
    setItems((items) => [...items, newItem]);
  };

  function deleteItem(id) {
    /*
      filtre et met à jour la liste des items:
      . filter() crée un nouveau tableau avec les éléments qui passent la condition
      . La condition item.id !== id garde tous les items SAUF celui avec l'id correspondant
      . Cela supprime effectivement l'item avec l'id spécifié de la liste
      . On utilise une fonction callback pour garantir l'accès au state le plus récent
    */
    setItems((items) => items.filter((item) => item.id !== id));
  };

  function doneItem(id) {
    /*
      1. map() crée un nouveau tableau en parcourant tous les items
      2. Pour chaque item, on vérifie si son id correspond à celui passé en paramètre
      3. Si c'est le même id:
         - {...item} copie toutes les propriétés de l'item
         - packed: !item.packed inverse la valeur actuelle de packed (true->false ou false->true)
      4. Si ce n'est pas le même id, on garde l'item tel quel
      5. On utilise une fonction callback pour garantir l'accès au state le plus récent
    */
    setItems((items) => 
      items.map((item) => 
        item.id === id ? { ...item, packed: !item.packed } : item));
    };

  return (
    <div className="appWrapper">
      <Header />
      <Main items={ items } addItem = { addItem } deleteItem = { deleteItem } doneItem = { doneItem } />
      <Footer />
    </div>
  );
}

export default App;
