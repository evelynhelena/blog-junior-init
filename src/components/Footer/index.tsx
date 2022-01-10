import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"
import styles from "./styles.module.scss";
export function Footer() {
    const yaer = new Date().getFullYear();
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <FaInstagram />
                <FaGithub />
                <FaTwitter />
            </div>
            <p>Blog JuniorInit © {yaer}</p>
        </footer>
    )
}