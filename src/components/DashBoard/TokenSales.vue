
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
                <div class="banner">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-6 col-md-12">
                                <div class="block-text">
                                    <h2 class="title">{{title}}</h2>
                                    <p class="desc">{{desc}}</p>
                                </div>
                                <div class="group-button">
                                    <router-link to="#" class="btn-action style-5"><span>Buy Tokens now</span></router-link>
                                    <router-link to="#" class="btn-action-outline style-5"><span>White paper</span></router-link>
                                </div>
        
                                <ul class="content-list">
                                    <li v-for="item in dataList" :key="item.id">
                                        <div class="number"><h3>{{item.number}}</h3></div>
                                        <h5>{{item.title}}</h5>
                                        <p>{{item.text}}</p>
                                    </li>
                                </ul>
                                
                            </div>
                            <div class="col-xl-6 col-md-12">
                                <div class="banner-top__sale">
                                    <div class="sale-image">
                                        <img src='../../assets/images/item/nft-01.png' alt="ICOLand" />
                                        <img src='../../assets/images/item/nft-02.jpg' alt="ICOLand" />
                                        <img src='../../assets/images/item/nft-03.jpg' alt="ICOLand" />
                                        <img src='../../assets/images/item/nft-04.png' alt="ICOLand" />
                                        <img src='../../assets/images/item/nft-05.jpg' alt="ICOLand" />
                                        <img src='../../assets/images/item/nft-06.jpg' alt="ICOLand" />
                                    </div>
                                    <div class="sale-content">
                                        <h5>Token sale End In!</h5>
            
                                        <Countdown 
                                            starttime="Jul 1, 2022 15:37:25" 
                                            endtime="Dec 8, 2022 16:37:25" >
                                        </Countdown>
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
import Countdown from '../Layouts/Countdown.vue';
import "./styles.scss";

export default {
    name: "About",
     components: {
        Countdown,
    },
     data (){
        return {
            title : 'WELCOME TO THE ICOLAND NFT CLUB',
            desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
            dataList: [
                {
                    id: 1,
                    number: '01',
                    title: '+200K',
                    text:'Current Holders'
                },
                {
                    id: 2,
                    number: '02',
                    title: '+5 MILLION',
                    text:'cryptoItem'
                },
                {
                    id: 3,
                    number: '03',
                    title: '+500.000 USD',
                    text:'Total Volume'
                },
            ],
            isActive: false,
            isShow: false,
            }    
        },
        methods: {
            toggleActive(){
                this.isActive = !this.isActive;
            },
            toggleShow(){
                this.isShow = !this.isShow;
            },
        },
};
</script>
            
            