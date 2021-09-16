import React, { useState } from "react";
import Error from "./Error";
// 

const Bill = () => {
  const [state, setState] = useState({
    fullname: "",
    address: "",
    code: "",
    phone: "",
    email: "",
  });

const [error , setError] = useState({})
  const inputEvent = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const postData = (e) => {
    e.preventDefault();
    setError(Error(state))
    setState({ fullname: "",
    address: "",
    code: "",
    phone: "",
    email: "",});
    alert("bill generated successfully")
  };

  
  return (
    <>
<div className="formStyle">


      <h2>
        <span> Bill To/</span> Billing address
      </h2>
      <form action="" onSubmit={postData}>
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          name="fullname"
          onChange={inputEvent}
          value={state.fullname}
          id="fullname"
        />
{error.fullname && <p className="errorStyle">{error.fullname}</p> }
        <br />
        <label htmlFor="address">Street Address</label>
        <input
          type="text"
          name="address"
          onChange={inputEvent}
          value={state.address}
          id="address"
        />
{error.address && <p className="errorStyle">{error.address}</p> }
        <br />
        <label htmlFor="code">Zip Code</label>
        <input
          type="text"
          name="code"
          onChange={inputEvent}
          value={state.code}
          id="code"
        />
{error.code && <p className="errorStyle">{error.code}</p> }
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={inputEvent}
          value={state.phone}
          id="phone"
        />
{error.phone && <p className="errorStyle">{error.phone}</p> }
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={inputEvent}
          value={state.email}
          id="email"
        />
{error.email && <p className="errorStyle">{error.email}</p> }
        <br />
        <button>Submit</button>
      </form>
      </div>
    </>
  );
};

export default Bill;
