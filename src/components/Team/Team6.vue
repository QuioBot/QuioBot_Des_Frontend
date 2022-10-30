
<template>
    <section class='dashboard'>
        <div class="dashboard__main">
            <div class="section-team style-9">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block-text">
                                <h2 class="heading">{{title}}</h2>
                                <div class="desc fs-20 mt-21">{{desc}}</div>
                            </div>
        
                            <div class="team-main">
                                <div class="team-box-9" v-for="item in dataTeam.slice(38,42)" :key="item.id">
                                    <div class="team-box__image">
                                        <router-link to="#"><img :src="item.img" alt="ICOLand" /></router-link>
                                    </div>
                                    <div class="team-box__content">
                                        <router-link to="#" class="title">{{item.title}}<span class="icon-twitter"></span></router-link>
                                                            
                                        <p class="positon">{{item.positon}}</p>
                                    </div>
                                </div>
                            </div>
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
    name: "About",
     data (){
        return {
            title : 'Meet Our Team',
            desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
            dataTeam,
            }    
        }
};
</script>
            
            