<template>
    <div class="page-about backgroup-body">
        <Header />
        <PageTitle title='Features' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <About />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <Feature />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>
        <Feature3 />
        
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 4</h3>
                    </div>
                </div>
            </div>
        </div>
         
        <Feature4 />
        
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 5</h3>
                    </div>
                </div>
            </div>
        </div>
        <Feature5 />
        
   
       
       
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 6</h3>
                    </div>
                </div>
            </div>
        </div>
        <Feature2 />
       
        
       
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 7</h3>
                    </div>
                </div>
            </div>
        </div>
         <Feature6 />
        
       
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Features - Style 8</h3>
                    </div>
                </div>
            </div>
        </div>
        <Feature8 />
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import About from '../components/About/About2'
import Feature from '../components/Feature/Feature'
import Feature2 from '../components/Feature/Feature2'
import Feature3 from '../components/Feature/Feature3'
import Feature4 from '../components/Feature/Feature4'
import Feature5 from '../components/Feature/Feature5'
import Feature6 from '../components/Feature/Feature6'
import Feature8 from '../components/Feature/Feature8'

import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        About,
        Feature,
        Feature2,
        Feature3,
        Feature4,
        Feature5,
        Feature6,
        Feature8,  
 
        Footer,
    }
}
</script>