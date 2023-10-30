import Image from 'next/image';

import classes from '@/styles/hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src={'/images/site/hero.jpg'}
                    alt={'An image showing Michal'}
                    width={400}
                    height={400}
                />
            </div>
            <h1>Welcome to my blog</h1>
            <p>I blog about web development</p>
        </section>
    );
}

export default Hero;
