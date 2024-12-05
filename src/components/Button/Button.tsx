import { useNavigate } from "react-router";

import styles from './Button.module.scss'

export const Button = ({ step, text, children }: any) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(step);
    };
    return (
        <button onClick={handleClick} className={styles.btn}>{text ?? children}</button>
    )
}
