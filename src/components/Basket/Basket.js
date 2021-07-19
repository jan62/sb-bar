import React from 'react'
import im1 from '../../img/menu.png'
import styles from './Basket.module.css'

const Basket=()=> {
    return (
      <>
      <div className={styles.bas}><p className={styles.bass}>Корзина</p></div>
    
      
      <div className={styles.bulgur}>
          <div className={styles.imgg}>
              <img src={im1} alt="" />
          </div>
          <div className={styles.buk}>
          <div className={styles.for}><p>Форель с булгуром</p></div>
          <div className={styles.cena}>
              
              <div className={styles.forel}>
                  <div>
                  <p>Количество</p>
                  <div className={styles.plus}>
                  <p>-</p>
                  <p>2</p>
                  <p>+</p>
                  </div></div>
              
              <div><p> Цена</p>
              <p> 1000сом</p></div>
              <div><p>Конечная цена</p>
              <p>2000сом</p>
              </div>
              </div>
          </div>
          </div>
      </div>

      <div className={styles.bulgur}>
          <div className={styles.imgg}>
              <img src={im1} alt="" />
          </div>
          <div className={styles.buk}>
          <div className={styles.for}><p>Форель с булгуром</p></div>
          <div className={styles.cena}>
              
              <div className={styles.forel}>
                  <div>
                  <p>Количество</p>
                  <div className={styles.plus}>
                  <p>-</p>
                  <p>2</p>
                  <p>+</p>
                  </div></div>
              
              <div><p> Цена</p>
              <p> 1000сом</p></div>
              <div><p>Конечная цена</p>
              <p>2000сом</p>
              </div>
              </div>
          </div>
          </div>
      </div>

      <div className={styles.bulgur}>
          <div className={styles.imgg}>
              <img src={im1} alt="" />
          </div>
          <div className={styles.buk}>
          <div className={styles.for}><p>Форель с булгуром</p></div>
          <div className={styles.cena}>
              
              <div className={styles.forel}>
                  <div>
                  <p>Количество</p>
                  <div className={styles.plus}>
                  <p>-</p>
                  <p>2</p>
                  <p>+</p>
                  </div></div>
              
              <div><p> Цена</p>
              <p> 1000сом</p></div>
              <div><p>Конечная цена</p>
              <p>2000сом</p>
              </div>
              </div>
          </div>
          </div>
      </div>

      <div >
          <div className={styles.ofor}>
          <div className={styles.obsh}>    <p>Общая стоимость:</p> <strong>6000</strong></div>
          <div className={styles.kolvo}>   <p>Количество элементов:</p> <strong>6</strong></div>
           
              <button>Оформить заказ</button>
          </div>
      </div>
      <h2 className={styles.takje}>С этим также подойдет</h2>
      <div className={styles.more}> 
      <div >
          <div>
              <img src={im1} alt="" />
          </div>
          <div className={styles.text}>
          <p className={styles.pip}>Форель с булгуром</p>
          <p>Описание продукта, особенности,<br/> плюсы и минусы. </p>
          </div>
          <div className={styles.text2}>
          <div className={styles.som}>
          <strong >1000 сом</strong>   
          <button>В КОРЗИНУ</button>
          </div>
         
          </div>
          </div>


          <div>
          
          <div>
              <img src={im1} alt="" />
          </div>
          <div className={styles.text}>
          <p className={styles.pip}>Форель с булгуром</p>
          <p>Описание продукта, особенности,<br/> плюсы и  минусы. </p>
          </div>
          <div className={styles.text2}>
          <div className={styles.som}>
          <strong >1000 сом</strong>   
          <button>В КОРЗИНУ</button>
          </div>
         
          </div>
          </div>


          <div>
          <div>
              <img src={im1} alt="" />
          </div>
          <div className={styles.text}>
          <p className={styles.pip}>Форель с булгуром</p>
          <p>Описание продукта, особенности,<br/> плюсы и  минусы. </p>
          </div>
          <div className={styles.text2}>
          <div className={styles.som}>
          <strong >1000 сом</strong>   
          <button>В КОРЗИНУ</button>
          </div>
         
          </div>
          </div>


          <div>
          <div>
              <img src={im1} alt="" />
          </div>
          <div className={styles.text}>
          <p className={styles.pip}>Форель с булгуром</p>
          <p>Описание продукта, особенности,<br/> плюсы и  минусы. </p>
          </div>
          <div className={styles.text2}>
          <div className={styles.som}>
          <strong >1000 сом</strong>   
          <button>В КОРЗИНУ</button>
          </div>
         
          </div>
          </div>
         
      </div>
      </>
)
}
export default Basket