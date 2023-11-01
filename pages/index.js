import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';

import { getFeaturedPosts } from '@/lib/posts-util';

function HomePage(props) {
    const { posts } = props;

    return (
        <>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    };
}

export default HomePage;
