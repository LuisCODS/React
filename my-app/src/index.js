import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

// ____________________ Data ____________________ 
const tourData = [
  {
    id: 1,
    title: "New York",
    desc: "Home to the Statue of Liberty, Empire State Building, Central Park, Times Square, New York is the most populous city in the USA. We have a lot to tell about the city where city lights illuminate the sky.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Central_Park_New_York_City_New_York_23_cropped.jpg",
    price: "1000$",
  },
{
  id: 2,
  title: "Canada",
  desc: "Canada offers breathtaking landscapes cities and stunning nature, it attracts tourists all year round.",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Montmorency_waterfall%2C_Qu%C3%A9bec%2C_Qu%C3%A9bec.jpg",
  // price: "2000$",
  tourIsUp: "TOUR IS UP",
},
{
  id: 3,
  title: "Brazil",
  desc: "Home to the Amazon Rainforest osystems that enchant millions of travelers annually.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg",
  price: "3000$",
},
{
  id: 4,
  title: "France",
  desc: "France, known for its art, rldwide, drawing people with its culture and charm.",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
  price: "5000$",
}
];

// ____________________ components ____________________

// Composant principal qui structure l'application
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const Header=()=>{
  return (
    <header className="header">
      Tour Route
    </header>
  );
}

// qui affiche la liste des destinations
const Main = () => { 
  const tours = tourData;
  // const tours = [];
  return (
    <main className="main">
      {
        tours.length > 0 ? 
        (  
          <div className="renderList">
            {tours.map((tour) => ( <Tour tourObj={tour} key={tour.id} /> ))}
          </div> 
        ) 
        : 
        ( <h2>No data available</h2> )
      }  
    </main>
  );
}

// affiche les détails d'une destination
const Tour = ({ tourObj }) => {
  const { image, title, desc, price, tourIsUp } = tourObj;
  
  return (
    <div className={`tourWrapper ${tourIsUp ? "grey" : ""}`}>
      <img src={image} alt={title} />
      <div className="tourBottom">
        <h2>{title}</h2>
        <p>{desc}</p>
        <span>{tourIsUp ? tourIsUp : price}</span>
      </div>
    </div>
  );
};


const Footer=(props)=>{
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 20;
  const isOpen = hour >= openHours && hour <= closeHours;

  // console.log(props);

  return(
    <footer className="footer">
      {
        isOpen ? 
        ( <Order closeHours={closeHours} openHours={openHours} />) 
        :
        ( <div className="closed"> <p>We are closed</p></div> ) 
      }
    </footer>
  );
};

const Order = ({ closeHours, openHours}) => {
  return (
      <div className="order">
        <p>We are open from {openHours}:00 until {closeHours}:00</p>
        <button className="btn">Order</button>
      </div> 
  );
};

// Initialisation et rendu de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);