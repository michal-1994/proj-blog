import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';

function HomePage() {
    const DUMMY_POSTS = [
        {
            title: 'JavaScript for advanced',
            image: 'javascript-for-advanced.jpg',
            excerpt:
                'Nulla facilisi. Etiam accumsan vulputate finibus. Sed vitae molestie justo. Aliquam sodales convallis diam. Nam in leo id ante interdum pellentesque sit amet vel diam.',
            date: '2023-11-01',
            slug: 'javascript-for-advanced'
        },
        {
            title: 'JavaScript for beginners',
            image: 'javascript-for-beginners.jpg',
            excerpt:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis finibus metus quis sagittis. Nunc eget sollicitudin elit, ac euismod ante.',
            date: '2023-10-02',
            slug: 'javascript-for-beginners'
        },
        {
            title: 'Hello world in PHP',
            image: 'hello-world-in-php.jpg',
            excerpt:
                'Nunc in urna augue. Duis id justo commodo, fringilla ipsum eget, sollicitudin augue. Phasellus sit amet fermentum nisl. Aenean in arcu lorem.',
            date: '2023-09-01',
            slug: 'hello-world-in-php'
        }
    ];

    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    );
}

export default HomePage;
