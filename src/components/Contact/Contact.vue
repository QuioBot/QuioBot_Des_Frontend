
<template>
    <section class="contact" id="contact">
         <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="block-text">
                        <h3>{{title}}</h3>
                        <p class="mt-12">{{subtitle}}</p>
                    </div>
                    <ul class="contact__list">
                        <li v-for="item in dataContact.slice(0,4)" :key="item.id">
                            <div class="icon"><span :class="item.classAction"></span></div>
                            <h5 class="fs-20">{{item.content}}</h5>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="contact__form" >
                        <form action="#">
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone Number" />
                            <textarea id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>

                            <button type="submit" class="btn-action"><span>SUBMIT YOUR MESSAGE</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataContact } from '../../fake-data/data-contact';

export default {
    name: "Feature",
     data (){
        return {
            dataContact,
            title: 'Contact Us',
            subtitle : 'We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below.',
        }    
    }
};
</script>
            
            