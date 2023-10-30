import Link from 'next/link';

import classes from './logo.module.css';

function Logo() {
    return (
        <Link href="/">
            <span className={classes.logo}>My blog</span>
        </Link>
    );
}

export default Logo;
