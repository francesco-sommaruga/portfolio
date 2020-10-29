import React from 'react'
import styles from './Card.module.scss'

export const Card = props => {
    
    return (
        <article className={`${styles[props.className]} ${styles.card}`}>
            {props.children}
        </article>
    )
}