export default function ShowCard({ name, img, options }){
  return (
      <div className="cardBottom">
        <img src={img} alt="lang" />
        <h3>{name}</h3>
      </div>
  );
}