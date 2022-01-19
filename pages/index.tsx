
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { SubscribeButton } from '../src/components/SubscribeButton'
import styles from './home.module.scss'
import { stripe } from '../services/stripe'


interface HomeProps {
  product: {
    priceId: string
    amount: number,

  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | IG.news</title>
      </Head>
      <main className={styles.contentContainer}>

        <section className={styles.hero}>

          <span>👏Hey, welcome</span>

          <h1>News about the <span>React</span> world.</h1>

          <p>Get acesse to all the publications <br /> <span>by {product.amount}</span></p>

          <SubscribeButton productId={product.priceId} />

        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KJjKqJqAGlDH9mtxNXSyqsZ')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }
  return {
    props: {
      product
    }
  }

}
