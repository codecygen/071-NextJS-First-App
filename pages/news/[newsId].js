// http://our-domain/news/something-important

// NextJS-Dynamic-Links
import { useRouter } from "next/router";

const DetailPage = () => {
  // NextJS-Dynamic-Links
  const router = useRouter();

  // NextJS-Dynamic-Links
  const newsId = router.query.newsId;

  // NextJS-Dynamic-Links
  console.log(newsId);

  return (
    <h1>Detail Page</h1>
  );
};

export default DetailPage;