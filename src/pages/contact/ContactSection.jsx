import React from 'react'
import { ContactCards, ContactFormContainer, ContactSect, ContactTitle } from './contactStyled'

import { TfiInfo } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiCheck } from "react-icons/tfi";

export const ContactSection = () => {
    return (
        <>

            <ContactSect>
                <ContactTitle>
                    <h2>¡Realizá tu pedido personalizado!</h2>
                </ContactTitle>
                <ContactCards className='vibe'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <TfiInfo className='card-icon' />
                                <p class="card-title-front"></p>
                                <p class="card-info-front">Ver más</p>
                            </div>
                            <div class="flip-card-back">
                                <p class="card-title">BACK</p>
                                <p class="card-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nulla velit suscipit numquam eius molestias expedita impedit aspernatur ipsam enim iusto minus eos perferendis cumque assumenda officia itaque, eveniet maiores.</p>
                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <TfiLocationPin className='card-icon' />
                                <p class="card-title-front"></p>
                                <p class="card-info-front">Ver más</p>
                            </div>
                            <div class="flip-card-back">
                                <p class="card-title">BACK</p>
                                <p class="card-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nulla velit suscipit numquam eius molestias expedita impedit aspernatur ipsam enim iusto minus eos perferendis cumque assumenda officia itaque, eveniet maiores.</p>
                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <TfiCheck className='card-icon' />
                                <p class="card-title-front"></p>
                                <p class="card-info-front">Ver más</p>
                            </div>
                            <div class="flip-card-back">
                                <p class="card-title">BACK</p>
                                <p class="card-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nulla velit suscipit numquam eius molestias expedita impedit aspernatur ipsam enim iusto minus eos perferendis cumque assumenda officia itaque, eveniet maiores.</p>
                            </div>
                        </div>
                    </div>
                </ContactCards>

                <ContactFormContainer>
                    <div class="form-container">
                        <form class="form">
                            <div class="form-group">
                                <label for="name">Nombre Completo</label>
                                <input name="name" id="name" type="text" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input name="email" id="email" type="text" />
                            </div>
                            <div class="form-group">
                                <label for="cellphone">Teléfono</label>
                                <input name="cellphone" id="cellphone" type="text" />
                            </div>
                            <div class="form-group">
                                <label for="textarea">Especifica Tu Pedido</label>
                                <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
                            </div>
                            <button type="submit" class="form-submit-btn">Enviar</button>
                        </form>
                    </div>    
                </ContactFormContainer>

            </ContactSect>

        </>
    )
}
