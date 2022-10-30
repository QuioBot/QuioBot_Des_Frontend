<template>
    <div class="home-blog backgroup-body button-top-style">
        <Header />
        <PageTitle title='Blog Style 3' desc='Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue.'  />
        <BlogPage3 />
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import BlogPage3 from '../components/BlogPage/BlogPage3'
import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        BlogPage3,
        Footer,
    }
}
</script>