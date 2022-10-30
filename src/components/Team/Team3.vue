
<template>
    <section class="section-team style-6" id="team">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title}}</h2>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6" v-for="item in dataTeam.slice(11,15)" :key="item.id">
                    <div class="team-box-6">
                        <div class="team-box__image">
                        <router-link to="#"><img :src="item.img" alt="ICOLand" /></router-link>
                        </div>
                        <div class="team-box__content">
                            <router-link to="#"><span class="icon-twitter"></span></router-link>
                            <router-link to="#" class='h5 title'>{{item.title}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container s2">
            <div class="row">
                <div class="col-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title2}}</h2>
                    </div>
                    <carousel
                            :loop="true"
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataTeam.slice(42,51)" :key="slide.id">
                                <div class="team-box-6">
                                    <div class="team-box__image">
                                    <router-link to="#"><img :src="slide.img" alt="ICOLand" /></router-link>
                                    </div>
                                    <div class="team-box__content">
                                        <router-link to="#"><span class="icon-twitter"></span></router-link>
                                        <router-link to="#" class='h5 title'>{{slide.title}}</router-link>
                                        
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
import { dataTeam } from '../../fake-data/data-team';
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

export default defineComponent ({
    name: "Feature",
        components: {
        Carousel,
        Slide,
    },
    data: () => ({
        dataTeam,
        title: 'MEET OUR TEAM',
        title2: 'BOARD MEMBER',
        settings: {
            itemsToShow: 2,
            snapAlign: 'left',
        },
        breakpoints: {
            0: {
                itemsToShow: 2,
                snapAlign: 'left',
			},
            768: {
                itemsToShow: 4,
                snapAlign: 'left',
            },
            1024: {
                itemsToShow: 6,
                snapAlign: 'left',
            },
            1300: {
                itemsToShow: 8,
                snapAlign: 'left',
            },
        },
    }),
});
</script>
            
            