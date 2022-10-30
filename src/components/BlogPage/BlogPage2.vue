
<template>
    <section class="blog-page-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="blog-page__main">
                        <div class="main-content">
                            <div class="blog-box" v-for="item in dataBlog.slice(24,28)" :key="item.id">
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
                            <ul class="pagination">
                                <li><router-link to="#">1</router-link></li>
                                <li class="active"><router-link to="#">2</router-link></li>
                                <li><router-link to="#">3</router-link></li>
                                <li><router-link to="#"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33203 7H14.6654" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.83203 1.16699L14.6654 7.00033L8.83203 12.8337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg></router-link></li>
                            </ul>
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { dataBlog } from '../../fake-data/data-blog';

export default {
    name: "Feature",
     data (){
        return {
            dataBlog,
        }    
    },
};
</script>
            
            