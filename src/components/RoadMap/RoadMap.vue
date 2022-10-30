
<template>
    <section class="road-map style-2" id="roadmap">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3>{{title}}</h3>
                        <p class="mt-12 pd28">{{subtitle}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="roadmap__main" data-aos="fade-up" data-aos-duration="800"  >
                        <div class="box-roadmap" :class="item.classAction" v-for="item in dataRoadMap.slice(0,7)" :key="item.id">
                            <div class="title"><h5 class="fs-24">{{item.title1}}<span>{{item.title2}}</span></h5></div>
                            <div class="content">
                                <h5>{{item.title}}</h5>
                                <ul class="list">
                                    <li :class="item.classAction2"><span :class="item.classIcon1"></span><p>{{item.list1}}</p></li>
                                    <li :class="item.classAction3"><span :class="item.classIcon2"></span><p>{{item.list2}}</p></li>
                                    <li :class="item.classAction4"><span :class="item.classIcon3"></span><p>{{item.list3}}</p></li>
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
            title: 'Roadmap',
            subtitle : 'The use of cryptocurrencies has become more widespread, The origin platform idea. Development of the concept and business plan.',
        }    
    }
};
</script>
            
            