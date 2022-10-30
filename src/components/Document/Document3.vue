
<template>
 <section class="documents style-3" id="documents">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title}}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                 <div class="col-xl-3 col-md-6" v-for="item in dataDocument.slice(8,12)" :key="item.id">
                    <div class="document-box">
                        <router-link to="#" class="h5 title">{{item.title}}</router-link>
                        <router-link to="#" class="download"><span  class='icon-Group'></span>{{item.text}}</router-link>
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
             title: 'Document',
           
        }    
    }
};
</script>
            
            