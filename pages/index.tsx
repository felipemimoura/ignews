
import Head from 'next/head'
import styles from './home.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IG.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get acesse to all the publications <br /> <span>by $9.90</span></p>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
