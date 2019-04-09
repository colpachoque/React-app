import React from 'react';
import styles from './Footer.css';
import Copyright from '../common/Copyright';

const Footer = (props) => (
            <footer className={styles.footer}>
                <Copyright/>
            </footer>
        );

export default Footer;