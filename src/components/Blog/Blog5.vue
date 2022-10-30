
<template>
    <section class="blog" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="block-text">
                        <h3 class="heading">{{title}}</h3>
                        <p class="fs-17">{{subtitle}}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="button">
                        <router-link to="/blog-v3">{{button}}</router-link>
                    </div>
                </div>

                <div class="col-xl-4 col-md-12" data-aos="fade-up" data-aos-duration="1000" v-for="item in dataBlog.slice(14,17)" :key="item.id">
                    <div class="blog-box">
                        <div class="box-image">
                            <router-link to="/blog-v3">
                                <img :src="item.img" alt="ICOLand" />
                            </router-link>
                        </div>
                        <div class="box-content">
                            <router-link to="/blog-v3" class="category">{{item.category}}</router-link>
                            <router-link to="/blog-v3" class="h5 title">{{item.title}}</router-link>
                            <p class="text">{{item.content}}</p>

                            <div class="meta">
                                <div class="avt">
                                    <router-link to="/blog-v3">
                                        <img :src="item.avt" alt="ICOLand" />
                                    </router-link>
                                </div>
                                <div class="right">
                                    <router-link to="/blog-v3" class="h6 name">{{item.name}}</router-link>
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
    name: "Blog5",
     data (){
        return {
            dataBlog,
            title: 'Latest blog posts',
            subtitle : 'Read, watch and absorb the secrets that we publish is our official blog.',
            button: 'Read More',
        }    
    }
};
</script>
            
            