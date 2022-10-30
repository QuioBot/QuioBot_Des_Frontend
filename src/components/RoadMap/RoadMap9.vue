
<template>
    <section class='dashboard'>
        <div class="dashboard__content">
            <div class="dashboard__main">
                <section class="road-map style-8">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-12">
                                <div class="block-text">
                                    <h2 class="title">{{title}}</h2>
                                    <p class="fs-20">{{desc}}</p>
                                </div>
                                
                            </div>
                            <div class="col-xl-6 col-md-12">
                                <div class="group-img">
                                    <img src='~@/assets/images/item/nft-rm-01.png' alt="ICOLand" />
                                    <img src='~@/assets/images/item/nft-rm-02.png' alt="ICOLand" />
                                    <img src='~@/assets/images/item/nft-rm-03.png' alt="ICOLand" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="road-map__main">
                                    <carousel class="swiper-roadmap-7"
                                    :settings='settings' 
                                    :breakpoints='breakpoints'
                                >
                                    <Slide v-for="slide in dataRoadMap.slice(21,27)" :key="slide.id">
                                        <div class="box-roadmap"  :class="slide.classAction" data-aos="fade-up" data-aos-duration="1000">
                                            <p class="time">{{slide.time}}</p>
                                            <h5 class="title">{{slide.title}}</h5>
                                            <ul class="list">
                                                <li v-for="text in slide.list" :key="text.id">
                                                    <div class="dot"></div>
                                                    <p class='fs-17'>{{text.text}}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Slide>
                                </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
import "./styles.scss";

import { defineComponent } from 'vue';
import { Carousel, Slide,  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataRoadMap } from '../../fake-data/data-roadmap';


export default defineComponent ({
   name: "About3",
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        dataRoadMap,
        title : 'Roadmaps Launch Timeline',
        desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
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