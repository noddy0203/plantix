import React from "react";

const User = ({ data }) => {
  return (
    <>
      <div className="userDiv">
        {data.map((el) => {
          return (
            <ul className="userInfo" key={el.id}>
              <li>{el.fullname}</li>
              <li>{el.email}</li>
              <li>{el.phone}</li>
              <li>
                {el.address} <span>{el.code}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default User;
