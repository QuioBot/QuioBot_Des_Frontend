<template>
    <div class="home-nft-v2 ">
        <Header3 />
        <Banner3 />
        <About3 />
        <Parner />
        <Feature2 />
        <Document3 />
        <RoadMap6 />
        <Team3 />
        <FAQ3 />
        <Footer3 />

    </div>
</template>

<script>
import Header3 from '../components/Header/Header3'
import Banner3 from '../components/Banner/Banner3'
import About3 from '../components/About/About3'
import Parner from '../components/Parner/Parner'
import Feature2 from '../components/Feature/Feature2'
import RoadMap6 from '../components/RoadMap/RoadMap6'
import Team3 from '../components/Team/Team3'
import Document3 from '../components/Document/Document3'
import FAQ3 from '../components/FAQ/FAQ3'
import Footer3 from '../components/Footer/Footer3'


export default {
    name: 'HomeNFT01',
    components: {
        Header3,
        Banner3,
        About3,
        Parner,
        RoadMap6,
        Feature2,
        Team3,
        Document3,
        FAQ3,
        Footer3,
    }
}
</script>