import { Logo } from '../../../assets/icons'
import { Link } from 'react-router-dom'
import Button from '../../button/button'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className={styles.ctaButton}>
        <Link to='/contact-us' className={styles.link}>
          <Button text={`Book a Demo`} textColor={`#FB923C`} backgroundColor={`#FFEDD5`} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
