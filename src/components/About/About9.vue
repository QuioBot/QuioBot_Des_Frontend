
<template>
    <section class='dashboard'>
        <div class="dashboard__main">
            <section class="about style-9">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 col-md-12">
                            <div class="block-text">
                                <h2 class="title">{{title}}</h2>
                                <p class="fs-20 mt-16">{{desc}}</p>
                            </div>
                            <div class="group-img">
                                <img src='~@/assets/images/layout/item-01.jpg' alt="ICOLand" />
                                <img src='~@/assets/images/layout/item-02.jpg' alt="ICOLand" />
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-12">
                            <div class="about__content">
                                <div class="box-about" v-for="item in dataAbout" :key="item.id">
                                    <div class="number">
                                        <h2>{{item.number}}</h2>
                                    </div>
                                    <h4 class="title">{{item.title}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</section>
</template>

<script>

import "./styles.scss";


export default {
    name: "About",
     data (){
        return {
           dataAbout: [
                {
                    id: 1,
                    number: '01',
                    title:'High-Quality Rendered And Equally Affordable Artwork'
                },
                {
                    id: 2,
                    number: '02',
                    title:'Learning, Researching, And Studying The Crypto Market Daily'
                },
                {
                    id: 3,
                    number: '03',
                    title:'The Immersive World Of NFTs With All Its Collectors & Projects'
                },
                {
                    id: 4,
                    number: '04',
                    title:'The Immersive World Of NFTs With All Its Collectors & Projects'
                },
            ],
            title : 'Allow us to Introduce Ourselves',
            desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
        }    
    },
};
</script>
            
            