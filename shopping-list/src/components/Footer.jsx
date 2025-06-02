import '../css/footer.css';

function Footer({ items }) {
  const totalItem = items.length;
  const completedItem = items.filter(item => item.packed).length;
  const percentage = (completedItem / totalItem) * 100;

  return (
    <div className="footerWrapper">
      Total Item: {totalItem}
      <br/>
      Completed Item: {completedItem}
      <br/>
       {percentage > 0 ? "Percentage " + percentage.toFixed(0) + "%" : ""}
    </div>
  );
}

export default Footer;
