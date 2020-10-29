import React from 'react'
import { Nav } from '../Nav/Nav'
import styles from './DropdownMenu.module.scss'

export const DropdownMenu = props => {

    return(
        <div className={styles.container}>
            <Nav pages={props.pages} />
        </div>
    )
}
