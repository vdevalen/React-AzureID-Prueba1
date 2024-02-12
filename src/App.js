import LoginForm from './LoginForm';
import './App.css';
import { loginRequest } from "./Config";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";


const WrappedView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance
      .loginRedirect({
          ...loginRequest,
          prompt: 'create',
  })
  .catch((error) => console.log(error));
};

  return (
  <div className="App">
  <AuthenticatedTemplate> 
      {activeAccount ? (
  <p>
      Authenticated Successfully 
  </p>
  ) : null}

  </AuthenticatedTemplate>
  <UnauthenticatedTemplate>
    <div className="login-container">
      <button onClick={handleRedirect}>
          Sign up
      </button>
    </div>
  </UnauthenticatedTemplate>
  </div>
  );
};

const App = ({ instance }) => {
  return (
    <MsalProvider instance= {instance}>
      <WrappedView></WrappedView>
      <LoginForm></LoginForm>
    </MsalProvider>
  );
};

export default App;
