This is my first Next.js app.

Next.js servers are run with "npm run dev" command

"pages" folder
- "/pages/index.js" loads the default webpage "http://our-domain".
- "/pages/news.js" loads the news route for the webpage "http://our-domain/news"
- Alternatively, /pages/weather/index.js file would also loads the route "http://our-domain/weather".
- Foldering method allows us to create nested routes like "http://our-domain/weather/today". If we have a "/pages/weather/today.js" file.