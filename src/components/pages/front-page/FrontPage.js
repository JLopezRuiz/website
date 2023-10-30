import React from 'react';
import Title from '../../generic/title/Title';
import ProfilePic from '../../../assets/images/profile-pic.png';
import styles from './FrontPage.module.scss';

// TODO: Replace Image and Add Contact Button
// TODO: When screen size smaller, place photo above and content below
const FrontPage = () => {
    return (
        <div id="frontPage" className={styles['front-page']}>
            <img src={ProfilePic} alt="me, smiling at the camera with a pink bucket hat" className={styles['front-page-img']} />
            <div>
                <Title text="Hi, I'm Jackeline!" className={styles['front-page-title']} />
                <p className={styles['front-page-text']}>
                    My journey began with  a simple “hello world” page and has since evolved into crafting innovative and accessible digital experiences. I’m passionate about crafting magic, one line of code at a time. You can find me meticulously debugging code, armed with a cup of peppermint tea—a delightful ritual that fuels my quest to improve and enhance the digital world. 
                </p>
                <p className={styles['front-page-text']} style={{'font-weight': 'bold'}}>
                    Let's connect and explore the magic of creation together! 🌟
                </p>
            </div>
        </div>
    )
}

export default FrontPage;