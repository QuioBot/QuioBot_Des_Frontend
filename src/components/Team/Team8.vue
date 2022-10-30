
<template>
    <div class="section-team style-5" id="team">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text">
                        <h2 class="heading">{{title}}</h2>
                        <div class="desc fs-20 mt-16 pr40">{{desc}}</div>
                    </div>
                    <ul class="list-statis">
                        <li v-for="item in dataTeam.slice(34,38)" :key="item.id">
                            <p class="fs-20">{{item.text}}</p>
                            <h2 class="numb">{{item.numb}}</h2>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>
        <div class="container map">
            <div class="row">
                <div class="col-md-12">
                    <div class="team__main">
                        <img src='~@/assets/images/layout/worldmap.png' alt="ICOLand" />
                        <div class="flat-tabs team-box-5">
                           <Tab />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tab from "../Tab/TabTeam2/Tab";
import { dataTeam } from '../../fake-data/data-team';

import "./styles.scss";

export default {
    name: "Feature",
    components: {
        Tab,
    },
     data (){
        return {
            dataTeam,
            title: 'MEET OUR MEMBER',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla. Sodales netus viverra ipsum consequat.',
        }    
    }
};
</script>
            
            