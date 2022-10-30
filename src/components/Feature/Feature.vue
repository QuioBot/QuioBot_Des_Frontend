
<template>
    <section class="features style-2  mobie-pb0" id="features">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3 class="title">
                            {{title}}
                        </h3>
                        <p class="fs-17 mt-12">
                            {{subtitle}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col-xl-3 col-md-6" v-for="item in dataFeature.slice(0,4)" :key="item.id">
                    <div class="choose__box" data-aos="fade-up" data-aos-duration="800">
                        <div class="choose__box-icon center"  >
                            <div class="icon">
                                <span :class="item.classAction"></span>
                            </div>
                            <div class="content">
                                <h5 class="h5">{{item.title}}</h5>
                                <p class="mt-9">{{item.content}}</p>
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
import { dataFeature } from '../../fake-data/data-feature';

export default {
    name: "Feature",
     data (){
        return {
            dataFeature,
            title: 'Why Choose Our Token?',
            subtitle : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official',
        }    
    }
};
</script>
            
            