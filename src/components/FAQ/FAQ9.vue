<template>
    <section class="section-faq style-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-md-12">
                    <div class="faq__content">
                        <div class="block-text">
                            <h2 class="heading">{{title}}</h2>
                            <p class="fs-17">{{desc}}</p>
                        </div>
                        <div class="flat-tabs">
                            <Tab />
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-12">
                    <div class="faq__images">
                        <img src='~@/assets/images/layout/faq.png' alt="ICOLand" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Tab from "../Tab/Tab7/Tab";
import "./styles.scss";


export default {
    name: 'Faq',
    data (){
        return {
            title: 'Frequently asked questions ',
            desc : 'Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others.',
        }    
    },
    components: {
        Tab,
    }
}
</script>