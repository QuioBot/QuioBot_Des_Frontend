
<template>
    <section class="section-team style-7" id="team">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3 class="heading">{{title}}</h3>
                        <p class="mt-16 fs-17 pd25">{{desc}}</p>
                    </div>
                </div>
            </div>
            <div class="row mt-29">
                <div class="col-12">
                        <carousel class="slider"
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataTeam.slice(28,33)" :key="slide.id">
                                <div class="team-box-7">
                                    <div class="team-box__image">
                                        <router-link to="#"><img :src="slide.img" alt="ICOLand"/></router-link>
                                    </div>
                                    <div class="team-box__info">
                                        <router-link to="#" class="name h5">{{slide.name}}</router-link>
                                        <p class="position fs-17">{{slide.position}}</p>
                                        <ul class="list-social">
                                            <li v-for="icon in slide.listsocial" :key="icon.id">
                                                <router-link :to="icon.link"><span class="icon.icon"></span></router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>         
                            </Slide>
                             <template #addons>
                                <pagination />
                            </template>
                        </carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "./styles.scss";

import { defineComponent } from 'vue';
import { Carousel, Slide,Pagination,  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataTeam } from '../../fake-data/data-team';

export default defineComponent ({
   name: "About3",
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        dataTeam,
        title: 'Our team',
        desc: 'With help from our teams, contributors and investors these are the milestones we are looking forward to achieve.',
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
                itemsToShow: 4,
                snapAlign: 'center',
            },
        },
    }),
})

</script>
            
            