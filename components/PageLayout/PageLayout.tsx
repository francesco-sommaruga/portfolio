import React from 'react'
import styles from './PageLayout.module.scss'

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

type MyProps = {};
type MyState = {pages: object, isNavOpen:boolean}

export class PageLayout extends React.Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            pages: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'About',
                    path: '/about'
                },
                {
                    name: 'Projects',
                    path: '/projects'
                },
                {
                    name: 'Contacts',
                    path: '/contacts'
                }
            ],
            isNavOpen: false
    };

    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    }

    handleHamburgerClick() {
        if(this.state.isNavOpen === false) {
            this.setState({isNavOpen: true});
        } else {
            this.setState({isNavOpen: false});
        };
    }

    render() {
        return (
            <div className={styles['page-layout']}>
                <Header pages={this.state.pages} onClick={this.handleHamburgerClick} isNavOpen={this.state.isNavOpen} />
                <div className={styles['main-footer']}>
                    <Main>{this.props.children}</Main>
                    <Footer />
                </div>
            </div>
        )
    }
}