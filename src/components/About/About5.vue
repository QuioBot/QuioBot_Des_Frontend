
<template>
    <section class="about style-4 mobie-pb0">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3 class="title">
                           {{title}}
                        </h3>
                        <p class="fs-17 mt-16">
                        {{desc}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="row" data-aos="fade-up" data-aos-duration="800">
            <div class="col-md-4" v-for="item in dataAbout.slice(3,6)" :key="item.id">
                <div class="choose__box">
                    <div class="choose__box-icon center">
                        <div class="icon">
                            <span :class="item.classAction"></span>
                        </div>
                        <div class="content">
                            <router-link to="#" class="h5">{{item.title}}</router-link>
                            <p class="fs-17 mt-5">{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>                      
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
            title: ' What is ICO Crypto-Currencies?',
            desc : 'The world first platform to reward investors and traders build on ICO.'
        }    
    },
};
</script>
            
            