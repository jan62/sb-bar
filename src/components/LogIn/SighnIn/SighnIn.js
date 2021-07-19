import React from 'react'




export default function SighnIn() {
    return (
        <div>
          
          <div>
          
              <div>
                  <p>Ваша электронная почта</p>
                  <input type="text" placeholder="Введите ваш адрес эл.почты" />
              </div>

              <div>
                  <p>Ваше имя</p>
                  <input type="text" placeholder="Введите ваше имя" />
              </div>

              <div>
                  <p>Ваша фамилия</p>
                  <input type="text" placeholder="Введите вашу фамилию" />
              </div>

              <div>
                  <p>Ваш телефон</p>
                  <input type="text" placeholder="Введите ваш телефон" />
              </div>

              <div>
                  <p>Ваш пароль</p>
                  <input type="text" placeholder="Введите ваш пароль" />
              </div>

              <div>
                  <p>Повторите ваш пароль</p>
                  <input type="text" placeholder="Введите ваш пароль повторно" />
              </div>
              <div>
                  <button>Регистрация</button>
              </div>
          </div>  
        
        </div>
    )
}
