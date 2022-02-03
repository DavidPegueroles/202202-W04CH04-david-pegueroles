const Input = ({ type, content, name, placeholder }) => {
  return (
    <div className="col-md-6 ">
      <label forhtml={name} className="form-label">
        {content}:
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
