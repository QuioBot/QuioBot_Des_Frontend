
<template>
    <section class="document style-1" id="document">
        <div class="container">
            <div class="row">
                <div class="document__main">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block-text center">
                                <h3 class="heading">{{title}}</h3>
                                <p class="desc">{{subtitle}}</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="document__content">
                                <div class="box-document" v-for="item in dataDocument.slice(4,8)" :key="item.id">
                                    <div class="content">
                                        <h4 class="title">{{item.title}}</h4>
                                        <router-link to="#" class="icon">
                                            <img :src="item.img" alt="ICOLand" />
                                        </router-link>
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
import { dataDocument } from '../../fake-data/data-document';

export default {
    name: "Feature",
     data (){
        return {
            dataDocument,
            title: 'Document    ',
            subtitle : 'Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.',
        }    
    }
};
</script>
            
            