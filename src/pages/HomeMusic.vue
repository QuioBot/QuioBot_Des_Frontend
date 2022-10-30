<template>
    <div class="home-music backgroup-body">
        <Header4 />
        <Banner4 />
        <About4 /> 
        <Feature3 />
        <Token2 />
        <RoadMap3 />
        <Gallery />
        <Team7 />
        <Blog />
        <Community />
        
        <FAQ4 />
        <Footer4 />

    </div>
</template>

<script>
import Header4 from '../components/Header/Header4'
import Banner4 from '../components/Banner/Banner4'
import About4 from '../components/About/About4'
import Feature3 from '../components/Feature/Feature3'
import Token2 from '../components/Token/Token2'
import RoadMap3 from '../components/RoadMap/RoadMap3'
import Gallery from '../components/Gallery/Gallery'
import Team7 from '../components/Team/Team7'
import Blog from '../components/Blog/Blog'
import Community from '../components/Community/Community'
import FAQ4 from '../components/FAQ/FAQ4'
import Footer4 from '../components/Footer/Footer4'


export default {
    name: 'HomeNFT01',
    components: {
        Header4,
        Banner4,
        About4,
        RoadMap3,
        Feature3,
        Gallery,
        Token2,
        Team7,
        Blog,
        Community,
        FAQ4,
        Footer4,
    }
}
</script>