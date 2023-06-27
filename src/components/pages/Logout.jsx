import React from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../atoms/Loading";
import { removeToken } from "../../helper/Auth";

export default function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      removeToken();
      navigate("/");
    }, 1500);
  }, [navigate]);

  return <Loading message="Desconectando a aplicação..." />;
}
