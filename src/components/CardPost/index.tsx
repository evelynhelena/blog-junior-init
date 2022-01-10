import styles from "./styles.module.scss";
export function CardPost() {
    return (
        <div className={styles.sectionContainer}>
            <img src="/images/html-css.jpg" alt="html e css" />
            <div className={styles.content}>
                <p>HtML e CSS</p>
                <h2>Fala Dev, Nesse post vamos falar um pouco sobre HTML e CSS</h2>
                <span>By: Evelyn Helena</span>
            </div>
        </div>
    );
}