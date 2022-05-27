// http://our-domain/news

// React-Link-Clicking-Button-Link-Component
// Advantage of using Link instead of anchor tag
// is it prevents page to send an HTTP request to the
// server. Makes the app a SPA (Single Page Application)
// Preventing to send a new http request is also important because 
// you want to keep the app wise state.
import Link from "next/link";

const News = () => {
  const newsList = [
    { id: 'headline1', name: 'Headline 1' },
    { id: 'headline2', name: 'Headline 2' },
    { id: 'headline3', name: 'Headline 3' },
  ];

  const allLinks = newsList.map(news => (
    <li
      key={news.id}
    >
      <Link

        href={{
          pathname: '/news/[newsId]',
          query: { newsId: news.id }
        }}
      >{news.name}</Link>
    </li>
  ));

  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          {/* React-Link-Clicking-Button-Link-Component */}
          {/* href is an alternative method for linking */}
          {/* <Link href="/news/my-detail-page">NextJS is a framework</Link> */}
          {allLinks}
        </li>
        <p>React is a library</p>
      </ul>
    </>
  );
};

export default News;