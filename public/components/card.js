import react from "react";
const Card = (props) => {
  return (
    <>
      <div class="card w-50">
        <div class="card-body">
          <h5 class="title">{props.title}</h5>
          <p class="text">{props.text}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
