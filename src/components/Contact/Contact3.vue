
<template>
    <section class="join-now style-3" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="join-now__main center">
                        <h6 class="sub-heading">{{subtitle}}</h6>
                        <h3 class="heading">{{title}}</h3>
                        <p>{{desc}}</p>
                        <div class="join-now__button">
                            <a class="btn-action style-3" href="/home-music"><span class="effect">Join our discord</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";

export default {
    name: "Feature",
     data (){
        return {
            title: 'Join our Community',
            subtitle : 'Community',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed pulvinar nisl amet, viverra nulla ut. Aliquet nunc justo, bibendum nisl varius fringilla odio eu. Ut et, nullam tristique at ultrices. Viverra eget ultrices risus risus massa adipiscing adipiscing. Integer tempus aliquam vitae urna, ipsum mattis hendrerit quam.'
        }    
    }
};
</script>
            
            