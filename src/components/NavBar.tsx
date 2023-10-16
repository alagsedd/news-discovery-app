import styles from "../styles/NavBar.module.css";
import logo from "../assets/Gallery/logo.jpg";
import { useContext, useRef } from "react";
import NavBarSearchContext from "../contexts/NavBarSearchContext";

const NavBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(NavBarSearchContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="Alag's logo" className={styles.image} />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchRef.current) {
            dispatch({ type: "onSearch", search: searchRef.current?.value });
            console.log(searchRef.current.value);
            searchRef.current.value = "";
          }
        }}
      >
        <input
          ref={searchRef}
          placeholder="Search 80,000 news blogs "
          type="text"
          className={styles.input}
        />
      </form>
    </nav>
  );
};

export default NavBar;
