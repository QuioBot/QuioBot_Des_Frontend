
<template>
    <section className='mobie-pb0'>
        <div className="banner-top style-8">
            <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__content">
                        <h2 className="title">{{title}}</h2>
                        <p className="desc">{{desc}}</p>
                        <div className="button">
                            <a class="btn-action style-5" href="/home-defi-04"><span class="effect">GET TOKEN NOW</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__image">
                        <img src='~@/assets/images/layout/banner-5.png' alt="ICOLand" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="banner-top__main">
                <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="banner-top__sale">
                                
                                    <div className="countdown">
                                        <p className="fs-17">Token sale End In!</p>
                                        <Countdown 
                                            starttime="Jul 1, 2022 15:37:25" 
                                            endtime="Dec 8, 2022 16:37:25" >
                                        </Countdown>
                                    </div>
                                    
                                        <div className="token-bar">
                                            <div className="top">
                                                <h6>Raised - <span>1,450 Tokens</span></h6>
                                                <h6>Target - <span>150,000 Tokens</span></h6>
                                            </div>
                                            <div className="main">
                                                <div className="progress-token">
                                                    <p className="fs-14">60,490</p>
                                                </div>
                                            </div>

                                            <div className="bottom">
                                                <p className="fs-14">Soft cap</p>
                                                <p className="fs-14">Crowdsale</p>
                                                <p className="fs-14">Hard cap</p>
                                            </div>
                                        </div>

                                        <ul className="list-coin">
                                            <li><span className="icon-bitcoin"></span></li>
                                            <li><span className="icon-coinp"></span></li>
                                            <li><span className="icon-coinp"></span></li>
                                            <li><span className="icon-kyber-network"></span></li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>                
        </div>
    </section>
</template>

<script>
import Countdown from '../Layouts/Countdown.vue';
import "./styles.scss";
import { dataBanner } from '../../fake-data/databanner';

export default {
    name: "About",
     components: {
        Countdown,
    },
    data (){
        return {
            dataBanner,
            title : 'Programmable Money For The Internet',
            desc : 'IcoCoin is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins which underpin a thriving ecosystem that brings DeFi to the masses.',
        }    
    }
};
</script>
            
            