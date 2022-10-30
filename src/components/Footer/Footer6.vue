
<template>
    <footer class="footer style-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-6">
                    <div class="info">
                        <img src='~@/assets/images/logo/logo-05.png' alt="ICOLand" />
                        <p class="fs-20">
                            {{copyright}}
                        </p>
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
                <div class="col-xl-2 col-md-6" v-for="item in dataFooter" :key="item.id">
                    <div class="footer-link" :class="item.classAction">
                        <h5 class="title">{{item.title}}</h5>
                        <ul class="list-link">
                            <li v-for="icon in item.listlink" :key="icon.id">
                                <router-link :to="icon.link">{{icon.text}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       
    </footer>
</template>

<script>

import { dataFooter } from '../../fake-data/data-footer';
import "./styles.scss";

export default {
    name: "Feature",
     data (){
        return {
            dataFooter,
            title: 'Contact Us',
            copyright : 'Copyright 2022 ICOLAND @ All right reserved',
        }    
    }
};
</script>
            
            