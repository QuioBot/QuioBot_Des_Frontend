<template>
    <div class="page-team backgroup-body">
        <Header />
        <PageTitle title='Partner' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Partner - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <Parner2 />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Partner - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <Parner />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Partner - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>
        <Parner3 />

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Partner - Style 4</h3>
                    </div>
                </div>
            </div>
        </div>
        <Parner4 />      

        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import Parner from '../components/Parner/Parner'
import Parner2 from '../components/Parner/Parner2'
import Parner3 from '../components/Parner/Parner3'
import Parner4 from '../components/Parner/Parner4'

import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        Parner,
        Parner2,
        Parner3, 
        Parner4, 
        Footer,
    }
}
</script>