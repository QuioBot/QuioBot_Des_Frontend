
<template>

    <section class="section-team style-2 mobie-pb0" id="team">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-md-12">
                    <div class="block-text">
                        <h6 class="sub-title fs-18">{{subtitle}}</h6>
                        <h3 class="title">{{title}}</h3>
                        <p class="fs-20">
                            {{desc}}
                        </p>
                    </div>
                </div>
                <div class="col-xl-7 col-md-12">
                    <carousel class="slider"
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataTeam.slice(21,27)" :key="slide.id">
                                <div class="team-box">
                                    <div class="team-box__image">
                                        <img :src="slide.img" alt="ICOLand" />
                                        <ul class="list-social">
                                            <li v-for="icon in slide.listsocial" :key="icon.id">
                                                <router-link :to="icon.link"><i :class="icon.icon"></i></router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="team-box__content">
                                        <router-link to="#" class="h5 name fs-24">{{slide.name}}</router-link>
                                        <p class="position fs-17">{{slide.position}}</p>
                                    </div>
                                </div>       
                            </Slide>
                        </carousel>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
import "./styles.scss";

import { defineComponent } from 'vue';
import { Carousel, Slide,  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataTeam } from '../../fake-data/data-team';

export default defineComponent ({
   name: "About3",
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        dataTeam,
        subtitle: 'Our Team',
        title: 'Meet our members',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
            
            