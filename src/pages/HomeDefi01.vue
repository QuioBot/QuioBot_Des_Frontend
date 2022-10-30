<template>
    <div class="home-defi-1">
        <Header5 />
        <Banner5 />
        <Parner2 />
        <!-- <About5 /> -->
        <!-- <Feature4 /> -->
        <RoadMap4 />
        <!-- <Allocation2 />
        <Document3 />
        <Team4 /> -->
        <!-- <Blog2 /> -->
        <FAQ5 />
        <Footer5 />

    </div>
</template>

<script>
import Header5 from '../components/Header/Header5'
import Banner5 from '../components/Banner/Banner5'
// import About5 from '../components/About/About5'
// import Feature4 from '../components/Feature/Feature4'
// import Allocation2 from '../components/Allocation/Chart2'
import RoadMap4 from '../components/RoadMap/RoadMap4'
// import Team4 from '../components/Team/Team4'
// import Document3 from '../components/Document/Document3'
import Parner2 from '../components/Parner/Parner2'
// import Blog2 from '../components/Blog/Blog2'
import FAQ5 from '../components/FAQ/FAQ5'
import Footer5 from '../components/Footer/Footer5'


export default {
    name: 'HomeNFT01',
    components: {
        Header5,
        Banner5,
        // About5,
        RoadMap4,
        // Allocation2,
        // Feature4,
        // Team4,
        // Document3,
        Parner2,
        // Blog2,
        FAQ5,
        Footer5,
    }
}
</script>