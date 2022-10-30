
<template>
    <section class="documents style-2 mobie-pb0" id="document">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3>{{title}}</h3>
                        <p class="mt-12 pd28">{{subtitle}}</p>
                    </div>
                </div>
            </div>
            <div class="row mt-67">
                <div class="col-xl-3 col-md-6" v-for="item in dataDocument.slice(0,4)" :key="item.id">
                    <div class="document-box">
                        <div class="card-title" :class="item.classAction">
                            <img :src="item.img" alt="ICOLand" />
                            <router-link class="fs-16" to="/document">{{item.title}}</router-link>
                        </div>
                        <div class="content">
                            <router-link to="/document#" class="title">{{item.subtitle}}</router-link>
                            <router-link to="/document" class="download"><span class="icon-Group"></span>PDF</router-link>
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
            title: 'Documents',
            subtitle : 'Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.',
        }    
    }
};
</script>
            
            