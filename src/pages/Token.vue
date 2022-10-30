<template>
    <div class="page-about backgroup-body">
        <Header />
        <PageTitle title='Token Sales' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Token Sales - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <Token />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Token Sales - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <Token3 />
        

        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Token Sales - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>

        <Token4 />

        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import Token from '../components/Token/Token'
import Token3 from '../components/Token/Token3'
import Token4 from '../components/Token/Token4'






import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        Token,
        Token3, 
        Token4, 

        Footer,
    }
}
</script>