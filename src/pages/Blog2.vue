<template>
    <div class="home-blog backgroup-body button-top-style">
        <Header />
        <PageTitle title='Blog Style 2' desc='Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue.'  />
        <BlogPage2 />
        <FeatureNew />
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import BlogPage2 from '../components/BlogPage/BlogPage2'
import FeatureNew from '../components/BlogPage/FeatureNew'
import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        BlogPage2,
        FeatureNew,
        Footer,
    }
}
</script>