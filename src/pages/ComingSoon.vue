
<template>
    <section class="comingsoon">
        <div class="container">
            
                <div class="main-comingsoon center">
                    <div class="logo">
                        <router-link to="/">
                            <img src='../assets/images/logo/logo-main.png' alt="ICOLand" />
                            </router-link>
                    </div>
                    <h3 class="heading">{{title}}</h3>
                    <p class="fs-15">{{desc}}</p>
                    <Countdown 
                        starttime="Jul 1, 2022 15:37:25" 
                        endtime="Dec 8, 2022 16:37:25" >
                    </Countdown>
                    <form action="#" id="subscribe-form">
                        <input type="email" placeholder="Enter your mail" required="" id="subscribe-email" />
                        <button class="btn-action s2" type="submit" id="subscribe-button"> <span class="effect">Notify Me</span></button>
                    </form>
                </div>
            </div>
        
    </section>     
</template>

<script>
import Countdown from '../components/Layouts/Countdown.vue';


export default {
    name: "Feature", 
    components: {
        Countdown,
    },
     data (){
        return {
            title : 'Hang on! We are under maintenance',
            desc : 'It will not take a long time till we get the error fiked. We will live again in,',
        }    
    }
};
</script>
            
            