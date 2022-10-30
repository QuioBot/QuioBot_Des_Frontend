
<template>
    <footer class="footer style-1">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-md-12">
                        <div class="content-left">
                            <h5 class="fs-22">{{title}}</h5>
                            <p>{{subtitle}}</p>

                            <form action="#" id="subscribe-form">
                                <input type="email" placeholder="Enter your email" required="" id="subscribe-email" />
                                <button class="btn-action style-2" type="submit" id="subscribe-button"> <span class="effect">SUBSCRIBE</span></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-12">
                        <div class="content-right">
                            <p>{{desc}}</p>
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
                    <div class="col-md-12">
                        <p>© 2022. All rights reserved by <router-link to="https://themeforest.net/user/themesflat/portfolio">{{author}}</router-link></p>
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
            
            title: "Don't miss out, Stay updated",
            subtitle : 'Don’t hesitate to subscribe to latest news about ICo',
            desc: 'Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally',
            author:'Themesflat'
        }    
    }
};
</script>
            
            