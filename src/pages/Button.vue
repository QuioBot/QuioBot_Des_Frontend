<template>
    <div class="page-about backgroup-body">
        <Header />
        <PageTitle title='Button' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Button Style</h3>
                    </div>
                </div>
            </div>
        </div>
         <section class="section-button bg-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="list-button">
                            <a class="btn-action style-2" href="/button"><span class="effect">BUY TOKEN</span></a>
                            <a class="btn-action style-1" href="/button"><span>REGISTER &amp; BUY TOKEN NOW</span><span class="icon-arrow"></span></a>
                            <a class="btn-action style-3" href="/button"><span class="effect">BUY TOKEN</span></a>
                            <a class="btn-action style-4" href="/button"><span class="effect">BUY TOKEN NOW</span></a>
                            <a class="btn-action style-5" href="/button"><span class="effect">Buy Tokens Now</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Button Outline</h3>
                    </div>
                </div>
            </div>
        </div>
        <section class="section-button s1 bg-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="list-button">
                            <a class="btn-action-outline style-1" href="/button"><span>EN</span></a>
                            <a class="btn-action-outline style-2" href="/button"><span>White paper</span></a>
                            <a class="btn-action-outline style-3" href="/button"><span>White paper</span></a>
                            <a class="btn-action-outline style-4" href="/button"><span>Watch Video</span></a>
                            <a class="btn-action-outline style-5" href="/button"><span>White paper</span></a>
                            <a class="btn-action-outline style-6" href="/button"><span>Buy Token</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

    
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'


import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        Footer,
    }
}
</script>