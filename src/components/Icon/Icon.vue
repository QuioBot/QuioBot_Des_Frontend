
<template>
     <section class="section-icon bg-1">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="list-icon">
                        <div class="icon" v-for="item in dataIcon" :key="item.id">
                            <span :class="item.classAction"></span>
                            <h6 class="name">{{item.name}}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "./styles.scss";

import { dataIcon } from '../../fake-data/data-icon';

export default {
    name: "Feature",
     data (){
        return {
            dataIcon,
            title: 'Executive team',
            subtitle : 'Our team player alway finds effective ways to improve the product and process',
        }    
    }
};
</script>
            
            