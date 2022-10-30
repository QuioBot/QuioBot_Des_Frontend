
<template>
    <section class="blog mobie-pb0" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3 class="heading">
                            {{title}}
                        </h3>
                        <p class="fs-17">{{desc}}</p>
                    </div>
                </div>

                <div class="col-xl-4 col-md-12" data-aos="fade-up" data-aos-duration="1000" v-for="item in dataBlog.slice(3,6)" :key="item.id">
                    <div class="blog-box">
                        <div class="box-image">
                            <router-link to="blog-v1.html">
                                <img :src="item.img" alt="ICOLand" />
                            </router-link>
                        </div>
                        <div class="box-content">
                            <router-link to="#" class="category">{{item.category}}</router-link>
                            <router-link to='/blogdetail' class="h5 title">{{item.title}}</router-link>
                            <p class="text">{{item.content}}</p>
                            <div class="meta">
                                <div class="avt">
                                    <router-link to="#"><img :src="item.avt" alt="ICOLand" /></router-link>
                                </div>
                                <div class="right">
                                    <router-link to="#" class="h6 name">{{item.name}}</router-link>
                                    <ul class="list">
                                        <li v-for="icon in item.list" :key="icon.id">
                                            <router-link :to="icon.link">{{icon.text}}</router-link>
                                        </li>
                                    </ul>
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
import { dataBlog } from '../../fake-data/data-blog';

export default {
    name: "Feature",
     data (){
        return {
            dataBlog,
            title: 'Latest Blog Posts',
            desc : 'Read, watch and absorb the secrets that we publish is our official blog.',
        }    
    }
};
</script>
            
            