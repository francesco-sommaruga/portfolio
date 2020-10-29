import React from 'react'
import styles from './Main.module.scss'

export const Main = props => {

    return (
        <main className={styles.main}>
            {props.children}
        </main>
    )

}