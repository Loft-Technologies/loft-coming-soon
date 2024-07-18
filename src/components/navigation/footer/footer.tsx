import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>@Loft 2021 all right reserved</div>
            <div className={styles.contact}>Contact us : loftappng@gmail.com</div>
        </div>
    )
}

export default Footer
