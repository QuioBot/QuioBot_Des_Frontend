
<template>
   <section class="about style-3" >
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="about__video">
                        <div class="wrap-video">
                        <img src='~@/assets/images/background/bg-video.jpg' alt="ICOLand" />
                        
                        <a   class="popup-youtube"  v-on:click="isPopupMethod(isPopup)" >
                            <span class="icon-play"></span>
                        </a>
                        </div>  
                    </div>
                    
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="about__content">
                        <h6 class="sub-title">{{subtitle}}</h6>
                        <h3 class="title">{{title}}</h3>
                        <p class="text">{{desc}}</p>
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
            title: 'What is ICOLAND?',
            desc : 'ICOLAND offers music artists the ability to connect with each other along with investors and digitally exchange NFTs for their creations within a sustainable and powerful tokenomics system running on the blockchain, giving access to a world of opportunities for those with a passion tied to the entertaining values of music and performance arts.'
        }    
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
};
</script>


            
            