import { NextPage } from 'next';
import Head from 'next/head';
import explorer_styles from '../styles/explorer.module.css';
import 'dockview/dist/styles/dockview.css';
import Explorer from './explorer_app';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className={explorer_styles.container}>
      <Head>
        <title>AutoSME Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <main>
        <div className={explorer_styles.app}>
          <Explorer />
        </div>
      </main>
    </div>
  );
};

export default Home;







