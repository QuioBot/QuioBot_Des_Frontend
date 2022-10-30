
<template>
      <section class="token-details style-3" id="sales">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3 class="heading">{{title}}</h3>
                        <p class="fs-17 mt-16 pd24">{{subtitle}}</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-4 col-md-6" v-for="item in dataTokendetails.slice(12,18)" :key="item.id">
                    <div class="token-details-box" :class="item.classAction">
                        <h5 class="title">{{item.title}}</h5>
                        <p class="fs-17">{{item.desc}}</p>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>


import "./styles.scss";
import { dataTokendetails } from '../../fake-data/data-tokendeials';


export default {
    name: "Feature",
     data (){
        return {
            dataTokendetails,
            title: 'ICO Token details',
            subtitle : 'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
        }    
    }
};
</script>
            
            