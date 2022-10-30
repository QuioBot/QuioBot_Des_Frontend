
<template>
    <section class="features style-4 mobie-pb0" id="features">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3 class="heading">
                            {{title}}
                        </h3>
                        <p class="fs-17 mt-16">{{desc}}</p>
                    </div>
                </div>
            </div>
            <div class="row" >
                <div class="col-xl-3 col-md-6" v-for="item in dataFeature.slice(22,26)" :key="item.id">
                    <div class="features-box-4 center" data-aos="fade-up" data-aos-duration="800">
                        <div class="icon">
                            <span :class="item.classAction"></span>
                        </div>
                        <div class="features-box-content">
                            <router-link to="#" class="h5 title">{{item.title}}</router-link>
                            <p class="fs-17">{{item.desc}}</p>
                            <router-link to="#" class="action">{{item.action}}<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4297 5.92999L20.4997 12L14.4297 18.07" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataFeature } from '../../fake-data/data-feature';

export default {
    name: "Feature",
     data (){
        return {
            dataFeature,
            desc :'Our features',
            title: 'Why choose our Token?',
        }    
    }
};
</script>
            
            