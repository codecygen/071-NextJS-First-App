// NextJS-Highly-Dynamic-Links
import { useRouter } from "next/router";

const BlogPosts = () => {
    // NextJS-Highly-Dynamic-Links
    const router = useRouter();

    return (
        <>
            <h1>Filtered Blog Post</h1>
            {/* http://localhost:3000/blog/aras/05/2022 */}
            {/* This path will be stored in the slug variable as */}
            {/* (3) ['aras', '05', '2022'] */}
            <div>{router.query.slug}</div>
        </>
    )
}

export default BlogPosts;