
<template>
    <section class="section-team style-1" id="team">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3>{{title}}</h3>
                        <p class="mt-12">{{subtitle}}</p>
                    </div>
                </div>
            </div>
            <div class="row mt-24">
                <div class="col-xl-3 col-md-6" v-for="item in dataTeam.slice(0,4)" :key="item.id">
                    <div class="team-box" >
                        <div class="team-box__image">
                            <router-link to="/team"><img :src="item.img" alt="ICOLand" /></router-link>
                        </div>
                        <div class="team-box__info">
                            <router-link to="/team" class="name h5">{{item.name}}</router-link>
                            <p class="position">{{item.position}}</p>
                            <ul class="list-social">
                                <li  v-for="icon in item.listsocial" :key="icon.id">
                                    <router-link :to="icon.link"><i :class="icon.icon"></i></router-link>
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
            title: 'Executive team',
            subtitle : 'Our team player alway finds effective ways to improve the product and process',
        }    
    }
};
</script>
            
            