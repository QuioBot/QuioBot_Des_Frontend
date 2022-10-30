<template>
    <div class="home-nft backgroup-body">
        <Header2 />
        <Banner2 />
        <About2 />
        <RoadMap2 />
        <Creation />
        <Document2 />
        <Team2 />
        <FAQ2 />
        <Contact2 />
        <Footer2 />

    </div>
</template>

<script>
import Header2 from '../components/Header/Header2'
import Banner2 from '../components/Banner/Banner2'
import About2 from '../components/About/About2'
import Creation from '../components/Creations/Creation'
import RoadMap2 from '../components/RoadMap/RoadMap2'
import Team2 from '../components/Team/Team2'
import FAQ2 from '../components/FAQ/FAQ2'
import Document2 from '../components/Document/Document2'
import Contact2 from '../components/Contact/Contact2'
import Footer2 from '../components/Footer/Footer2'


export default {
    name: 'HomeNFT01',
    components: {
        Header2,
        Banner2,
        About2,
        RoadMap2,
        Creation,
        Team2,
        FAQ2,
        Document2,
        Contact2,
        Footer2,
    }
}
</script>