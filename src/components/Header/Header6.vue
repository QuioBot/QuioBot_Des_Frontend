<template>

        <header :class="['header style-4', { 'is-fixed': isSticky }]" id="header_main">
     
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__body">
                        <div class="header__logo">
                            <a href="/">
                                <img id="site-logo" src="../../assets/images/logo/logo-05.png" alt="ICOLand" width="165" height="40" data-retina="assets/images/logo/logo-main@x2.png" data-width="165" data-height="40">
                            </a>
                        </div>
                        <div class="header__right">
                            <nav id="main-nav" class="main-nav" v-bind:class="{active: isActive}">
                                <ul id="menu-primary-menu" class="menu">
                                    <li class="menu-item menu-item-has-children" @click="toggleActiveMobile()" v-bind:class="{active: isActiveMobile}">
                                        <a href="#">Home Page</a>
                                        <ul class="sub-menu" >
                                            <li class="menu-item "><router-link to="/">Home Main</router-link></li>
                                            <li class="menu-item"><router-link to="/HomeNFT01">Home NFT 01</router-link></li>
                                            <li class="menu-item"><router-link to="/HomeNFT02">Home NFT 02</router-link></li>
                                            <li class="menu-item"><router-link to="/home-music">Home Music</router-link></li>
                                            <li class="menu-item"><router-link to="/home-defi-01">Home Defi 01</router-link></li>
                                            <li class="menu-item"><router-link to="/home-defi-02">Home Defi 02</router-link></li>
                                            <li class="menu-item"><router-link to="/home-defi-03">Home Defi 03</router-link></li>
                                            <li class="menu-item"><router-link to="/home-defi-04">Home Defi 04</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children" @click="toggleActiveMobile1()" v-bind:class="{active: isActiveMobile1}">
                                        <router-link to="#">Home Dashboad</router-link>
                                        <ul class="sub-menu" >
                                            <li class="menu-item"><router-link to="/dashboard-tokensales">Token Sales</router-link></li>
                                            <li class="menu-item"><router-link to="/dashboard-features">Our Feature</router-link></li>
                                            <li class="menu-item"><router-link to="/dashboard-roadmap">Road Map</router-link></li>
                                            <li class="menu-item"><router-link to="/dashboard-creations">Our Creations</router-link></li>
                                            <li class="menu-item"><router-link to="/dashboard-team">Our Team</router-link></li>
                                            <li class="menu-item"><router-link to="/dashboard-faq">FaQs</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children" @click="toggleActiveMobile2()" v-bind:class="{active: isActiveMobile2}">
                                        <router-link to="#">Blog Page</router-link>
                                        <ul class="sub-menu" >
                                            <li class="menu-item"><router-link to="/blog-v1">Blog Style 01</router-link></li>
                                            <li class="menu-item"><router-link to="/blog-v2">Blog Style 02</router-link></li>
                                            <li class="menu-item"><router-link to="/blog-v3">Blog Style 03</router-link></li>

                                        </ul>
                                    </li>
                                    <li class="menu-item">
                                        <router-link to="/connect-wallet">Connect Wallet</router-link>
                                    </li>
                                    <li class="menu-item menu-item-has-children" @click="toggleActiveMobile3()" v-bind:class="{active: isActiveMobile3}">
                                        <router-link to="#">Elements</router-link>
                                        <ul class="sub-menu" >
                                            <li class="menu-item"><router-link to="/about">About Us</router-link></li>
                                            <li class="menu-item"><router-link to="/features">Features</router-link></li>
                                            <li class="menu-item"><router-link to="/roadmap">Road Map</router-link></li>
                                            <li class="menu-item"><router-link to="/document">Documents</router-link></li>
                                            <li class="menu-item"><router-link to="/team">Our Team</router-link></li>
                                            <li class="menu-item"><router-link to="/partner">Partner</router-link></li>
                                            <li class="menu-item"><router-link to="/token">Token Sale</router-link></li>
                                            <li class="menu-item"><router-link to="/button">Button</router-link></li>
                                            
                                            <li class="menu-item"><router-link to="/footer">Footer</router-link></li>
                                            
                                            
                                            <li class="menu-item"><router-link to="/Faq">Faq</router-link></li>
                                            <li class="menu-item"><router-link to="/Icon">Icon</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children" @click="toggleActiveMobile4()" v-bind:class="{active: isActiveMobile4}">
                                        <router-link to="#">Pages</router-link>
                                        <ul class="sub-menu" >
                                            <li class="menu-item"><router-link to="/sign-in">Sign In</router-link></li>
                                            <li class="menu-item"><router-link to="/sign-up">Sign Up</router-link></li>
                                            <li class="menu-item"><router-link to="/404">Page 404</router-link></li>
                                            <li class="menu-item"><router-link to="/Comingsoon">Coming Soon</router-link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div class="group-button">
                                <a class="btn-action style-5" href="/sign-in"><span class="effect">Log in</span></a>
                            </div>
                             <div class="mobile-button" @click="toggleActive()" v-bind:class="{active: isActive}" ><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </header>  

</template>

<script>

import "./styles.scss";

export default {
    name: "Header",
    data() {
        return {
            isSticky: false,
            isActive: false,
            isActiveMobile:false,
            isActiveMobile1:false,
            isActiveMobile2:false,
            isActiveMobile3:false,
            isActiveMobile4:false,
            isActiveMobile5:false,
            search: false,
            Header: null,
            HeaderImg: null
        };
    },
    mounted() {
        const that = this;
        window.addEventListener("scroll", () => {
            let scrollPos = window.scrollY;
            if (scrollPos >= 100) {
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        });
    },
    methods: {
        isSideMenuMethod(isSideMenu){
            return this.isSideMenu = !isSideMenu
        },
        toggleActive(){
            this.isActive = !this.isActive;
        },
        toggleActiveMobile(){
            this.isActiveMobile = !this.isActiveMobile;
        },
        toggleActiveMobile1(){
            this.isActiveMobile1 = !this.isActiveMobile1;
        },
        toggleActiveMobile2(){
            this.isActiveMobile2 = !this.isActiveMobile2;
        },
        toggleActiveMobile3(){
            this.isActiveMobile3 = !this.isActiveMobile3;
        },
        toggleActiveMobile4(){
            this.isActiveMobile4 = !this.isActiveMobile4;
        },
        toggleActiveMobile5(){
            this.isActiveMobile5 = !this.isActiveMobile5;
        },
         toggleActiveSearch(){
            this.search = !this.search;
        },
    },
};
</script>
