<template>
  <section class="section-token mobie-pb0" id="token">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="block-text center">
                      <h3 class="heading">{{title}}</h3>
                      <p class="fs-17">{{desc}}</p>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="token-box" data-aos="fade-up" data-aos-duration="1000">
                      <h3 class="title">{{title2}}</h3>

                      <div class="chart-bar">
                        <PieChart v-bind:chartData="this.state.chartData" v-bind:chartOptions="this.state.chartOptions" :width="300" :height="300" />
                      </div>
                      <div class="bottom-chart">
                          <div class="box" v-for="item in dataChart.slice(0,5)" :key="item.id">
                              <div class="left">
                                  <div class="color"></div>
                                  <p class="name fs-20">{{item.name}}</p>
                              </div>
                              <h5 class="numb">{{item.numb}}</h5>
                          </div>  
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="token-box s2" data-aos="fade-up" data-aos-duration="1000">
                      <h3 class="title">{{title3}}</h3>

                      <div class="chart-bar">
                        <PieChart v-bind:chartData="this.state.chartData2" v-bind:chartOptions="this.state.chartOptions2" :width="300" :height="300" />
                      </div>

                      <div class="bottom-chart">
                          <div class="box" v-for="item in dataChart.slice(5,10)" :key="item.id">
                              <div class="left">
                                  <div class="color"></div>
                                  <p class="name fs-20">{{item.name}}</p>
                              </div>
                              <h5 class="numb">{{item.numb}}</h5>
                          </div> 
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
            desc : 'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
            title2:'Distribution',
            title3:'Funding Allocation',
            state: {
                chartData: {
                     chart: {
                    type: 'donut',
                    },
                datasets: [
                    {
                    data: [40, 30, 10, 10, 10],
                    backgroundColor: ['#32B6EA', '#1CA151', '#DEAD2F', '#A00763', '#343EBF']
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
                    data: [40, 30, 10, 10, 10],
                    backgroundColor: ['#32B6EA', '#1CA151', '#DEAD2F', '#A00763', '#343EBF']
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

