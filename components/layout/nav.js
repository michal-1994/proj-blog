import Link from 'next/link';

import classes from './nav.module.css';

function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
