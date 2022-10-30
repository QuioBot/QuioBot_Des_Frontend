
<template>
    <section class="banner-top style-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__content">
                        <h6 class="sub-title">{{subtitle}}</h6>
                        <h2 class="title">{{title}}</h2>
                        <p class="desc">{{desc}}</p>
                        <div class="button">
                            <a class="btn-action style-5" href="#">
                                <span>Buy Tokens now</span>
                            </a>
                            <a class="btn-action-outline style-3" href="#">
                                <span>White paper</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__image">
                        <img src='~@/assets/images/layout/banner-5.png' alt="ICOLand" />
                    </div>
                </div>
            </div>
        </div>
    </section>
            
</template>

<script>

import "./styles.scss";
import { dataBanner } from '../../fake-data/databanner';

export default {
    name: "About",
    data (){
        return {
            dataBanner,
            subtitle : 'Smart and secure way to invest in crypto',
            title : 'Faster, Cheaper and more Powerful DeFi',
            desc : 'Bringing the speed and convenience of centralized exchanges to DeFi while remaining fully trustless and transparent',
        }    
    }
};
</script>
            
            