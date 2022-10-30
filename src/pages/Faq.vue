<template>
    <div class="page-team backgroup-body">
        <Header />
        <PageTitle title='FaQs' desc='Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>FaQs - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <FAQ />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>FaQs - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <FAQ2 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>FaQs - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>
        <FAQ4 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>FaQs - Style 4</h3>
                    </div>
                </div>
            </div>
        </div>
        <FAQ7 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>FaQs - Style 5</h3>
                    </div>
                </div>
            </div>
        </div>
        <FAQ9 />

        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import FAQ from '../components/FAQ/FAQ'
import FAQ2 from '../components/FAQ/FAQ2'
import FAQ7 from '../components/FAQ/FAQ7'
import FAQ4 from '../components/FAQ/FAQ4'
import FAQ9 from '../components/FAQ/FAQ9'


import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        FAQ,
        FAQ2,
        FAQ7, 
        FAQ4, 
        FAQ9, 
        Footer,
    }
}
</script>