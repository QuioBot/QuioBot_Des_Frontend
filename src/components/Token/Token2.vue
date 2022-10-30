
<template>
     <section class="token style-3" id="token">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="block-text">
                        <h6 class="sub-heading">{{subtitle}}</h6>
                        <h3 class="heading">{{title}}</h3>
                        <p class="desc">{{desc}}</p>
                        <a href="#" class="btn-action-outline style-6"><span>White paper</span></a>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="token__content">
                        <div class="top">
                            <h2 class="number">{{number}}</h2>
                            <h6 class="text">{{text}}</h6>
                        </div>
                        <ul class="list">
                            <li v-for="item in dataToken" :key="item.id">
                                <h6 class="title">{{item.title}}</h6>
                                <h2 class="number">{{item.number}}</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataToken } from '../../fake-data/datatoken';

export default {
    name: "Feature",
     data (){
        return {
            dataToken,
            title: 'WE ARE GROWING',
            subtitle : 'Tokenomics',
            desc:'For each transaction, an 12% tax fee is applied. This fee is then divided for different purpose of benefits.',
            number : '1,000,000',
            text:'Total supply',
        }    
    }
};
</script>
            
            