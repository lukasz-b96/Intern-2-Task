import React, { useState } from "react";
import CheckBox from "./CheckBox";
import CustomInput from "./CustomInput";

const Register = () => {
  const [values, setValues] = useState({});
  const [newsletter, setNewsletter] = useState(false);
  const [info, setInfo] = useState("");

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handlePasswordName = (event) => {
    setValues({ ...values, passwordName: event.target.value });
  };
  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleNewsletter = (event) => {
    if (!newsletter) {
      setNewsletter(true);
    } else {
      setNewsletter(false);
      const data = { ...values };
      setValues({ firstName: data.firstName, passwordName: data.passwordName });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.firstName && values.passwordName) {
      if (newsletter) {
        if (
          values.email &&
          values.email.split("@").length === 2 &&
          values.email.includes(".")
        ) {
          setInfo("pomyślna rejestracja");
          console.log(values);
        } else {
          setInfo("błąd walidacji");
        }
      } else {
        setInfo("pomyślna rejestracja");
        console.log(values);
      }
    } else {
      setInfo("błąd walidacji");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <CustomInput handler={handleFirstName} fieldName="Imie" type="text" />
        <CustomInput
          handler={handlePasswordName}
          fieldName="Hasło"
          type="password"
        />
        <CheckBox handler={handleNewsletter} />
        {
          newsletter ? (
            <CustomInput
              handler={handleEmail}
              fieldName="E-mail"
              type="email"
            />
          ) : null
          // another approach
          // but i will stick to task specification: "@" == 0 && "." >= 1
          // in input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$"
        }

        <button data-testid="register" type="submit">
          Rejestracja
        </button>
        <p data-testid="form">{info}</p>
      </form>
    </div>
  );
};

export default Register;
