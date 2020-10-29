import React from 'react'
import styles from './Hamburger.module.scss'


export const Hamburger = props => {

    return (
        <button className={styles.button} onClick={props.onClick}>
            <i className={`${styles.fas} ${styles['fa-bars']}`}></i>
        </button>
    )
}