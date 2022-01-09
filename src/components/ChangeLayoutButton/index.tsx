import styles from "./styles.module.scss";
import { FaMoon } from "react-icons/fa"
import { FaSun } from "react-icons/fa"
import classnames from "classnames";

interface  ChangeLayoutButtonProps{
    layoutType: boolean;
    handleChangeLayputMode: () => void;
}

export function ChangeLayoutButton({layoutType, handleChangeLayputMode}:ChangeLayoutButtonProps) {
    return (
        <button
            className={classnames(styles.changeLayoutButton, !layoutType ? styles.lightMode : "")}
            onClick={handleChangeLayputMode}>
                {layoutType ? <FaSun /> : <FaMoon/>}
        </button>
    )
}