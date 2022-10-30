
<template>
    <section class="banner-top style-3">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__content">
                        <h2 class="title">{{title}}<span>{{title2}}</span>{{title3}}</h2>
                        <p class="desc">{{desc}}</p>
                        <div class="button">
                            <a href="#" class="btn-action style-3"><span>BUY TOKEN</span></a>
                            <a class="btn-action-outline style-2" href="#">
                                <span>White paper</span>
                            </a>
                        </div>

                        <ul class="content-list">
                            <li v-for="item in dataBanner.slice(3,6)" :key="item.id">
                                <h5 class='number'>{{item.title}}</h5>
                                <p>{{item.desc}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__sale">
                        <img src='~@/assets/images/layout/img-music.jpg' alt="ICOLand" />
                        <div class="sale-content">
                            <h6>{{title4}}</h6>
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
            title : 'decentralised',
            title2 : 'music platform',
            title3 : 'built on Ethereum',
            title4 : 'Token sale End In!',
            desc : 'Discover songs, claim limited editions and support your favorite artists. Buy, sell or auction any audio file into a unique NFT with the power of blockchain.',
        }    
    }
};
</script>
            
            