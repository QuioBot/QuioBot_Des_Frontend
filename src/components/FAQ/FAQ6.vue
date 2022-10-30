<template>
    <section class="section-faq style-2" id="faq">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="faq__content" data-aos="fade-up" data-aos-duration="1000">
                    <div class="block-text">
                            <h6 class="sub-heading">{{subtitle}}</h6>
                            <h3 class="heading">{{title}}</h3>
                            
                        </div>
    
                        <div class="flat-tabs">
                            <Tab />
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="faq__images">
                    <img src='~@/assets/images/layout/faq-5.png' alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Tab from "../Tab/Tab5/Tab";
import "./styles.scss";


export default {
    name: 'Faq',
    data (){
        return {
            title: 'Frequently asked question ',
            subtitle : 'FAQS',
        }    
    },
    components: {
        Tab,
    }
}
</script>