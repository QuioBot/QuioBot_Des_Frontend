<template>
    <section class="section-token style-7 mobie-pb0" id="token">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title}}</h2>
                        <p class="fs-20">{{desc}}</p>

                    </div>
                </div>
                <div class="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                    <div class="chart-bar">
                        <PieChart2 v-bind:chartData="this.state.chartData" v-bind:chartOptions="this.state.chartOptions"  :width="591" :height="591" />
                    </div>
                </div>
                <div class="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                <div class="chart-bar">
                        <PieChart2 v-bind:chartData="this.state.chartData" v-bind:chartOptions="this.state.chartOptions"  :width="591" :height="591" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { dataChart } from '../../fake-data/data-chart';
import PieChart2 from '../Allocation/PieChart/PieChart2.vue';
import { defineComponent } from 'vue'
export default defineComponent ({
  name: "Chart",
  components: {
        PieChart2,
    },
  data (){
        return {
            dataChart,
            title: 'TOKEN SALES',
            desc:'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
            state: {
                chartData: {
                datasets: [
                    {
                    data: [ 11, 16, 7, 3,14,],
                    backgroundColor: ['rgb(255, 99, 132)','rgb(75, 192, 192)','rgb(255, 205, 86)','rgb(201, 203, 207)','rgb(54, 162, 235)']
                    }
                ],
                labels: ['Red', 'Green', 'Yellow', 'Grey','Blue' ],
                },
                chartOptions: {
                responsive: false
                },
                chartData2: {
                datasets: [
                    {
                    data: [ 11, 16, 7, 3,14,],
                    backgroundColor: ['rgb(255, 99, 132)','rgb(75, 192, 192)','rgb(255, 205, 86)','rgb(201, 203, 207)','rgb(54, 162, 235)']
                    }
                ],
                labels: ['Red', 'Green', 'Yellow', 'Grey','Blue' ],
                },
                chartOptions2: {
                responsive: false
                }
            }
        }    
    },
});
</script>