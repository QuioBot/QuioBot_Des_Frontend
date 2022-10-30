<template>
    <div class="page-about backgroup-body">
        <Header />
        <PageTitle title='Footer' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Footer - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer2 />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Footer - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        
        

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Footer - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer4 />
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Footer - Style 4</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer5/>
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Footer - Style 5</h3>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer6 />
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Footer - Style 6</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer3 />
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Footer - Style 7</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer7 />

        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import Footer2 from '../components/Footer/Footer2'
import Footer3 from '../components/Footer/Footer3'
import Footer4 from '../components/Footer/Footer4'
import Footer5 from '../components/Footer/Footer5'
import Footer6 from '../components/Footer/Footer6'
import Footer7 from '../components/Footer/Footer7'

import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        Footer2, 
        Footer3, 
        Footer4, 
        Footer5, 
        Footer6, 
        Footer7, 
        Footer,
    }
}
</script>