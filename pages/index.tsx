import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_NAME, SAMPLE_LISTINGS } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name='description' content='ALX Airbnb-style listing page scaffold' />
      </Head>

      <main className='mx-auto max-w-6xl px-4 py-10'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold'>Explore stays</h1>
          <p className='text-gray-600'>Discover places you’ll love.</p>
        </header>

        <section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {SAMPLE_LISTINGS.map((item) => (
            <Card key={item.id} title={item.title} imageSrc={item.imageSrc}>
              <p className='mb-3'>{item.description}</p>
              <div className='flex items-center justify-between'>
                <span className='font-semibold'>/night</span>
                <Button>Book Now</Button>
              </div>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
}

