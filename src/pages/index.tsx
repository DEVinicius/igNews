import styles from '../styles/home.module.scss';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    id: string;
    price: number;
  }
}

export default function Home({product}:HomeProps) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <Main 
        price={product.price}
        priceId={product.id}
      />
    </>
  )
}

export const getServerSideProps:GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1J1LcFJU2H39HoW7Upwl2ZtY", {
    expand: ['product']
  });

  const product = {
    id: price.id,
    price: price.unit_amount / 100,
  }

  console.log(product)

  return {
    props: {
      product
    }
  }
}
