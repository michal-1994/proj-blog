import PostHeader from './post-header';

import classes from './post-content.module.css';

const DUMMY_POST = {
    title: 'JavaScript for advanced',
    image: 'javascript-for-advanced.jpg',
    content: '# This is a firs post',
    date: '2023-11-01',
    slug: 'javascript-for-advanced'
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            Content
        </article>
    );
}

export default PostContent;
