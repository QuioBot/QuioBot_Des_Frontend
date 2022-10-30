
<template>
    <footer class="footer style-2">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content">
                            <h3 class="">{{title}}</h3>
                            <form action="#" id="subscribe-form1">
                                <input type="email" placeholder="Enter your email" required="" id="subscribe-email2" />
                                <button class="btn-action s2" type="submit" id="subscribe-button1"> <span class="effect">SUBSCRIBE</span></button>
                            </form>
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
                    <div class="col-md-5">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom center">
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
            desc: 'Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally',
            author:'Themesflat'
        }    
    }
};
</script>
            
            