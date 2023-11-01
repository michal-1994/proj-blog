import Markdown from 'react-markdown';

import PostHeader from './post-header';

import classes from './post-content.module.css';

const DUMMY_POST = {
    title: 'JavaScript for advanced',
    image: 'javascript-for-advanced.jpg',
    content: '# This is a first post',
    date: '2023-11-01',
    slug: 'javascript-for-advanced'
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <Markdown>{DUMMY_POST.content}</Markdown>
        </article>
    );
}

export default PostContent;
