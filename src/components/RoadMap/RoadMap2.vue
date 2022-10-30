
<template>
    <section class="road-map style-1" id="roadmap">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text" data-aos="fade-up" data-aos-duration="1000">
                        <h3 class="heading">{{title}}</h3>
                        <p>{{subtitle}}</p>
                    </div>

                    <div class="road-map__content">
                        <div class="box-roadmap" :class="item.classAction" v-for="item in dataRoadMap.slice(7,11)" :key="item.id">
                            <div class="box-roadmap__top">
                                <h6><span>{{item.title}}</span>{{item.title2}}</h6>
                                    <div class="shape" :class="item.classAction2"></div>
                            </div>
                            <div class="box-roadmap__main">
                                <div class="text"><p>{{item.desc}}</p></div>
                                <img :src="item.img" alt="ICOLand" data-aos="fade-down" data-aos-duration="1000"/>
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
import { dataRoadMap } from '../../fake-data/data-roadmap';

export default {
    name: "RoadMap",
     data (){
        return {
            dataRoadMap,
            title: 'Roadmap',
            subtitle : 'The most technologically advanced species will not stop any time soon...',
        }    
    }
};
</script>
            
            