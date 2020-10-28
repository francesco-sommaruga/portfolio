import React from 'react'
import styles from './Title.module.scss'

export const Title = props => {
    return (
        <div className={styles.name}>
            <span>Hi! I'm</span>
            <h1>Francesco</h1>
        </div>
    )
}