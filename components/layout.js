import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';



export default function Layout( { children, home } ) {
return (
   <div>
    <Head>
        <title>FIRST APP and GOD HAS NO LOVE</title>
        </Head>
        
        <div className="container-fluid">
            <div className="row">
               
                <nav className="navbar navbar-expand-lg">
                    <div className='container-fluid'>
                        <a className="navbar-brand" href="../">
                            <Image className="img-fluid" height={100} width={100} src="/logo.png" alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse" id="navbarNav">
                            <div className="navbar-nav">
                                <Link className="nav-link" href="../customers">Customers</Link>
                                <Link className="nav-link" href="../products">Products</Link>
                                <Link className="nav-link" href="../events">Events</Link>



                            </div>
                        </div>

                        
                        </div>
                    </nav>
        
        </div>
    <div className="row">
        {children}
        </div>
            
        <div className="row">
       <h6>Thank you for visiting our wonderful first application!</h6>
            </div>
            
        </div>{/* end of bootstrap container*/}
        
   </div> 
);
}