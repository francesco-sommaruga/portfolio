import React from 'react'
import styles from './PageLayout.module.scss'

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export class PageLayout extends React.Component {

    render() {
        return (
            <div className={styles['page-layout']}>
                <Header />
                <div className={styles['main-footer']}>
                    <Main></Main>
                    <Footer />
                </div>
            </div>
        )
    }
}