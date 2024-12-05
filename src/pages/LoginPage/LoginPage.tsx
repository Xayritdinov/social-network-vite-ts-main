import { Button, Input, Link } from "../../components";
import { useNavigate } from "react-router";
import "./LoginPage.scss";

export const LoginPage = () => {
  const navigate = useNavigate();
  const links = [
    {
      classNameLink: "reg__link google-link", imgLink: "./img/icons/google.svg", altLink: "Google"
    },
    {
      classNameLink: "reg__link google-plus-link", imgLink: "./img/icons/google-plus.svg", altLink: "Google Plus"
    },
    {
      classNameLink: "reg__link yandex-link", imgLink: "./img/icons/yandex.svg", altLink: "Yandex"
    },
    {
      classNameLink: "reg__link google-link", imgLink: "./img/icons/mail-ru.svg", altLink: "Mail.ru"
    },
  ]

  const handleRegistrationClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращает переход по умолчанию
    navigate("/auth/registration");
  };

  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <Input type="tel" placeholder="Номер телефона"/>
        <Input type="password" placeholder="Пароль"/>        
        <Button step="/auth/main" text="Войти"/>
      </form>
      <a href="#">Забыли пароль?</a>
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="/auth/registration" onClick={handleRegistrationClick}>Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">          
          {links.map((link, index) => (
            <Link key={index} className={link.classNameLink} src={link.imgLink} alt={link.altLink} /> 
          ))}         
        </div>
      </div>
    </div>
  );
};
