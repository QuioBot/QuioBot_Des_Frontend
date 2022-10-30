
<template>
    <section className="features style-5" id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-heading">{{subtitle}}</h6>
                        <h3 className="heading">
                            {{title}}
                        </h3>
                        <p className="fs-20 mt-16">{{desc}}</p>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="800" v-for="item in dataFeature.slice(14,18)" :key="item.id">
                <div className="features-box-5 center">
                    <div className="icon">
                        <img :src="item.img" alt="Icoland" />
                    </div>
                    <div className="features-box-content">
                        <router-link to="#" className="h5 title">{{item.title}}</router-link>
                        <p className="fs-15">{{item.desc}}</p>
                    </div>
                </div>
            </div>      
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataFeature } from '../../fake-data/data-feature';

export default {
    name: "Feature",
     data (){
        return {
            dataFeature,
            subtitle :'Features',
            title: 'Meet our Solutions',
            desc: 'Explore sensational features to prepare your best investment in cryptocurrency',
        }    
    }
};
</script>
            
            