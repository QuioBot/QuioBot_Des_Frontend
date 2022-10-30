<template>
    <section class="partner style-3" id="partner">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">
                            {{title}}
                        </h2>
                        <p class="fs-20 mt-16">{{desc}}</p>
                    </div>

                    <div class="partner__main">
                        <carousel  class=" swiper swiper-partner-3"
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataParter.slice(6,15)" :key="slide.id">
                                <div class="image"><img :src="slide.img" alt="image"></div>                                
                            </Slide>

                        </carousel>
                        
                        <carousel  class="swiper swiper-partner-3"
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataParter.slice(12,21)" :key="slide.id">
                                <div class="image"><img :src="slide.img" alt="image"></div>                                
                            </Slide>

                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';
import "./styles.scss";
import { dataParter } from '../../fake-data/data-partner';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Parner',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        dataParter,
        title: 'Technologies',
        desc : '',
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            400: {
                itemsToShow: 2,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 8,
                snapAlign: 'center',
            },
        },
    }),
})
</script>