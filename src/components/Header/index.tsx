import styles from './Header.module.css'
import logo from '../../assets/image.png'
import { IoSunnyOutline } from "react-icons/io5";

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <h2>Extensions</h2>
      <div className={styles.sun}>
      <IoSunnyOutline  size={25} color={"#FFFFFF"} />
      </div>
    </div>
  )
}

export default Header

