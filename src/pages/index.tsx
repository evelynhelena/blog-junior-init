import { Container } from "@mui/material";
import Head from "next/head";
import { CardPost } from "../components/CardPost";
import { Footer } from "../components/Footer";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./Home.module.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | JuniorInit</title>
      </Head>

      <main className={styles.main}>
        <Container className={styles.container}>
          <section className={styles.sectionContent}>
            <h1>Noticias sobre o <br />mundo do<span> JavaScript</span></h1>
            <SubscribeButton />
          </section>
          <img src="/images/rocket.gif" alt="Foguete" />
        </Container>
      </main>
    <Container>
      <section className={styles.sectionPost}>
        <CardPost/>
        <CardPost/>
        <CardPost/>

        <CardPost/>
        <CardPost/>
        <CardPost/>
      </section>
    </Container>

    </>
  )
}
