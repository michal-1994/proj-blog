import Markdown from 'react-markdown';
import Image from 'next/image';

import PostHeader from './post-header';

import classes from './post-content.module.css';

function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customComponents = {
        img(image) {
            return (
                <Image
                    src={`/images/posts/${image.src}`}
                    alt={image.alt}
                    width={400}
                    height={300}
                    layout="responsive"
                />
            );
        }
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <Markdown components={customComponents}>{post.content}</Markdown>
        </article>
    );
}

export default PostContent;
