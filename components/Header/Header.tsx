import React from 'react'
import styles from './Header.module.scss'
import { Nav } from '../Nav/Nav'
import { Title } from '../Title/Title'
import { useWindowSize } from '../../hooks/setSize'
import { Hamburger } from '../Hamburger/Hamburger'
import { DropdownMenu } from '../DropdownMenu/Dropdownmenu'

export const Header = (props) => {
    const width = useWindowSize()[0];

    return (
        <header className={styles.header}>
            <Title />
            {width > 1200 ? <Nav pages={props.pages} /> : <Hamburger onClick={props.onClick}/>}
            {width <= 1200 && props.isNavOpen === true ? <DropdownMenu pages={props.pages} /> : null}
         </header>
    )

}