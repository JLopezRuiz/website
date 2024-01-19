import React from 'react';
import Title from '../../components/generic/title/Title';
import Content from '../../components/generic/content/Content';
import Button from '../../components/generic/button/Button';
import ProfilePic from '../../assets/images/selfie2.jpg';
import styles from './FrontPage.module.scss';

const FrontPage = () => {
    const p1 = <p>My journey began with a simple “hello world” page and has since evolved into crafting innovative and accessible digital experiences. I’m passionate about crafting magic, one line of code at a time. You can find me meticulously debugging code, armed with a cup of peppermint tea—a delightful ritual that fuels my quest to improve and enhance the digital world.</p>;
    const p2 = <b>Welcome to my world of magic and innovation!</b>;

    return (
        <div id="frontPage" className={styles['front-page']}>
            <img src={ProfilePic} alt="me, smiling at the camera while sitting on a horizontal tree trunk" className={styles['front-page-img']} />
            <section>
                <Title text="Hi, I'm Jackeline!" className={styles['front-page-title']} />
                <Content paragraphs={[p1, p2]} paragraphClassName={styles['front-page-text']} />
                <Button children={"Abracadabra!"} link={'/about#top'} className={styles['contact-btn']} aria-label='about page'/>
            </section>
        </div>
    )
}

export default FrontPage;