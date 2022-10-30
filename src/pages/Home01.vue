<template>
    <div class="home-main backgroup-body">
        <Header />
        <Banner />
        <About />
        <Feature />
        <Allocation />
        <RoadMap />
        <Token />
        <Team />
        <FAQ />
        <Document />
        <Contact />
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Feature from '../components/Feature/Feature'
import Allocation from '../components/Allocation/Chart'
import RoadMap from '../components/RoadMap/RoadMap'
import Token from '../components/Token/Token'
import Team from '../components/Team/Team'
import FAQ from '../components/FAQ/FAQ'
import Document from '../components/Document/Document'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        Banner,
        About,
        Feature,
        Allocation,
        RoadMap,
        Token,
        Team,
        FAQ,
        Document,
        Contact,
        Footer,
    }
}
</script>