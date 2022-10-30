
<template>
    <section class="about style-4 style-8 bg-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block-text center">
                            <h3 class="title">
                                {{title}}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4" v-for="item in dataAbout.slice(9,15)" :key="item.id">
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
        }    
    },
};
</script>
            
            