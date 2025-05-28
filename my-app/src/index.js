import React from 'react';
import ReactDOM from 'react-dom/client';

// data 

export const data = [
  {
  id: 5,
  title: "Japan",
  desc: "Japan, a blend of traditional culture and oms, and futuristic cities. Millions flock to Tokyo, Kyoto, and beyond each year.",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
},
{
  id: 6,
  title: "Canada",
  desc: "Canada offers breathtaking landscapes cities and stunning nature, it attracts tourists all year round.",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Canadian_Rockies_Banff_National_Park_Alberta_Canada_2018.jpg",
},
{
  id: 7,
  title: "Brazil",
  desc: "Home to the Amazon Rainforest osystems that enchant millions of travelers annually.",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
},
{
  id: 8,
  title: "France",
  desc: "France, known for its art, rldwide, drawing people with its culture and charm.",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
},
{
  id: 9,
  title: "Thailand",
  desc: "Thailand is a Southeast Asian"
}
];

// components...

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const Tour =()=>{
  return(
    <div>
      <h2>Component Tour</h2>  
      <p>Japan, a blend of traditional culture and oms, and futuristic cities. Millions flock to Tokyo, Kyoto, and beyond each year.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg" alt="Tour Eiffel" width="200" />
      </div>
  );
};

const Header=()=>{
  return (
    <h1>The Routes</h1>
  );
}

const Main=()=>{
  return(
    <div>
      <h2>Places to visit</h2>
      <Tour />
    </div>
  );
}

const Footer=()=>{
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  
  // console.log(isOpen);

  // if(hour >= openHours && hour <= closeHours){
  //   alert("We are currentle open");
  // }else{
  //   alert("Sorry we are close");
  // }

  return(
    <footer>{new Date().toLocaleTimeString()} We are the best tour company</footer>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
