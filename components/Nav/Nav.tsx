import React from 'react';
import styles from './Nav.module.scss';

export class Nav extends React.Component{

    render(){
        return (
            <section className={styles.container}>
                {this.props.children}
                <nav>
                    <ul>
                        <a href=""><li><button>Home</button></li></a>
                        <a href=""><li><button>About</button></li></a>
                        <a href=""><li><button>Projects</button></li></a>
                        <a href=""><li><button>Contacts</button></li></a>
                    </ul>
                </nav>
            </section>
        )
    }

}