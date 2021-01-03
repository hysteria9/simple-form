import React from "react";

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
  } = props;
  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        className={inputClassName}
        id={id}
        type={type}
        value={value}
        onChange={handler}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
