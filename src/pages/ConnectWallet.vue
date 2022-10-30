<template>
    <div class="home-blog backgroup-body button-top-style">
        <Header />
        <PageTitle title="Connect Wallet" desc="Nec lorem tortor, tellus, netus sit at nulla sed. Urna amet, sollicitudin ultrices gravida magna augue." />
        <ConnectWallet />
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header/Header'
import PageTitle from '../components/PageTitle/PageTitle'
import ConnectWallet from '../components/ConnectWallet/ConnectWallet'
import Footer from '../components/Footer/Footer'


export default {
    name: 'Home01',
    components: {
        Header,
        PageTitle,
        ConnectWallet,
        Footer,
    }
}
</script>