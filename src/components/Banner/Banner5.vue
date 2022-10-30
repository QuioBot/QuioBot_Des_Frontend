
<template>
    <section class="banner-top style-4">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="banner-top__content">
                        <h2 style="color:#B4E116 ;" class="title">{{title1}}</h2>
                        <h2 class="title">{{title2}}</h2>
                        <p class="desc">{{desc}}</p>
                        <div class="button">
                            <a class="btn-action style-4" href="/home-defi-01"><span class="effect">Github Repository</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="banner-top__sale">
                        <Searchbar />
                        <!-- <div class="block-text">
                            <h3 class="heading">{{title2}}</h3>
                            <p class="fs-17">{{desc2}}</p>
                        </div>
                        <div class="sale-content">
                        <Countdown 
                            starttime="Jul 1, 2022 15:37:25" 
                            endtime="Dec 8, 2022 16:37:25" >
                        </Countdown>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
            
</template>

<script>
// import Countdown from '../Layouts/Countdown.vue';
import "./styles.scss";
import { dataBanner } from '../../fake-data/databanner';
import Searchbar from '../Searchbar/Searchbar.vue'

export default {
    name: "About",
     components: {
        // Countdown,
        Searchbar,
    },
    data (){
        return {
            dataBanner,
            title1 : 'QUIBOT',
            title2 : 'Medical SearchBar',
            desc : 'QuiBot Medical SearchBar is a graphical control element used in computer programs, such as file managers or web browsers, and on web sites. A search box is usually a single-line text box or search icon with the dedicated function of accepting user input to be searched for in a database',
            desc2:'During Pre-Sale, get 5x tokens or 50.000 HVR per Ether. During regular sale, it will be 10.000 HVR per Ether.'
        }    
    }
};
</script>
            
            