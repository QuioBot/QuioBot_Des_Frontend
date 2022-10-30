
<template>
    <section class="about style-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="about__content">
                        <div class="row">
                            <div class="col-xl-5 col-md-12">
                                <div class="block-text">
                                    <h3 class="title">{{title}}</h3>
                                    <p class="fs-20 mt-12">{{desc}}</p>
                                </div>
                            </div>
                            <div class="col-xl-7 col-md-12">
                                <div class="tf-box">
                                    <div class="box-icon" v-for="item in dataAbout.slice(15,18)" :key="item.id">
                                        <span :class="item.classAction"></span>
                                        <p>{{item.content}}</p>
                                    </div>
                                </div>
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
            title: 'What is ICO?',
            desc : 'ICO Land is a generative NFT art collectible project of 10.000 unique, digitally hand-drawn avatars immortalized on the Ethereum blockchain.'
        }    
    },
};
</script>
            
            