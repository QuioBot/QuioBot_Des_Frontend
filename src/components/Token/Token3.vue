
<template>
     <section class="token-details style-2" id="sales">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h6 class="sub-heading">{{subtitle}}</h6>
                        <h3 class="heading">{{title}}</h3>
                        <p class="text">
                           {{desc}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                    <div class="banner-top__sale">
                        <div class="sale-content">
                            <h5>{{titletoken1}}</h5>
                            <Countdown 
                                starttime="Jul 1, 2022 15:37:25" 
                                endtime="Dec 8, 2022 16:37:25" >
                            </Countdown>

                            <div class="token-bar">
                                <div class="top">
                                    <h6>Soft cap</h6>
                                    <h6>Hard cap</h6>
                                   
                                </div>
                                <div class="main">
                                    <div class="animated-progress progress-blue">
                                        <span data-progress="35"></span>
                                      </div>
                                </div>

                                <div class="bottom">
                                    <h6><span>1,450</span>Raised</h6>
                                    <h6><span>1,450</span>Target</h6>
                                </div>

                                <div class="button">
                                    <a href="#" class="btn-action"><span>Buy Tokens Now</span></a>
                                </div>
                            </div>

                            <div class="sale-bottom">
                                <ul class="list-coin">
                                    <li><span class="icon-bitcoin"></span></li>
                                    <li><span class="icon-coinp"></span></li>
                                    <li><span class="icon-coinp"></span></li>
                                    <li><span class="icon-kyber-network"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                    <div class="sale-info">
                        <h5 class="heading">{{titletoken2}}</h5>
                        <div class="info-box"  v-for="item in dataTokendetails.slice(6,12)" :key="item.id">
                            <h5 class="title">{{item.title}}</h5>
                            <p class="fs-17">{{item.desc}}</p>
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
import { dataTokendetails } from '../../fake-data/data-tokendeials';


export default {
    name: "Feature",
    components: {
        Countdown,
    },
     data (){
        return {
            dataTokendetails,
            title: 'Pre-Sale & Sale Information',
            subtitle : 'Token Sale',
            desc:'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
            titletoken1: 'Token Sale Stage End In',
            titletoken2: 'Sale Information',
        }    
    }
};
</script>
            
            