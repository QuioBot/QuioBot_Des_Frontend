<template>
    <section class="section-partner style-2" id="partner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <carousel 
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataParter" :key="slide.id">
                                <div class="image"><img :src="slide.img" alt="image"></div>                                
                            </Slide>

                        </carousel>
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
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
        },
    }),
})
</script>