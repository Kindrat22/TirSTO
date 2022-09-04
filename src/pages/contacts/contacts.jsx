import React, {Component} from 'react'
import locationIcon from './locationIcon.png'
import timeIcon from './timeIcon.png'
import contactIcon from './contactIcon.png'
import telegram from '../../imgs/Icons/telegramIcon.png'
import viberIcon from '../../imgs/Icons/viberIcon.png'
import WhatsAppIcon from '../../imgs/Icons/watsappIcon.png'
import mailIcon from '../../imgs/Icons/mailIcon.png'
import '../PagesStyles.css'
import './contacts.css'



class Contacts extends Component{
    render(){

        return(
            <div id = 'contacts'>
                <p className = "headerText mt-5"> Контакти:</p>
            <div>
                <div className = "contactInfo">
                    <div className = "block">

                        <a  href="https://www.google.com.ua/maps/dir//49.6744603,24.55936/@49.6743283,24.5574077,482m/data=!3m1!1e3!4m2!4m1!3e0">
                            <img src={locationIcon} width = "60" height = "60" className = "icons scale" alt=""/>
                        </a>
                        <div>
                            м. Перемишляни
                            <p>вул. Привокзальна 20</p>
                        </div>
                    </div>

                    <div className = "block ">
                        <a>
                        <img src={timeIcon} width = "60" height = "60" className = "icons scale " alt=""/>
                        </a>
                        <div>
                            ПН - ПН 8:00 до 20:00
                            <p>СБ - НД - вихідні</p>
                        </div>
                    </div>

                    <div className = "block">
                        <a href="tel:+380979604721" >
                            <img src={contactIcon} width = "60" height = "60" className = "icons phoneEffect " alt="Зателефонувати"/>
                        </a>
                        <div>
                            (+380) 97 960 47 21
                            <p>
                                (+380) 97 269 32 42
                            </p>
                        </div>
                    </div>
                </div >
            </div>
                <div>
                <div className = "socialMedia" >
                    <div className = "socialblock socialMediaIcon mt-2">
                        <a href="https://t.me/rkindrat"><img src={telegram} width = "55" height = "55" className = "icons scale" alt=""/></a>
                    </div>
                    <div className = "socialblock socialMediaIcon mt-2">
                        <a href="viber://chat?number=+380979604721"> <img src={viberIcon} width = "55" height = "55" className = "icons scale" alt=""/>   </a>
                    </div>
                    <div className = "socialblock socialMediaIcon mt-2">
                        <a href="https://wa.me/+3809674496602"> <img src={WhatsAppIcon} width = "55" height = "55" className = "icons scale" alt=""/>  </a>
                    </div>
                    <div className = "socialblock socialMediaIcon mt-2">
                        <a href="mailto:nazarkindrat@gmail.com"><img src={mailIcon} width = "55" height = "55" className = "icons scale" alt=""/> </a>
                    </div>
                </div>
                </div>


            </div>
        )
    }
}
export default Contacts;