import React from "react";

const Result = (props) => {
  let { className, name, email, password, handleEdit } = props;
  return (
    <>
      <div className={className}>
        <h2 className="text-result">{`Name : ${name}`}</h2>
        <h2 className="text-result">{`Email : ${email}`}</h2>
        <h2 className="text-result">{`Password : ${password}`}</h2>
      </div>
      <button className="submit-btn" onClick={handleEdit}>
        Edit your information
      </button>
    </>
  );
};

export default Result;
