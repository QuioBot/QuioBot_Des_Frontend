
<template>
    <section class="banner-top style-2 ">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__content">
                        <h2 class="title">{{title}} <span>{{title2}}</span>{{title3}} </h2>
                        <p class="desc">{{desc}}</p>
                        <div class="button">
                            <a class="btn-action style-2" href="/sign-in"><span class="effect">BUY TOKEN</span></a>
                        </div>

                        <ul class="content-list">
                        <li v-for="item in dataBanner.slice(0,3)" :key="item.id">
                            <h5 class='number'>{{item.title}}</h5>
                            <p>{{item.desc}}</p>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__sale">
                    <img src='../../assets/images/layout/banner01.png' alt="ICOLand" />
                        <div class="sale-content">
                            <h6>Token sale End In!</h6>

                            <Countdown 
                                starttime="Jul 1, 2022 15:37:25" 
                                endtime="Dec 8, 2022 16:37:25" >
                            </Countdown>
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
import { dataBanner } from '../../fake-data/databanner';


export default {
    name: "About",
     components: {
        Countdown,
    },
    data (){
        return {
            dataBanner,
            title : 'Mint, sell, and',
            title2 : 'trade NFTs',
            title3 : 'at scale.',
            desc: 'Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.',
        }    
    }
};
</script>
            
            