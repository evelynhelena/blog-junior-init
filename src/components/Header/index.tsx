import { ChangeLayoutButton } from "../ChangeLayoutButton";
import classnames from 'classnames';
import styles from "./styles.module.scss";

interface  ChangeLayoutButtonProps{
    layoutType: boolean;
    changeLayput: () => void;
}

export function Header({layoutType, changeLayput} : ChangeLayoutButtonProps) {
    return (
        <header className={classnames(styles.hederContainer, !layoutType ? styles.lightMode : "")}>
            <div className={styles.hederContent}>
                <img src={layoutType ? '/images/logo-junior-init.png' : '/images/logo-junior-init-dark.png'} alt="Jumior init" />
                <nav>
                    <a className={classnames(styles.active, !layoutType ? styles.TextLightMode : "")}>Home</a>
                    <a className={classnames(!layoutType ? styles.TextLightMode : "")}>Sobre nós</a>

                </nav>
                <ChangeLayoutButton layoutType={layoutType} handleChangeLayputMode={changeLayput}/>
            </div>
        </header>
    )
}