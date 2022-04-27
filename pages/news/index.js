// http://our-domain/news

// React-Link-Clicking-Button-Link-Component
// Advantage of using Link instead of anchor tag
// is it prevents page to send an HTTP request to the
// server. Makes the app a SPA (Single Page Application)
import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          {/* React-Link-Clicking-Button-Link-Component */}
          <Link href="/news/my-detail-page">NextJS is a framework</Link>
        </li>
        <li>React is a library</li>
      </ul>
    </>
  );
};

export default News;