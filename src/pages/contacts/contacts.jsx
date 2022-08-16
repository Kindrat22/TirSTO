import React from 'react'
import './contacts.css'
import locationIcon from '../../img/locationIcon.png'
import timeIcon from '../../img/timeIcon.png'
import contactIcon from '../../img/contactIcon.png'
import telegramIcon from '../../img/telegramIcon.png'
import viberIcon from '../../img/viberIcon.png'
import watsappIcon from '../../img/watsappIcon.png'
import mailIcon from '../img/mailIcon.png'
export default class Contacts extends React.Component{
    render(){
         
        return(
            <div className = "">
                <p className = "headerText mt-5"> Контакти:</p>
                <div className = "row contactInfo">
                    <div className = "row block">
                        <a href="https://www.google.com.ua/maps/dir//49.6744603,24.55936/@49.6743283,24.5574077,482m/data=!3m1!1e3!4m2!4m1!3e0">
                            <img src={locationIcon} width = "60" height = "60" className = "icons scale" alt=""/>
                            </a>
                        <div>
                            м. Перемишляни
                            <p>вул. Привокзальна 20</p> 
                        </div>
                    </div>

                    <div className = "row block ">
                        <img src={timeIcon} width = "60" height = "60" className = "icons " alt=""/>
                        <div>
                            ПН - ПН 8:00 до 20:00
                            <p>СБ - НД - вихідні</p> 
                        </div>
                    </div>

                    <div className = "row block ">
                        <a href="tel:+380979604721" alt = "Зателефонувати">
                            <img src={contactIcon} width = "60" height = "60" className = "icons phoneEffect" alt="Зателефонувати"/>
                            </a>
                        <div>
                        (+380) 97 960 47 21  
                            <p>
                                 (+380) 97 269 32 42
                            </p> 
                        </div>
                    </div>

                    
                </div>
                <div className = "row socialMedia">
                        <div className = "block socialMediaIcon mt-2"> 
                            <a href="https://t.me/rkindrat"><img src={telegramIcon} width = "55" height = "55" className = "icons scale" alt=""/></a> 
                        </div>
                        <div className = "block socialMediaIcon mt-2">
                            <a href="viber://chat?number=+380979604721"> <img src={viberIcon} width = "55" height = "55" className = "icons scale" alt=""/>   </a>
                        </div> 
                        <div className = "block socialMediaIcon mt-2">
                            <a href="https://wa.me/+3809674496602"> <img src={watsappIcon} width = "55" height = "55" className = "icons scale" alt=""/>  </a>
                        </div>
                        <div className = "block socialMediaIcon mt-2">
                            <a href="mailto:nazarkindrat@gmail.com"><img src={mailIcon} width = "55" height = "55" className = "icons scale" alt=""/> </a>
                        </div> 
                    </div>



            </div>
        )
    } 
}
