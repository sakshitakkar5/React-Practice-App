function Foodcard(props) {
  return (
    <div style={{
      border: '2px solid blue',
      borderRadius: '10px',
      padding: '10px',
      width: '180px',
      margin: '10px',
      backgroundColor: props.bgColor
    }}>
      <h2>{props.name}</h2>
      <p>{props.type}</p>
    </div>
  );
}

export default Foodcard;
