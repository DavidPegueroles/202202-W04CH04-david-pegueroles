const Input = ({ type, content, name, placeholder, inputOnChange }) => {
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
        onChange={inputOnChange}
      />
    </div>
  );
};

export default Input;
