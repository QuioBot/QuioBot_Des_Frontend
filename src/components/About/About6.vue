
<template>
    <section class="about style-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-md-12">
                    <div class="about__video">
                        <div class="wrap-video">
                        <img src='~@/assets/images/background/ab-video.jpg' alt="ICOLand" />
                        <a   class="popup-youtube"  v-on:click="isPopupMethod(isPopup)" >
                            <span class="icon-play"></span>
                        </a>
                        </div>  
                    </div>
                </div>
                <div class="col-xl-7 col-md-12">
                    <div class="about__content">
                        <div class="block-text">
                            <h6 class="sub-title">{{subtitle}}</h6>
                            <h3 class="title">{{title}}</h3>
                        </div>
                        <div class="list-icon-box" data-aos="fade-up" data-aos-duration="1000">
                            <div class="icon-box" v-for="item in dataAbout.slice(6,9)" :key="item.id">
                                <div class="icon"><img :src="item.img" alt="Icoland" /></div>
                                <div class="content">
                                    <h5>{{item.title}}</h5>
                                    <p class="fs-20">{{item.content}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup-video" v-if="isPopup">
            <div class="popup-overlay" v-on:click="isPopupMethod(isPopup)"></div>
            <div class="play-video">
                <div class="popup-overlay-close" v-on:click="isPopupMethod(isPopup)" >
                    <i class="fal fa-times"></i>
                </div>
                <iframe src="https://www.youtube.com/embed/i7EMACWuErA" title="NFT Collection | NFT Collection 2022 | Bebeez NFT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";

import { dataAbout } from '../../fake-data/data-about';

export default {
    name: "About",
     data (){
        return {
            dataAbout,
            isPopup: false,
            subtitle: 'About us',
            title: 'Why choose ICOLand?',
        }    
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
};
</script>
            
            