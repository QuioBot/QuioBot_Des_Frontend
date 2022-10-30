<template>
    <div class="page-roadmap backgroup-body">
        <Header />
        <PageTitle title='Roadmap' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <RoadMap2 />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <RoadMap />

        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>
        <RoadMap3 />
        
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 4</h3>
                    </div>
                </div>
            </div>
        </div>
         
        <RoadMap4 />
        
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 5</h3>
                    </div>
                </div>
            </div>
        </div>
        <RoadMap5 />
        
   
       
       
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 6</h3>
                    </div>
                </div>
            </div>
        </div>
        <RoadMap6 />
       
        
       
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 7</h3>
                    </div>
                </div>
            </div>
        </div>
         <RoadMap7 />
        
       
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 8</h3>
                    </div>
                </div>
            </div>
        </div>
        <RoadMap8 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Roadmap - Style 9</h3>
                    </div>
                </div>
            </div>
        </div>
        <RoadMap9 />
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import RoadMap from '../components/RoadMap/RoadMap'
import RoadMap2 from '../components/RoadMap/RoadMap2'
import RoadMap3 from '../components/RoadMap/RoadMap3'
import RoadMap4 from '../components/RoadMap/RoadMap4'
import RoadMap5 from '../components/RoadMap/RoadMap5'
import RoadMap6 from '../components/RoadMap/RoadMap6'
import RoadMap7 from '../components/RoadMap/RoadMap7'
import RoadMap8 from '../components/RoadMap/RoadMap8'
import RoadMap9 from '../components/RoadMap/RoadMap9'

import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        RoadMap,
        RoadMap2,
        RoadMap3, 
        RoadMap4, 
        RoadMap5, 
        RoadMap6, 
        RoadMap7, 
        RoadMap8, 
        RoadMap9, 
        Footer,
    }
}
</script>