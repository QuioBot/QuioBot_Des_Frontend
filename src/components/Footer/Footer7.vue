
<template>
    <footer class="footer style-7">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-md-12">
                        <div class="content-left">
                            <h5 >{{title}}</h5>
                            <p class="fs-17">{{desc}}</p>

                            <form action="#" id="subscribe-form">
                                <h6>{{title2}}</h6>
                                <input type="email" placeholder="Enter your email address" required="" id="subscribe-email" />
                                <button class="btn-action style-5" type="submit" id="subscribe-button"> <span>SIGN UP</span></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <div class="content-right">
                            <h5>Contact</h5>
                            <ul class="list-info">
                                <li> <span class="icon-internet"></span>Company.com</li>
                                <li> <span class="icon-message"></span>Info.yourcompany@gmail.com</li>
                                <li><span class="icon-Calling"></span>+345 54689435</li>
                            </ul>
                            <ul class="list-social">
                                <li><span class="icon-twitter"></span></li>
                                <li><span class="icon-facebook"></span></li>
                                <li><span class="icon-place"></span></li>
                                <li><span class="icon-youtobe"></span></li>
                                <li><span class="icon-tiktok"></span></li>
                                <li><span class="icon-reddit"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src='~@/assets/images/logo/logo04.png' alt="ICOLand" />
                    </div>
                    <div class="col-md-6">
                        <p>{{copyright}}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
</template>

<script>

import "./styles.scss";

export default {
    name: "Feature",
     data (){
        return {
             title: 'Newsletter',
            desc: 'We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly ',
            copyright : 'icoland 2022- ALL rights reserved',
            title2: 'Email Address',
        }    
    }
};
</script>
            
            