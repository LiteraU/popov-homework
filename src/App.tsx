import React from 'react';
import {
  Container,
  ErrorMessage,
  InputLogin,
  InputPassword,
  InputComponents,
  Title,
  TitleComponents,
  Wrapper,
  Login
} from "./App.styles";
import {useSignInLogic} from "./Form";
import {Input} from "./Input";

function App() {

  let {
    signInForm,
    errorMessage,
    emailTouchedError,
    passwordTouchedError,
  } = useSignInLogic()

  return (
      <Wrapper>
        <Container>
          <TitleComponents>
            <Title>Вход</Title>
          </TitleComponents>
          <InputComponents>
            <InputLogin>
              <Input
                  placeholder="Введите почту или телефон"
                  type="login"
                  name="login"
                  value={signInForm.values.login}
                  onChange={signInForm.handleChange}
                  onBlur={signInForm.handleBlur}
                  error={emailTouchedError}
              />

            </InputLogin>
            <InputPassword>
              <Input

                  placeholder="Введите пароль"
                  type="password"
                  name="password"
                  value={signInForm.values.password}
                  onChange={signInForm.handleChange}
                  onBlur={signInForm.handleBlur}
                  error={passwordTouchedError}
              />

            </InputPassword>
          </InputComponents>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Login
              onClick={() => signInForm.handleSubmit()}
              disabled={!(signInForm.isValid && signInForm.dirty)}
          >
            Войти
          </Login>
        </Container>
      </Wrapper>
  );
}

export default App;
