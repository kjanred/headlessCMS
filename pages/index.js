import Layout from "../components/layout";
import Image from "next/image";

//exports our home page component
export default function Home({ allData }) {
  return (
    <Layout home>
      <h1>WECLOME LOST ONE</h1>
      <div className="col-6">
        <p className="lead">
          We welcome you to our display of external data. We have strived to collect premium information over the years and we pass it on to you, our glorious user. Thank you for thinking of us for all of your information needs and please look towards us in the future.
        </p>
      </div>
      <div className="col-6" align="center">
        <Image src='/logo.png' width={300} height={300}  alt='big logo' />
      </div>
    </Layout>
  );
}
