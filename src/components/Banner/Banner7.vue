
<template>
    <section class="banner-top style-7">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__content">
                        <h2 class="title">{{title}}</h2>
                        <p class="desc">{{desc}}</p>
                        <div class="button">
                            <a class="btn-action-outline style-4 active icon" href="/home-defi-03"><span>Buy Token</span></a>
                            <a class="btn-action-outline style-4" href="/home-defi-03"><span>Watch Video</span></a>
                        </div>
                        <ul class="content-list">
                            <li v-for="item in dataBanner.slice(6,9)" :key="item.id">
                                <h5 class='number'>{{item.title}}</h5>
                                <p>{{item.desc}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__sale">
                        <img src='~@/assets/images/layout/banner-7.jpg' alt="ICOLand" />
                        <div class="sale-content">
                            <h6>{{title2}}</h6>
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
             title : 'UMA enables Anyone to build decentralized financial products.',
            desc : 'The ICOLand is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.',
            title2: 'Token sale End In!'
        }    
    }
};
</script>
            
            