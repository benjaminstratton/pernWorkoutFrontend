import React, { useState } from "react";

const Signup = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    sex: "",
    height: "",
  });

  const { name, email, password, dob, sex, height } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, password, dob, sex, height };
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center my-5">Signup</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control my-3"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control my-3"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control my-3"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <input
          type="date"
          name="dob"
          className="form-control my-3"
          value={dob}
          onChange={(e) => onChange(e)}
        />
        <select
          name="sex"
          className="form-control my-3"
          value={sex}
          onChange={(e) => onChange(e)}
        >
          <option value="U">Other</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input
          type="number"
          name="height"
          placeholder="Height (inches)"
          className="form-control my-3"
          value={height}
          onChange={(e) => onChange(e)}
        />
        <button className="btn btn-success">Submit</button>
      </form>
    </>
  );
};

export default Signup;
