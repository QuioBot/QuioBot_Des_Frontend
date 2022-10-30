
<template>
    <section class="road-map style-5" id="roadmap">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h6 class="sub-heading">{{subheading}}</h6>
                        <h3 class="heading">{{title}}</h3>
                        <p class="fs-20">{{desc}}</p>
                    </div>

                    <div class="road-map__main">
                        <div class="box-roadmap" :class="item.classAction" data-aos="fade-up" data-aos-duration="1000" v-for="item in dataRoadMap.slice(31,36)" :key="item.id">
                            <h3 class="title-box">{{item.title}}</h3>
                            <div class="icon"><div class="dot"></div></div>
                            <img :src="item.img" alt="Icoland" />
                                                        
                            <div class="content">
                                <h5 class="title">{{item.title2}}</h5>
                                <ul class="list">
                                    <li v-for="icon in item.list" :key="icon.id">
                                        <div class="dot"></div>
                                        <p class='fs-17'>{{icon.text}}</p>
                                    </li>
                                </ul>
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
            subheading: 'Road Map',
            desc: 'We’re slowly transforming the website into the best place for beginners to learn about cryptocurrencies.',
            title: 'What our Major goals',
        }    
    }
};
</script>
            
            