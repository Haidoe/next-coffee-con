import { useRouter } from "next/router";
import Head from "next/head";

const PageNotFound = () => {
  const router = useRouter();

  console.log(router);
  return (
    <>
      <Head>
        <title>{router.query.slug} | Coffee Connoisseur</title>
      </Head>

      <div>Dynamic route {router.query.slug}</div>
    </>
  );
};

export default PageNotFound;
