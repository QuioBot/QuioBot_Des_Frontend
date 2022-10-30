
<template>
    <section class="connect">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h3 class="heading">{{title}}</h3>
                        <p class="text">{{subtitle}}</p>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6" v-for="item in dataWallet" :key="item.id">
                    <div class="connect-box">
                        <div class="image">
                            <img :src="item.img" alt="ICOLand" />
                        </div>
                        <Link to="#" class="h5 title">{{item.title}}</Link>
                        <p class="text">{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { dataWallet } from '../../fake-data/data-wallet';

export default {
    name: "Feature",
     data (){
        return {
            dataWallet,
            title: 'Connect your wallet',
            subtitle : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
        }    
    }
};
</script>
            
            