import React from "react";
// import { useNavigate,} from "react-router";
// import { useState } from "react";
import { TextField } from "@material-ui/core";
import { StyledButton } from "./styledLoginPage";
import { StyledDiv } from "../../styled/StyledDivGeneral";
import { StyledForm, StyledInput,DivInput,StyledLabel } from "../../styled/StyledInputs";
import logo from "../../assets/logo-future-eats-invert.png";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const LoginPage = () => {
  //   const [values, setValues] = useState({
  //     amount: '',
  //     password: '',
  //     weight: '',
  //     weightRange: '',
  //     showPassword: false,
  // });
  //   const navigate = useNavigate();

  //   const handleClickShowPassword = () => {
  //     setValues({
  //         ...values,
  //         showPassword: !values.showPassword,
  //     });
  // };

  // const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  // };

  return (
    <StyledDiv>
      <div>
        <img src={logo} alt="logo Rappi4" />
      </div>
      <div>
        <h1>Entrar</h1>
      </div>

      <StyledForm>
        <DivInput>
          < StyledInput variant="outlined">
            <InputLabel >Email</InputLabel>
            <OutlinedInput
              label="E-mail"
              variant="outlined"
              placeholder="email@email.com"
              pattern={"^.{6,}"}
              title={"A senha deve ter no mínimo 6 caracteres"}
              required
            />
          </ StyledInput>
        </DivInput>
        <DivInput>
          < StyledInput variant="outlined">
            <StyledLabel>Senha</StyledLabel>
            <OutlinedInput
              label="Display Name"
              variant="outlined"
              placeholder="Mínimo 6 caracteres"
              pattern={"^.{6,}"}
              title={"A senha deve ter no mínimo 6 caracteres"}
              required
            />
          </ StyledInput>
        </DivInput>
        <StyledButton fullWidth variant={"container"} color={"Lipstick"}>
          Fazer Login
        </StyledButton>
      </StyledForm>
      <div>
        <h1>
          {" "}
          Não possui cadastro ? <a> Clique aqui.</a>
        </h1>
      </div>
    </StyledDiv>
  );
};

export default LoginPage;
