
<template>
    <section className="about style-7 bg-1 mobie-pb0">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text">
                        <h2 className="title">{{title}}</h2>
                        <p className="fs-20 mt-16">{{desc}}</p>
                    </div> 
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-duration="800" v-for="item in dataAbout.slice(25,28)" :key="item.id">
                    <div className="about__box">
                        <div className="number">
                            <h3>{{item.number}}</h3>
                        </div>
                        <h5 className="title">{{item.title}}</h5>
                        <p className="text fs-17">{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";

import { dataAbout } from '../../fake-data/data-about';

export default {
    name: "About",
     data (){
        return {
            dataAbout,
            title: 'What Is ICO?',
            desc : 'ICOLand is an open, programmable smart contracts platform for decentralized applications.'
        }    
    },
};
</script>
            
            