import { Button, Input, Link } from "../../components";
import "./RegistrationPage.scss";

export const RegistrationPage = () => {
  const links = [
    {
      classNameLink: "reg__link google-link",
      imgLink: "/img/icons/google.svg",
      altLink: "Google",
    },
    {
      classNameLink: "reg__link google-plus-link",
      imgLink: "/img/icons/google-plus.svg",
      altLink: "Google Plus",
    },
    {
      classNameLink: "reg__link yandex-link",
      imgLink: "/img/icons/yandex.svg",
      altLink: "Yandex",
    },
    {
      classNameLink: "reg__link mail-link",
      imgLink: "/img/icons/mail-ru.svg",
      altLink: "Mail.ru",
    },
  ];

  return (
    <div className="RegistrationPage">
      <h1>Регистрация</h1>
      <form action="#">
        <Input type="text" placeholder="Имя" />
        <Input type="text" placeholder="Фамилия" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder="Пароль" />
        <Input type="password" placeholder="Повторите пароль" />
        <Button text="Зарегистрироваться" />
      </form>
      <div className="registration">
        <p>Или зарегистрируйтесь с помощью:</p>
        <div className="icons-wrapper">
          {links.map((link, index) => (
            <Link
              key={index}
              className={link.classNameLink}
              src={link.imgLink}
              alt={link.altLink}
            />
          ))}
        </div>
        <span>
          Уже есть аккаунт? <a href="/">Войти</a>
        </span>
      </div>
    </div>
  );
};
