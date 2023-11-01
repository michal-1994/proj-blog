import Markdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
        },
        code(code) {
            const { className, children } = code;
            const language = className.split('-').pop();

            return (
                <SyntaxHighlighter language={language} style={atomDark}>
                    {children}
                </SyntaxHighlighter>
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
