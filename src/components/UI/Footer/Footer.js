import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../../../styles/style_1.css"

export default function Footer() {
    return (
        <MDBFooter  bgColor='dark' className='text-center text-lg-start text-muted'>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5 p-4'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>




                        <MDBCol  md="4" lg="3" xl="3" className=''>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <a className={"Link"} href="https://www.google.com.ua/maps/dir//49.6744603,24.55936/@49.6743283,24.5574077,482m/data=!3m1!1e3!4m2!4m1!3e0" target="_blank"><LocationOnIcon /></a>
                                м. Перемишляни
                                <p >вул. Привокзальна 20</p>
                            </p>
                            <p>
                                <a className={'Link'} href="mailto:nazarkindrat@gmail.com" target="_blank"><EmailIcon/></a> nazarkindrat@gmail.com
                            </p>
                            <p>
                                <a className={"Link"} href={"tel:+380972693242"} target="_blank"><PhoneIcon/></a> (+380) 97 269 32 42
                            </p>
                            <p >
                                <a className={"Link"} href="tel:+380979604721" target="_blank"><PhoneIcon/></a> (+380) 97 960 47 21
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-reset p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                ©  2020 TIR-СТО Перемишляни. Всі права захищено.
            </div>
        </MDBFooter>
    );
}