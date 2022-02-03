import React, { useState } from "react";
import CheckBox from "./CheckBox";
import CustomInput from "./CustomInput";

const Register = () => {
  const [values, setValues] = useState({});
  const [newsletter, setNewsletter] = useState(false);
  const [info, setInfo] = useState("");

  const handleName = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  const handlepassword = (event) => {
    setValues({ ...values, password: event.target.value });
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
      setValues({ name: data.name, password: data.password });
    }
  };

  const handleButton = (event) => {
    event.preventDefault();

    if (values.name && values.password) {
      if (newsletter) {
        if (
          values.email &&
          values.email.split("@").length === 2 &&
          values.email.includes(".")
        ) {
          setInfo("pomyślna rejestracja");
          console.log(values);
          //document.forms[0].submit();
        } else {
          setInfo("błąd walidacji");
        }
      } else {
        setInfo("pomyślna rejestracja");
        console.log(values);
        //document.forms[0].submit();
      }
    } else {
      setInfo("błąd walidacji");
    }
  };

  return (
    <div>
      <form id="form1" method="post">
        <CustomInput handler={handleName} fieldName="Imie" type="text" />
        <CustomInput
          handler={handlepassword}
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
          // but I will stick to task specification: "@" == 0 && "." >= 1
          // in input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$"
        }

        <button data-testid="register" onClick={handleButton}>
          Rejestracja
        </button>
        <p data-testid="form">{info}</p>
      </form>
    </div>
  );
};

export default Register;
