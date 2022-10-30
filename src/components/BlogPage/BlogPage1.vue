
<template>
    <section class="blog-page">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="blog-page__main">
                        <div class="main-content">
                            <div class="blog-box" v-for="item in dataBlog.slice(17,24)" :key="item.id">
                                <div class="image">
                                    <img :src="item.img" alt="ICOLand" />
                                </div>
                                <div class="content">
                                    <ul class="meta">
                                        <li class="category"><router-link to="#">{{item.category}}</router-link></li>
                                        <li class="time"><router-link to="#">{{item.time}}</router-link></li>
                                    </ul>
                                    <router-link to="#" class="title">{{item.title}}</router-link>
                                    <p class="text">{{item.text}}</p>
                                </div>
                            </div>
                            <div class="button-loadmore">
                                <router-link to="#" class="btn-action-outli style-9"><span>Load More</span></router-link>
                            </div>
                        </div>
                        <Sidebar />    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { dataBlog } from '../../fake-data/data-blog';
import Sidebar from './SideBar1'


export default {
    name: "Feature",
     data (){
        return {
            dataBlog,
        }    
    },
      components: {
        Sidebar,
    }
};
</script>
            
            