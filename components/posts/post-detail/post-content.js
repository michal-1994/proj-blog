import Markdown from 'react-markdown';

import PostHeader from './post-header';

import classes from './post-content.module.css';

function PostContent(props) {
    const { title, image, content, slug } = props.post;
    const imagePath = `/images/posts/${slug}/${image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={title} image={imagePath} />
            <Markdown>{content}</Markdown>
        </article>
    );
}

export default PostContent;
