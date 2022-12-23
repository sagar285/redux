import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./user";



const sgar ="sagar gupta"
function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com" }));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;
export {sgar}