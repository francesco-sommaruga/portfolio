import React from 'react'
import styles from './Footer.module.scss'

export class Footer extends React.Component {

    render() {
        return(
            <footer className={styles.footer}>
                <h4>
                    Made with <a href="https://nextjs.org/" target="_blank">Next.js</a>
                </h4>
            </footer>
        )
    }

}