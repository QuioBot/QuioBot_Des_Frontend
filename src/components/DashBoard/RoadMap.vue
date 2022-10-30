
<template>
    <section class='dashboard'>
                <div class="btn" @click="toggleActive()" v-bind:class="{click: isActive}">
            <span class="fas fa-bars"></span>
        </div>
        <nav class="dashboard__sidebar" v-bind:class="{click: isActive}">
            <div class="sidebar__logo">
                <router-link to='/'><img src='~@/assets/images/logo/logo.png' alt="ICOLand" /></router-link>   
            </div>
            <ul class="sidebar__menu">
            <li><router-link to="/dashboard-tokensales" ><span class="icon-token"></span>Token Sales</router-link></li>
            <li><router-link to="/dashboard-features"><span class="icon-menu"></span>Our Feature</router-link></li>
            <li><router-link to="/dashboard-roadmap"><span class="icon-map"></span>Road Map</router-link></li>
            <li><router-link to="/dashboard-creations"><span class="icon-start"></span>Our Creations</router-link></li>
            <li><router-link to="/dashboard-team"><span class="icon-team"></span>Our Team</router-link></li>
            <li><router-link to="/dashboard-faq"><span class="icon-faqs"></span>FaQs</router-link></li>
            <li>
            <router-link to="#"  class="feat-btn" @click="toggleShow()" v-bind:class="{show: isShow}"><span class="icon-setting"></span>Pages            
                </router-link>
                <ul class="feat-show"  v-bind:class="{show: isShow}">
                    <li><router-link to="/">Home Main</router-link></li>
                    <li><router-link to="/HomeNFT01">Home NFT</router-link></li>
                    <li><router-link to="/home-defi-01">Home Defi</router-link></li>
                    <li><router-link to="/connect-wallet">Wallet Connect</router-link></li>
                    <li><router-link to="/sign-in">Sign In</router-link></li>
                    <li><router-link to="/sign-up">Sign Up</router-link></li>
                    <li><router-link to="/blog-v1">Blog</router-link></li>
                </ul>
            </li>
            </ul>

            <div class="bottom">
                <ul class="list-social">
                    <li><span class="icon-twitter"></span></li>
                    <li><span class="icon-facebook"></span></li>
                    <li><span class="icon-place"></span></li>
                    <li><span class="icon-youtobe"></span></li>
                    <li><span class="icon-tiktok"></span></li>
                    <li><span class="icon-reddit"></span></li>
                </ul>
                <p class="fs-14">© 2022. All rights reserved by Themesflat</p>
            </div>
        </nav>
        <div class="dashboard__content"  v-bind:class="{click: isActive}">
            <div class="overlay" ></div>
            <div class="dashboard__header">
                <router-link to="/connect-wallet" class="user">
                    <img src='~@/assets/images/avt/admin.jpg' alt="ICOLand" />
                </router-link>
                <router-link to="/connect-wallet" class="btn-action-outline style-5"><span class="icon-wallet"></span><span>Wallet connect</span></router-link>
            </div>
            <div class="dashboard__main">
                <section class="road-map style-8">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-12">
                                <div class="block-text">
                                    <h2 class="title">{{title}}</h2>
                                    <p class="fs-20">{{desc}}</p>
                                </div>
                                
                            </div>
                            <div class="col-xl-6 col-md-12">
                                <div class="group-img">
                                    <img src='~@/assets/images/item/nft-rm-01.png' alt="ICOLand" />
                                    <img src='~@/assets/images/item/nft-rm-02.png' alt="ICOLand" />
                                    <img src='~@/assets/images/item/nft-rm-03.png' alt="ICOLand" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="road-map__main">
                                    <carousel class="swiper-roadmap-7"
                                    :settings='settings' 
                                    :breakpoints='breakpoints'
                                >
                                    <Slide v-for="slide in dataRoadMap.slice(21,27)" :key="slide.id">
                                        <div class="box-roadmap"  :class="slide.classAction" data-aos="fade-up" data-aos-duration="1000">
                                            <p class="time">{{slide.time}}</p>
                                            <h5 class="title">{{slide.title}}</h5>
                                            <ul class="list">
                                                <li v-for="text in slide.list" :key="text.id">
                                                    <div class="dot"></div>
                                                    <p class='fs-17'>{{text.text}}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Slide>
                                </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";

import { defineComponent } from 'vue';
import { Carousel, Slide,  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataRoadMap } from '../../fake-data/data-roadmap';

export default defineComponent ({
   name: "About3",
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        dataRoadMap,
        isActive: false,
        isShow: false,
        title : 'Roadmaps Launch Timeline',
        desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
        },
    }),
    methods: {
            toggleActive(){
                this.isActive = !this.isActive;
            },
            toggleShow(){
                this.isShow = !this.isShow;
            },
        },
})
</script>
            
            