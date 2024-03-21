import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
    return (
    <div className={styles.container}>
      <Head>
        <title>AutoSME Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sidebar}>
        <div className={styles.iconContainer} data-tooltip="New graph window">
          <img width="48" height="48" src="https://img.icons8.com/ios/50/1A1A1A/share-2--v1.png" alt="share-2--v1" className={styles.sidebarImg}/>
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>ICD10</button>
            <button className={styles.dropdownButton}>CPT4</button>
            <button className={styles.dropdownButton}>GPI</button>
          </div>
        </div>

        <div className={styles.iconContainer} data-tooltip="New node details window">
          <img width="48" height="48" src="https://img.icons8.com/ios/50/000000/microscope.png" alt="microscope" className={styles.sidebarImg}/>
        </div>

        <div className={styles.iconContainer} data-tooltip="New clinical journey explorer window (coming soon!)">
          <img width="48" height="48" src="https://img.icons8.com/ios/50/1A1A1A/sankey.png" alt="sankey" className={styles.sidebarImg}/>
        </div>

        <div className={styles.iconContainer} data-tooltip="New AI chat window (coming soon!)">
          <img width="48" height="48" src="https://img.icons8.com/ios/50/background-remover.png" alt="background-remover" className={styles.sidebarImg} />
        </div>

        <div className={`${styles.iconContainer} ${styles.homeIcon}`} data-tooltip="Home">
            <Link href="/">
                <img width="48" height="48" src="https://img.icons8.com/ios/50/1A1A1A/home.png" alt="home" className={styles.sidebarImg}/>
            </Link>
        </div>
       
      </div>

      <main>
        <h1 className={styles.title}>
          This is the graph explorer page!
        </h1>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );

}
