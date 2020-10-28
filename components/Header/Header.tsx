import React from 'react'
import styles from './Header.module.scss'
import { Nav } from '../Nav/Nav'
import { Title } from '../Title/Title'
import { useWindowSize } from '../../hooks/setSize'
import { useRouter } from 'next/router'

export function Header(props) {
    const width = useWindowSize()[0];
    const activePath= useRouter().pathname;

    return (
        <header className={styles.header}>
            <Title />
            {width > 1200 ? <Nav /> : null}
         </header>
    )

}