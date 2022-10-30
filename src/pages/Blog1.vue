<template>
    <div class="home-blog backgroup-body button-top-style">
        <Header />
        <PageTitle title="Blog Style 1" desc="Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue." />
        <BlogPage />
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import BlogPage from '../components/BlogPage/BlogPage1'
import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        BlogPage,
        Footer,
    }
}
</script>