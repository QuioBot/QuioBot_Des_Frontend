
<template>
    <section class="featured-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text">
                        <h3 class="heading">{{title}}</h3>
                    </div>
                    
                    <div class="featured-blog__main">
                        <carousel class="swiper swiper-blog style"
                                :settings='settings' 
                                :breakpoints='breakpoints'
                            >
                            <Slide v-for="slide in dataFeature.slice(26,32)" :key="slide.id">
                                <div class="image">
                                    <div class="featured-blog-box">
                                        <div class="image">
                                            <router-link to="#"><img :src="slide.img" alt="Image" /></router-link>
                                        </div>
                                        <div class="content">
                                            <router-link to="#" class="h6 title">{{slide.title}}</router-link>
                                            <p class="fs-17">{{slide.desc}}</p>
                                            </div>
                                    </div> 
                                </div>
                            </Slide>
                            <template #addons>
                                <navigation />
                            </template>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { dataFeature } from '../../fake-data/data-feature';

import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation,  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';


export default defineComponent ({
   name: "About3",
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        dataFeature,
        title: 'Featured News',
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})

</script>