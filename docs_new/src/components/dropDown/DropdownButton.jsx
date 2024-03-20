import "./DropdownButton.css";

const DropdownButton = ({ text = "dropdown button", children }) => {
  return (
    <div className="dropdown">
      <label className="buttons">
        {text}
        <i className="fa fa-caret-down"></i>
      </label>

      <div className="dropdown-content">{children}</div>
    </div>
  );
};

export default DropdownButton;
