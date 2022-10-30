
<template>
    <section class="banner-top style-6">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title}}</h2>
                        <h5 class="sub-heading">{{subtitle}}</h5>
                    </div>
                
                    <div class="banner-top__sale">
                        <Countdown 
                            starttime="Jul 1, 2022 15:37:25" 
                            endtime="Dec 8, 2022 16:37:25" >
                        </Countdown>

                        <div class="token-bar">
                                <div class="top">
                                    <h6>Raised - <span>{{token_bar1}}</span></h6>
                                    <h6>Target - <span>{{token_bar2}}</span></h6>
                                </div>
                                <div class="main">
                                    <div class="progress-token">
                                        <p class="fs-14">60,490</p>
                                    </div>
                                </div>

                                <div class="bottom">
                                    <p class="fs-14">Soft cap</p>
                                    <p class="fs-14">Crowdsale</p>
                                    <p class="fs-14">Hard cap</p>
                                </div>
                        </div>

                        <ul class="list-coin">
                                <li><span class="icon-bitcoin"></span></li>
                                <li><span class="icon-coinp"></span></li>
                                <li><span class="icon-coinp"></span></li>
                                <li><span class="icon-kyber-network"></span></li>
                         </ul>                 
                    </div>
                    <div class="banner-top__main center">
                        <img src='~@/assets/images/layout/banner-nft.png' alt="ICOLand" />

                        <div class="buy-token-box">
                            <h2 class="heading">
                                {{title2}}
                            </h2>
                            <p class="fs-20">{{subtitle2}}</p>
                            <a href="#" class="btn-action style-6"><span>BUY TOKEN NOW</span></a>
                            <carousel
                                :autoplay="5000"
                                :wrap-around="true"
                                :settings='settings' 
                                :breakpoints='breakpoints'
                            >
                                <Slide v-for="slide in dataBanner" :key="slide.id">
                                    <img :src="slide.img" alt="ICOLand" />
                                </Slide>

                            </carousel>

                            <h3 class="title">{{title3}}</h3>
                            <p class="fs-20">{{subtitle3}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Countdown from '../Layouts/Countdown.vue';
import "./styles.scss";
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataBanner } from '../../fake-data/databannerswiper';

export default defineComponent({
    name: "Banner3",
     components: {
        Countdown,
        Carousel,
        Slide,
    },
    data (){
        return {
            dataBanner,
            title : 'WE ARE APPROVING CORGIS',
            title2 : 'WHAT IS  APPROVING CORGIS?',
            subtitle : 'The only approval that matters',
            subtitle2 : 'Approving Corgis is a collection of 9,999 adorable corgis living on the Ethereum blockchain',
            title3 : 'CORGIS SPOTLIGHT',
            subtitle3 : 'Literally no two Corgis are alike. With a wide array of fur colors, facial features, outfits, headwear, accessories',
            token_bar1:'1,450 Tokens',
            token_bar2:'150,000 Tokens',
            settings: {
            itemsToShow: 2,
            snapAlign: 'left',
            breakpoints: {
                0: {
                    itemsToShow: 2,
                    snapAlign: 'left',
                },
                768: {
                    itemsToShow: 4,
                    snapAlign: 'left',
                },
                1024: {
                    itemsToShow: 6,
                    snapAlign: 'left',
                },
                1200: {
                    itemsToShow: 6,
                    snapAlign: 'left',
                },
            },
        },
        }    
    }
});
</script>
            
            