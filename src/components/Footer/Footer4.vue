
<template>
    <footer class="footer style-3">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="content-left">
                            <h6>{{subtitle}}</h6>
                            <h3 class="fs-22">{{title}}</h3>
                            <p class="fs-20">{{desc}}</p>
                            <ul class="list-social">
                                <li><router-link to="#"><span class="icon-twitter"></span></router-link></li>
                                <li><router-link to="#"><span class="icon-facebook"></span></router-link></li>
                                <li><router-link to="#"><span class="icon-place"></span></router-link></li>
                                <li><router-link to="#"><span class="icon-youtobe"></span></router-link></li>
                                <li><router-link to="#"><span class="icon-tiktok"></span></router-link></li>
                                <li><router-link to="#"><span class="icon-reddit"></span></router-link></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="content-right">
                            <form>
                                <div class="form row">
                                    <div class="form-group col-md-6">
                                        <label >Your Name</label>
                                        <input type="text" class="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label >Your Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail4"  placeholder="Enter your email" />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <label >Your Message</label>
                                        <textarea placeholder="Messages"></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="btn-action style-3"><span>Send message</span></button>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src='~@/assets/images/logo/logo02.png' alt="ICOLand" />
                    </div>
                    <div class="col-md-6">
                        <p>Themesflat 2022- ALL rights reserved</p>
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
            subtitle:'Contact',
            title: "Get in touch",
            desc: 'We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly ',
            author:'Themesflat'
        }    
    }
};
</script>
            
            