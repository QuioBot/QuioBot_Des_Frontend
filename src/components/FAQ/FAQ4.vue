<template>
    <section class="section-faq style-3">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h6 class="sub-heading">{{subtitle}}</h6>
                        <h3 class="heading">{{title}}</h3>
                    </div>
                </div>
                <div class="col-md-12">
                    <accordion class="content-inner flat-accordion"> 
                        <accordion-item class="accordion-item" v-for="item in dataFaq.slice(26,30)" :key="item.id">
                            <template v-slot:accordion-trigger class="accordion-header" :class="{'accordion__trigger_active': item.show}">
                                <span class="number">{{item.number}}</span>
                                <button class="accordion-button">
                                    {{item.title}}
                                </button>
                            </template>
                            <template v-slot:accordion-content>
                                
                                <p class="toggle-content">{{item.content}}</p>
                            </template>
                        </accordion-item>

                    </accordion>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import Accordion from "../Accordion/Accordion.vue";
import AccordionItem from "../Accordion/AccordionItem";
import { dataFaq } from '../../fake-data/data-faq';

import "./styles.scss";


export default {
    name: 'Faq',
    data (){
        return {
            dataFaq,
            subtitle:'Questions',
            title: 'FAQ',
        }    
    },
    components: {
        Accordion,
        AccordionItem
    }
}
</script>