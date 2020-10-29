import React from 'react'
import styles from './Grid.module.scss'
import { Card } from '../Card/Card'

export const Grid = props => {


    return (
        <section className={styles.container}>
            <Card className='columns-2'><div>Qui ci va una foto</div><div><h1>Ciao</h1><p>Mi chiamo virgola, sono un gattino e sono la stella del tuo telefonino</p><button>CIAO!</button></div></Card>
            <Card className='columns-2'><div>Qui ci va una foto</div><div><h1>Ciao</h1><p>Mi chiamo virgola, sono un gattino e sono la stella del tuo telefonino</p><button>CIAO!</button></div></Card>
            <Card className='columns-2'><div>Qui ci va una foto</div><div><h1>Ciao</h1><p>Mi chiamo virgola, sono un gattino e sono la stella del tuo telefonino</p><button>CIAO!</button></div></Card>
            <Card className='columns-2'><div>Qui ci va una foto</div><div><h1>Ciao</h1><p>Mi chiamo virgola, sono un gattino e sono la stella del tuo telefonino</p><button>CIAO!</button></div></Card>
        </section>
    ) 
}