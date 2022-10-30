
<template>
    <section class="creation mobie-pb0" id="creation">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center" data-aos="fade-up" data-aos-duration="1000">
                        <h3 class="title">{{title}}</h3>
                        <p class="desc">{{subtitle}}</p>
                    </div>
                    <div class="creation__main">
                        <div class="box-nft" v-for="item in dataCreation" :key="item.id" >
                            <span class="icon-union-01"></span>
                            <span class="icon-union-02"></span>
                            <span class="icon-union-03"></span>
                            <span class="icon-union-04"></span>
                            <div class="box-nft__main">
                                <router-link to="#"><img :src="item.img" alt="ICOLand" /></router-link>
                                <div class="content">
                                    <router-link to="#" class="h4 title">{{item.title}}</router-link>
                                </div>
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
import { dataCreation } from '../../fake-data/data-creation';


export default {
    name: "Feature",
     data (){
        return {
            dataCreation,
            title: 'Creation',
            subtitle : 'The most technologically advanced species will not stop any time soon...',
        }    
    }
};
</script>
            
            