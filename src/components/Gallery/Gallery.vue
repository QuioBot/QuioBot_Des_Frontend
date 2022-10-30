
<template>
    <section class="gallery" id="gallery">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="block-text">
                        <h6 class="sub-heading">{{subtitle}}</h6>
                        <h3 class="heading">{{title}}</h3>
                        <p class="fs-20">{{desc}}</p>
                        <a class="btn-action-outline style-6" href="/home-music"><span>View more</span></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6" v-for="item in dataGallery.slice(0,5)" :key="item.id">
                    <div class="gallery__box">
                        <img :src="item.img" alt="ICOLand" />
                        <div class="wrap-video">
                        <a   class="popup-youtube"  v-on:click="isPopupMethod(isPopup)" >
                            <span class="icon-play"></span>
                        </a>
                        </div>
                        <div class="content">
                            <h5 class="title">{{item.title}}</h5>
                                <p class="category">{{item.category}}</p>
                        </div>                            
                    </div>

                </div> 
            </div>
        </div>
        <div class="popup-video" v-if="isPopup">
            <div class="popup-overlay" v-on:click="isPopupMethod(isPopup)"></div>
            <div class="play-video">
                <div class="popup-overlay-close" v-on:click="isPopupMethod(isPopup)" >
                    <i class="fal fa-times"></i>
                </div>
                <iframe  src="https://www.youtube.com/embed/i7EMACWuErA" title="NFT Collection | NFT Collection 2022 | Bebeez NFT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataGallery } from '../../fake-data/data-gallery';

export default ({
    name: "Feature",
    data: () => ({
        isPopup: false,
        dataGallery,
        title: 'NFT Musical arts',
        subtitle : 'Gallery',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }),
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
});
</script>

            