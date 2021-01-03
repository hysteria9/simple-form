import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Field = (props) => {
  let {
    className,
    inputClassName,
    id,
    type,
    label,
    value,
    handler,
    placeholder,
    handlePassWordVisibility,
  } = props;
  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div>
        <input
          className={inputClassName}
          id={id}
          type={type}
          value={value}
          onChange={handler}
          placeholder={placeholder}
        />
        {(id === "password" || id === "repeated-password") && (
          <FontAwesomeIcon
            icon={faEye}
            size="1x"
            className="password"
            onClick={handlePassWordVisibility}
          ></FontAwesomeIcon>
        )}
      </div>
    </div>
  );
};

export default Field;
