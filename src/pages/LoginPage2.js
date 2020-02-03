import React from "react";

const LoginPage2 = () => {
  return (
    <div
      style={{
        marginTop: 20,
        color: "white",
        fontSize: 12,
        textAlign: "center"
      }}
    >
      <label htmlFor=""> Podaj login </label> <input type="text" />
      <label htmlFor=""> Podaj hasło </label> <input type="text" />
      <button
        style={{
          marginTop: 10,
          height: 30,
          textAlign: "center"
        }}
      >
        Zaloguj
      </button>
    </div>
  );
};

export default LoginPage2;
