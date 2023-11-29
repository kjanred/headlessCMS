import Head from 'next/head';
import Link from 'next/link';



export default function Layout( { children, home } ) {
return (
   <div>
    <Head>
        <title>FIRST APP and GOD HAS NO LOVE</title>
    </Head>
    <header>
        <nav>
            <Link href="../">Home</Link>
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
       <h6>Thank you for visiting our wonderful first application!</h6>
        </footer>
   </div> 
);
}