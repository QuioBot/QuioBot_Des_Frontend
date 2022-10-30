
<template>
    <section class="features style-7" id="features">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">
                            {{title}}
                        </h2>
                        <p class="fs-20 mt-16"> {{desc}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="800" v-for="item in dataFeature.slice(18,22)" :key="item.id">
                    <div class="features-box-7">
                        <div class="box-image">
                            <img :src="item.img" alt="ICOLand" />
                        </div>
                        <div class="box-content">
                            <router-link to="#" class="h5 title">{{item.title}}</router-link>
                            <p class="text fs-17">{{item.desc}}</p>
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
            subtitle :'Features',
            title: 'OUR KEY FEATURE',
            desc: 'The ICOLand Network solves this problem by offering a suite of integrated solutions.',
        }    
    }
};
</script>
            
            