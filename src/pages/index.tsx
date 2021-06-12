import styles from '../styles/home.module.scss';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <Main />
    </>
  )
}
