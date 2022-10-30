<template>
    <div class="page-team backgroup-body">
        <Header />
        <PageTitle title='Our Team' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team7 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team4 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 4</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team5 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 5</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team8 />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 6</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team3 />
         <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 7</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team9 />
        
         <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 8</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team2 />
         <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Our Team - Style 9</h3>
                    </div>
                </div>
            </div>
        </div>
        <Team6 />
        

        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import Team from '../components/Team/Team'
import Team2 from '../components/Team/Team2'
import Team3 from '../components/Team/Team3'
import Team4 from '../components/Team/Team4'
import Team5 from '../components/Team/Team5'
import Team6 from '../components/Team/Team6'
import Team7 from '../components/Team/Team7'
import Team8 from '../components/Team/Team8'
import Team9 from '../components/Team/Team9'

import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        Team,
        Team2,
        Team3, 
        Team4, 
        Team5, 
        Team6, 
        Team7, 
        Team8, 
        Team9,
        Footer,
    }
}
</script>