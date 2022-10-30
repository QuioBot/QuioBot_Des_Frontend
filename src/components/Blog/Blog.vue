
<template>
    <section class="blog" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h6 class="sub-heading">
                            {{subtitle}}
                        </h6>
                        <h3 class="heading">
                        {{title}}
                        </h3>
                    </div>
                </div>
                <div class="col-md-4" v-for="item in dataBlog.slice(0,3)" :key="item.id">
                    <div class="blog-box">
                        <div class="box-image">
                            <router-link to="blog-v3.html">
                                <img :src="item.img" alt="ICOLand" />
                            </router-link>
                        </div>
                        <div class="box-content">
                            <p class="meta">{{item.meta}}</p>
                            <router-link to="/blog-v3" class="h5 title">{{item.title}}</router-link>
                            <p class="text">{{item.text}}</p>
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
            title: 'Latest News',
            subtitle : 'Blog',
        }    
    }
};
</script>
            
            