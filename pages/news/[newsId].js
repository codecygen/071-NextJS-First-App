// http://our-domain/news/something-important

import { useRouter } from "next/router";

const DetailPage = () => {
    const router = useRouter();

    router.query

    return (
      <h1>Detail Page</h1>
    );
  };
  
  export default DetailPage;