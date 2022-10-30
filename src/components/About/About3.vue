
<template>
   <section class="about style-6">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-md-12">
                    <div class="block-text">
                        <h2 class="title">{{title}}</h2>
                        <p class="text fs-20">{{desc}}</p>
                        <a href="#" class="btn-action"><span>SEE LOYALTY PROGRAM</span></a>
                    </div>
                </div>
                <div class="col-xl-7 col-md-12">
                    <div class="about__content">
                        <carousel class="slider"
                            :dir='ltr'
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataAbout.slice(19,25)" :key="slide.id">
                                <img :src="slide.img" alt="ICOLand" />
                            </Slide>

                        </carousel>
                        <carousel class="slider"
                            :dir='ltr'
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataAbout.slice(21,25)" :key="slide.id">
                                <img :src="slide.img" alt="ICOLand" />
                            </Slide>

                        </carousel>
                        <carousel class="slider"
                            :dir='ltr'
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataAbout.slice(19,25)" :key="slide.id">
                                <img :src="slide.img" alt="ICOLand" />
                            </Slide>

                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "./styles.scss";

import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataAbout } from '../../fake-data/data-about';

export default defineComponent ({
   name: "About3",
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        dataAbout,
        title: 'WHY ADOPT AN APPROVING CORGI?',
        desc : 'Well, none of their negativity will keep you down! Because you have the only approval you need waiting for you back at your computer… your lovable, adorable Approving Corgi!',
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
                itemsToShow: 1,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
        },
    }),
})

</script>
            
            