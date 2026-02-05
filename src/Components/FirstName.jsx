import propTypes from "prop-types";

function FirstName({ name = "Anil" }) {
  return (
    <div>
      <h2>Hi, {name}</h2>
    </div>
  );
}

FirstName.propTypes = {
  name: propTypes.string,
};

export default FirstName;
