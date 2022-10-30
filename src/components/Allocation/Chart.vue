<template>
  <section class="allo-dist" id="sales">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="block-text center">
                      <h3>{{title}}</h3>
                      <p class="mt-12">{{subtitle}}</p>
                  </div>

                  <div class="allo-dist__main" data-aos="fade-up" data-aos-duration="800">
                      <div class="flat-tabs1">
                          <Tab />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import { dataChart } from '../../fake-data/data-chart';
import Tab from "../Tab/TabAlocation/Tab";

export default {
  name: "Chart",
  components: {
        Tab,
  },
  data (){
        return {
            dataChart,
            title: 'Token Allocation & Funds Distribution',
            subtitle : 'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
        }    
    },
};
</script>