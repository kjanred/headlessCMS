import Head from 'next/head';
import Link from 'next/link';
import { getFooterList } from '../lib/data';




export async function getStaticProps() {
    const allData = getFooterList();
    return {
      props: { allData }
    };
  }

export default function Layout( { children, home, allData } ) {
return (
   <div>
    <Head>
        <title>FIRST APP and GOD HAS NO LOVE</title>
    </Head>
    <header>
        <nav>
            <Link href="../pages">Home</Link>
        </nav>
    </header>
    <main>
        {children}
    </main>
        {!home && (
            <Link href="/" className="btn btn-primary">
                Back to Home
            </Link>
        )
        }
        <footer>
       {allData.map(
        ({id, name, url, description}) => (
          <Link key={id} href={url} className="footer-link" alt={description}>
            {name}
          </Link>
        )
    )
    }
        </footer>
   </div> 
);
}