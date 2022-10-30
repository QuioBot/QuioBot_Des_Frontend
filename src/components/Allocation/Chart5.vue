<template>
    <section class="section-token style-7" id="token">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title}}</h2>
                        <p class="fs-17">{{desc}}</p>

                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="token-content center">
                        <h5 class="title">{{title2}}</h5>
                        <div class="chart-bar">
                            <PieChart v-bind:chartData="this.state.chartData" v-bind:chartOptions="this.state.chartOptions"  :width="350" :height="350" />
                        </div>
                    </div>
                   
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="token-content center s2">
                        <h5 class="title">{{title3}}</h5>
                        <div class="chart-bar">
                            <PieChart v-bind:chartData="this.state.chartData2" v-bind:chartOptions="this.state.chartOptions2" :width="350" :height="350" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { dataChart } from '../../fake-data/data-chart';
import PieChart from '../Allocation/PieChart/PieChart.vue';
import { defineComponent } from 'vue'
export default defineComponent ({
  name: "Chart",
  components: {
        PieChart,
    },
  data (){
        return {
            dataChart,
            title: 'Token Allocation & Funds Distribution',
            desc:'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
            title2: 'Distribution',
            title3: 'Funding Allocation',
            state: {
                chartData: {
                datasets: [
                    {
                    data: [25, 25, 10 , 10 , 10 , 20],
                    backgroundColor: ['#3D88FB','#5637C8','#00D199','#C87B07','#A92535','#9116CD'], 
                    }
                ],
                labels: [
                    'Marketing',
                    'Bussiness Development',
                    'Product Development',
                    'Reserve',
                    'Reserve',
                    'Token Sale'
                ],
                },
                chartOptions: {
                    responsive: false,
                    legend: {
                    display: false
                    }
                },
                chartData2: {
                datasets: [
                    {
                    data: [25, 25, 10 , 10 , 10 , 20],
                    backgroundColor: ['#3D88FB','#5637C8','#00D199','#C87B07','#A92535','#9116CD'], 
                    }
                ],
                labels: [
                    'Marketing',
                    'Bussiness Development',
                    'Product Development',
                    'Reserve',
                    'Reserve',
                    'Token Sale'
                ],
                },
                chartOptions2: {
                    responsive: false,
                    legend: {
                    display: false
                    }
                }
            }
        }    
    },
});
</script>