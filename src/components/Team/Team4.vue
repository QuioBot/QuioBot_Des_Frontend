
<template>
     <section class="section-team style-3 mobie-pb0" id="team">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block-text center">
                            <h3 class="title">{{title}}</h3>
                            <p class="mt-16 fs-17 pd28">{{desc}}</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-17" >
                    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="800" v-for="item in dataTeam.slice(24,28)" :key="item.id">
                        <div class="team-box-s3">
                            <div class="team-box__image">
                                <router-link to="#"><img :src="item.img" alt="ICOLand" /></router-link>
                            </div>
                            <div class="team-box__info">
                                <router-link to="#" class="name h5">{{item.name}}</router-link>
                                <p class="position fs-17">{{item.position}}</p>
                                <ul class="list-social">
                                    <li  v-for="icon in item.listsocial" :key="icon.id">
                                        <router-link :to="icon.link"><span :class="icon.icon"></span></router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
</template>

<script>

import "./styles.scss";
import { dataTeam } from '../../fake-data/data-team';

export default {
    name: "Feature",
     data (){
        return {
            dataTeam,
            title: 'Our team',
            desc: 'With help from our teams, contributors and investors these are the milestones we are looking forward to achieve.',
        }    
    }
};
</script>
            
            