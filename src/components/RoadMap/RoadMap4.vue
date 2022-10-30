
<template>
    <section class="road-map style-4 mobie-pb0" id="roadmap">
            <img class="s1" src='~@/assets/images/layout/rm-1.png' alt="ICOLand" />
            <img class="s2" src='~@/assets/images/layout/rm-2.png' alt="ICOLand" />
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block-text center">
                            <h3 class="heading">{{title}}</h3>
                            <p class="mt-16 fs-17">{{desc}}</p>
                        </div>

                        <div class="road-map__main" >
                            <div class="box-roadmap" :class="item.classAction" data-aos="fade-up" data-aos-duration="1000" v-for="item in dataRoadMap.slice(15,21)" :key="item.id">
                            <p class="time">{{item.time}}</p>
                            <h5 class="title">{{item.title}}</h5>
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
            desc: 'The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate for transactions.',
            title: 'Road map',
        }    
    }
};
</script>
            
            