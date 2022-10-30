
<template>
    <div class="features style-6" id="features">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-md-12">
                    <div class="block-text">
                        <h2 class="heading">
                        {{title}}
                        </h2>
                    </div>
                    <div class="features__content">
                        <div class="features-box-6" v-for="item in dataFeature.slice(4,10)" :key="item.id">
                            <div class="icon">
                            <span :class="item.classAction"></span>
                            </div>
                            <div class="content">
                                <router-link to="#" class="h5 title">{{item.title}}</router-link>
                                <p class="fs-14">{{item.desc1}} </p>
                                <p class="fs-14 mt-10">{{item.desc2}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-md-12">
                    <div class="features__image">
                        <img src='~@/assets/images/layout/item-03.png' alt="ICOLand" />
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            
            