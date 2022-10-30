<template>
    <section class="section-token" id="token">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="token-box">
                        <h3 class="title">{{title1}}</h3>
                        <p class="text">{{desc}}</p>

                        <div class="chart-bar">
                            <PieChart v-bind:chartData="this.state.chartData2" v-bind:chartOptions="this.state.chartOptions2" />
                        </div>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="token-box s2">
                        <h3 class="title">{{title2}}</h3>
                        <p class="text">{{desc2}} </p>

                        <div class="chart-bar">
                            <PieChart v-bind:chartData="this.state.chartData2" v-bind:chartOptions="this.state.chartOptions2" />
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
            title1: 'Token Distribution',
            title2: 'Token Allocation',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla.',
            desc2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla.',
            state: {
                chartData: {
                datasets: [
                    {
                   data: [40, 30, 10 , 10 , 10 ],
                    backgroundColor: [
                        '#1998CA',
                        '#343EBF',
                        '#A00763',
                        '#DEAD2F',
                        '#1CA151'
                    ], 
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
                   data: [40, 30, 10 , 10 , 10 ],
                    backgroundColor: [
                        '#1998CA',
                        '#343EBF',
                        '#A00763',
                        '#DEAD2F',
                        '#1CA151'
                    ], 
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