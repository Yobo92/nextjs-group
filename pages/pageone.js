import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';

export default function PageOne ({data}) {


    return (
        <>
        <Head>
        <title>Page One</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <h1>Page 1</h1>
            <h3><Link href="/">return</Link></h3>

            {data.map((user) => {
               return <li key={user.id}>{user.name}</li>
            })}

        </main>
        </>
    )
}

export async function getStaticProps() {
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(data);

    return {
        props: {
            data
        }
    }

}