
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
                            <p class="fs-20">{{desc}}</p>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6" v-for="item in dataBlog.slice(6,10)" :key="item.id">
                    <div class="blog-box">
                        <div class="box-image">
                            <router-link to='/blog-v3'>
                                <img :src="item.img" alt="ICOLand" />
                            </router-link>
                        </div>
                        <div class="box-content">
                            <router-link to='/blog-v3' class="h6 title">{{item.title}}</router-link>
                            <p class="text">{{item.content}}</p>

                            <router-link to='/blog-v3' class="button">{{item.button}}</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="button-more center">
                        <a href="/blog-v3" class="btn-action-outline style-3"><span>View more</span></a>
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
            subtitle: 'Blog',
            title: 'The Lastes News',
            desc : 'Acurated directory of the best cryptocurrency resources. We’re slowly transforming the website into the best place for beginners to learn about cryptocurrencies. ',
        }    
    }
};
</script>
            
            