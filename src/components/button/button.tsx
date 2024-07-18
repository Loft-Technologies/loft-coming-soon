import styles from './button.module.css'

interface ButtonProps {
    text: string;
    textColor: string;
    backgroundColor: string;
}

const Button = ({ text, textColor, backgroundColor }: ButtonProps) => {
    const buttonStyle = {
        color: textColor,
        backgroundColor: backgroundColor
    };

    return (
        <button className={styles.button} style={buttonStyle}>
            {text}
        </button>
    )
}

export default Button
