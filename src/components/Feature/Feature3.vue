
<template>
    <section class="features style-3 mobie-pb0" id="features">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h6 class="sub-heading">{{subtitle}}</h6>
                        <h3 class="heading">
                        {{title}}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">
                 <div class="col-xl-3 col-md-6" v-for="item in dataFeature.slice(10,14)" :key="item.id">
                    <div class="features-box-3 center">
                        <div class="icon">
                        <span :class="item.classAction"></span>
                        </div>
                        <div class="features-box-content">
                            <router-link to="#" class="h5 title">{{item.title}}</router-link>
                            <p class="fs-17">{{item.desc}}</p>
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
            subtitle :'Our features',
            title: 'How Can I Benefit?',
        }    
    }
};
</script>
            
            