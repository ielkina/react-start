import { useContext } from "react";
import Context from "App/context/Context";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import styles from "./Appbar.module.css";

//было
// export default function AppbarOld() {
//   return (
//     <authContext.Consumer>
//       {({ isLoggedIn, user, onLogIn, onLogOut }) => (
//         <header className={styles.header}>
//           <Navigation />
//           {isLoggedIn ? (
//             <UserMenu onLogOut={onLogOut} user={user} />
//           ) : (
//             <button type="button" onClick={onLogIn}>
//               Войти
//             </button>
//           )}
//         </header>
//       )}
//     </authContext.Consumer>
//   )
// }

//переделали на useContext

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
