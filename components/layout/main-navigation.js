import Logo from './logo';
import Nav from './nav';

import classes from './main-navigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <Logo />
            <Nav />
        </header>
    );
}

export default MainNavigation;
