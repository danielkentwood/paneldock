import { NextPage } from 'next';
import Head from 'next/head';
import home_styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
    <div className={home_styles.container}>
      <Head>
        <title>AutoSME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={home_styles.title}>
          Welcome to AutoSME
        </h1>

        <p className={home_styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={home_styles.grid}>
          <a href="https://nextjs.org/docs" className={home_styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about AutoSME features and API.</p>
          </a>

          <Link
            href="/explorer"
            className={home_styles.card}
          >
            <h3>Graph Explorer &rarr;</h3>
            <p>Explore our integrated, interactive knowledge graphs.</p>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={home_styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <Link
            href="/blog/first-post"
            className={home_styles.card}
          >
            <h3>Blog &rarr;</h3>
            <p>
              Check out the AutoSME blog!
            </p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={home_styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default Home;
