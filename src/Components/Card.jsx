function Card({ element }) {
  return (
    <div>
      <div className="card">
        <h3>Title : {element.title}</h3>
        <h3> Body : {element.body}</h3>
      </div>
    </div>
  );
}

export default Card;
