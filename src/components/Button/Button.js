import PropTypes from "prop-types";

const Button = ({ text, actionOnClick }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={(event) => {
        event.preventDefault();
        actionOnClick();
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Button;
