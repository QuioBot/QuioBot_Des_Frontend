<template>
    <div class="home-defi-3">
        <Header5 />
        <Banner5 id="Home"/>   
        <FAQ id="Shema"/>
        <Parner3 id="Technologies"/>     
        <!-- <About7 />
        <Team8 /> -->
        <RoadMap7 id="Road Map"/>
        <!-- <Allocation4 />
        <Feature6 />
        <Token3 />         -->
        <!-- <Blog4 /> -->
        <FAQ7 id="FAQ"/>
        <Footer5 id="Contact"/>

    </div>
</template>

<script>
import Header5 from '../components/Header/Header5'
import Banner5 from '../components/Banner/Banner5'
// import About7 from '../components/About/About7'
// import Feature6 from '../components/Feature/Feature6'
import RoadMap7 from '../components/RoadMap/RoadMap7'
// import Allocation4 from '../components/Allocation/Chart4'
// import Team8 from '../components/Team/Team8'
// import Token3 from '../components/Token/Token3'
import Parner3 from '../components/Parner/Parner3'
// import Blog4 from '../components/Blog/Blog4'
import FAQ7 from '../components/FAQ/FAQ7'
import FAQ from '../components/FAQ/FAQ'
import Footer5 from '../components/Footer/Footer5'


export default {
    name: 'HomeNFT01',
    components: {
        Header5,
        Banner5,
        // About7,
        RoadMap7,
        // Allocation4,
        // Feature6,
        // Team8,
        // Token3,
        Parner3,
        // Blog4,
        FAQ7,
        Footer5,
        FAQ,
    }
}
</script>