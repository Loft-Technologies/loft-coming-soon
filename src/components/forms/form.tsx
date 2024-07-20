import { AsteriskIcon } from '../../lib/icons'
import Button from '../button/button'
import styles from './form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.formWrapper}>
                <div className={styles.inputWrapper}>
                    <label htmlFor='email'></label>
                    <input
                        required
                        id="email"
                        type="email"
                        placeholder="Provide email"
                        autoComplete="off"
                        aria-required="true"
                        className={styles.inputField}
                    />
                    <div className={styles.warningTextContainer}>
                        <div className={styles.asteriskIcon}><AsteriskIcon /></div>
                        <div className={styles.warningMessage}>Get notified when we launch</div>
                    </div>
                </div>
                <div className={styles.submitButtonWrapper}>
                    <Button text={`Subscribe`} textColor={`#FFFFFF`} backgroundColor={`#FB923C`} />
                </div>
            </div>
        </form>
    )
}

export default Form
