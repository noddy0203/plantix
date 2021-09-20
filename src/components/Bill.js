import React, { useState , useEffect } from "react";
import Error from "./Error";
import User from "./User";

const Bill = () => {
  const KEY = "THECOMPANYITEM"
  const [state, setState] = useState({
    fullname: "",
    address: "",
    code: "",
    phone: "",
    email: "",
  });
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const inputEvent = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const postData = (e) => {
    try {
      e.preventDefault();
      setError(Error(state));
      const newRecord = { ...state, id: new Date().getTime().toString() };
      setData([...data, newRecord]);
      console.log(data);
      setState({ fullname: "", address: "", code: "", phone: "", email: "" });
    } catch (error) {
      console.log(error);
    }
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
            autoFocus
          />
          {error.fullname && <p className="errorStyle">{error.fullname}</p>}
          <br />
          <label htmlFor="address">Street Address</label>
          <input
            type="text"
            name="address"
            onChange={inputEvent}
            value={state.address}
            id="address"
          />
          {error.address && <p className="errorStyle">{error.address}</p>}
          <br />
          <label htmlFor="code">Zip Code</label>
          <input
            type="text"
            name="code"
            onChange={inputEvent}
            value={state.code}
            id="code"
          />
          {error.code && <p className="errorStyle">{error.code}</p>}
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            onChange={inputEvent}
            value={state.phone}
            id="phone"
          />
          {error.phone && <p className="errorStyle">{error.phone}</p>}
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={inputEvent}
            value={state.email}
            id="email"
          />
          {error.email && <p className="errorStyle">{error.email}</p>}
          <br />
          <button>Submit</button>
        </form>
      </div>

      <User data={data} />
    </>
  );
};

export default Bill;
