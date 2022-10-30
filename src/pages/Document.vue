<template>
    <div class="page-about backgroup-body">
        <Header />
        <PageTitle title='Document' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Document - Style 1</h3>
                    </div>
                </div>
            </div>
        </div>
        <Document2 />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Document - Style 2</h3>
                    </div>
                </div>
            </div>
        </div>
        <Document />

        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Document - Style 3</h3>
                    </div>
                </div>
            </div>
        </div>
        <Document3 />
        

        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import Document from '../components/Document/Document'
import Document2 from '../components/Document/Document2'
import Document3 from '../components/Document/Document3'




import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        Document,
        Document2,
        Document3, 

        Footer,
    }
}
</script>