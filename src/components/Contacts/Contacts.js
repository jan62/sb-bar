import React from 'react'
import styles from './Contacts.module.css'
import inst from '../../img/inst.png'
import whats from '../../img/wa.png'
import face from '../../img/fb.png'
import map from '../../img/map.png'

export default function Contacts() {
    return (
        <div className={styles.mainback}>
        <div className={styles.div1}>
            <div>
            <h1 className={styles.con}>Контакты</h1>
                <div>
                    <h4>Режим работы</h4>
                    <p>c 10:00 до 20:00</p>
                    <p>Сб, Вс - выходной</p>
                </div>
                <div>
                <h4>Телефон</h4>
                    <p>+996 (0553) 577-575</p>
                    <p>+996 (0773) 577-575</p>
                </div>
                <div>
                <h4>Адрес</h4>
                    <p>г. Бишкек, Медерова, 50/2</p>
                </div>
                <div className={styles.social}>
                    <div>
                        <img src={inst} alt="" />
                    </div>
                    <div>
                        <img src={whats} alt="" />
                    </div>
                    <div>
                        <img src={face} alt="" />
                    </div>
                </div>
            </div>
            <div>
            <div>
                <img src={map} alt="" />
            </div>
            </div>

        </div>
        </div>

    )
}
