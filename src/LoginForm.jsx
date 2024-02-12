import React from 'react';
import './App.css';
import './LoginForm.css';
import './api.css'

const LoginForm = ({ handleRedirect }) => {
  return (
    <main className="main">
      <section className="description">
        <div className="logo">
          <img className="logo__image" src="./img/login_desktop/logo1.svg" alt="Logo 1" />
          <img className="logo__name" src="./img/login_desktop/logo2.svg" alt="Logo 2" />
        </div>

        <div className="content">
          <h1 className="titles titles--large">Lleva tu emprendimiento al siguiente nivel</h1>

          <div className="cards">
            <div className="card">
              <img src="./img/login_desktop/planeacion.svg" className="card__image" alt="Planeación" />
              <h2 className="card__title titles titles--smedium">Planeación y seguimiento</h2>
              <p className="card__description">Define y gestiona tu estrategia utilizando agilidad, mapas estratégicos e indicadores de gestión.</p>
            </div>
            <div className="card">
              <img src="./img/login_desktop/elearning.svg" className="card__image" alt="E-learning" />
              <h2 className="card__title titles titles--smedium">E-learning y capacitación</h2>
              <p className="card__description">Capacítate en todo lo que debes saber para gestionar el crecimiento de tu emprendimiento.</p>
            </div>
            <div className="card">
              <img src="./img/login_desktop/marketplace.svg" className="card__image" alt="Marketplace" />
              <h2 className="card__title titles titles--smedium">Marketplace estratégico</h2>
              <p className="card__description">Encuentra todo lo que necesitas para acelerar la evolución de tu emprendimiento acorde a tu estrategia.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="login">
        <div className="logo logo--mobile">
          <img className="logo__image" src="./img/login_desktop/logo_mobile.svg" alt="Logo móvil" />
        </div>
        <div className="form">
          <div className="titles titles--medium form__title">Ingresa a tu <span className="form__title form__title--secondary">cuenta</span></div>
          <div id="api">
            <div className="heading">
              <h1 role="heading"></h1>
            </div>
            <form id="localAccountForm" className="localAccount" aria-label="Utilizando tu correo electrónico">
              <div className="intro">
                <h2>Utilizando tu correo electrónico</h2>
              </div>
              <div className="error pageLevel" aria-hidden="true" role="alert">
                <p></p>
              </div>
              <div className="entry">
                <div className="entry-item">
                  <div className="error itemLevel" aria-hidden="true" role="alert">
                    <p></p>
                  </div>
                  <input type="email" id="email" name="Correo electrónico" title="Escriba un valor de correo electrónico válido." pattern="^[a-zA-Z0-9!#$%&amp;'+^_`{}~-]+(?:\.[a-zA-Z0-9!#$%&amp;'+^_`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$" autoFocus="" placeholder="Correo electrónico" aria-label="Correo electrónico" />
                </div>
                <div className="entry-item">
                  <div className="password-label"></div>
                  <div className="error itemLevel" aria-hidden="true">
                    <p role="alert"></p>
                  </div>
                  <input type="password" id="password" name="Contraseña" placeholder="Contraseña" aria-label="Contraseña" autoComplete="current-password" aria-required="true" />
                  <div className="forgot-password center-height">
                    <a id="forgotPassword" href="/logikaapp.onmicrosoft.com/B2C_1_SignInAndSignUp/api/CombinedSigninAndSignup/unified?claimsexchange=ForgotPassword&amp;csrf_token=by81MDROU1FoNER2RlBhaWVYRWp2MXpiaW9ERnNuVmVabElmNHM0RURCaksvQWZqMkJqb29QSWFTSDlYQzlueGUrR1dIeVdzd1BBaXZLUVVONlJsMnc9PTsyMDI0LTAxLTIxVDE3OjE2OjE3LjM5Nzg2NjZaO2k4ak5jSUJGbmQxcnhKTHU5cXlBMnc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiIzM2Y5NjUyOC01NzE0LTQwMzQtOWRjYi0zOGNiMTIxMzkwNGQifQ&amp;p=B2C_1_SignInAndSignUp">Recuperar contraseña</a>
                  </div>
                </div>
                <div className="working"></div>
                <div className="buttons">
                  <button id="next" type="submit" form="localAccountForm">Ingresar a mi cuenta</button>
                </div>
              </div>
              <div className="divider">
                <h2>O</h2>
              </div>
              <div className="create">
                <p>¿No tiene una cuenta?<a id="createAccount" href="/logikaapp.onmicrosoft.com/B2C_1_SignInAndSignUp/api/CombinedSigninAndSignup/unified?local=signup&amp;csrf_token=by81MDROU1FoNER2RlBhaWVYRWp2MXpiaW9ERnNuVmVabElmNHM0RURCaksvQWZqMkJqb29QSWFTSDlYQzlueGUrR1dIeVdzd1BBaXZLUVVONlJsMnc9PTsyMDI0LTAxLTIxVDE3OjE2OjE3LjM5Nzg2NjZaO2k4ak5jSUJGbmQxcnhKTHU5cXlBMnc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiIzM2Y5NjUyOC01NzE0LTQwMzQtOWRjYi0zOGNiMTIxMzkwNGQifQ&amp;p=B2C_1_SignInAndSignUp">Crear una cuenta</a></p>
              </div>
            </form>
            <div className="divider">
              <h2>O</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
