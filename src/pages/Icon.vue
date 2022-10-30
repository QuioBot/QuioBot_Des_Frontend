<template>
    <div class="page-about backgroup-body">
        <Header />
        <PageTitle title='Custom Icon' desc='We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.'  />
        <div class="title-style center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Custom Icon</h3>
                    </div>
                </div>
            </div>
        </div>
        <Icon />
        <Footer />
        
    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import Icon from '../components/Icon/Icon'

import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        Icon, 
        Footer,
    }
}
</script>