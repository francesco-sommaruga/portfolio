import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss'
import { useRouter } from 'next/router'

export function Nav(props) {

    const activePath= useRouter().pathname;
    const pages = props.pages;

    return (
        <section className={styles.container}>
            <nav>
                <ul>
                    {pages.map(page => <li key={page.name} className={page.path === activePath ? styles.active : null}><Link href={page.path}><a><div><button>{page.name}</button></div></a></Link></li>)}
                </ul>
            </nav>
        </section>
    )

}