import { useContext } from "react";
import Context from "App/context/Context";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import styles from "./Appbar.module.css";

export default function Appbar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(Context);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Войти
        </button>
      )}
    </header>
  );
}
