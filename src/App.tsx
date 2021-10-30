import React, { useState } from "react";
import { Login } from "./components/ui/login";

export const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  const handleOnClick = () => {
    setDisabled(true);
  };

  return (
    <div>
      <Login
        nameLabel="Username:"
        nicknamePlaceholder="Please insert a valid Nickname here:"
        passwordLabel="Password:"
        passwordPlaceholder="Please insert a valid password here:"
        validatePassword={true}
        onClick={handleOnClick}
        disabled={disabled}
      ></Login>
    </div>
  );
};
