
<template>
  <section class="topics mobie-pb0" id="topics">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="block-text">
                        <h2 class="heading">{{title}}</h2>
                        <p class="fs-20">{{desc}}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="button">
                        <router-link to="#">{{button}}</router-link>
                    </div>
                </div>

                <div class="col-md-6" data-aos="fade-up" data-aos-duration="1000" v-for="item in dataBlog.slice(10,14)" :key="item.id">
                    <div class="topics-box">
                        <div class="box-content">
                            <router-link to="/blog-v2" class="h3 title">{{item.title}}</router-link>
                            <p class="fs-17 text">{{item.content}}</p>

                            <router-link to="/blog-v2" class="readmore">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.8604 11.8601L41.0004 24.0001L28.8604 36.1401" stroke="#B4E116" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                <path d="M7 24H40.66" stroke="#B4E116" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                </svg>
                            </router-link>
                        </div>
                        <div class="box-image">
                            <img :src="item.img" alt="ICOLand" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataBlog } from '../../fake-data/data-blog';

export default {
    name: "Feature",
     data (){
        return {
            dataBlog,
            title: 'TOPICS',
            desc : 'Read, watch and absorb the secrets that we publish is our official blog.',
            button: 'Read All',
        }    
    }
};
</script>
            
            