import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"
import styles from "./styles.module.scss";
export function Footer() {
    const yaer = new Date().getFullYear();
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md" className={styles.footerContent}>
            <Toolbar>
              <Typography variant="body1" color="inherit" textAlign="center" className={styles.typography}>
                <FaInstagram />
                <FaGithub />
                <FaTwitter />
              </Typography>
            </Toolbar>
            <p>Blog JuniorInit © {yaer}</p>
          </Container>
        </AppBar>
    )
}