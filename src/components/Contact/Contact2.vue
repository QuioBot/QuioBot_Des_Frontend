
<template>
    <section class="join-now" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="join-now__main">
                        <h3>{{title}}</h3>
                        <p>{{subtitle}}</p>
                        <div class="join-now__button">
                            <a class="btn-action style-2" href="/contact"><span class="effect">JOIN COMMUNITY</span></a>
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
            subtitle : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed pulvinar nisl amet, viverra nulla ut. Aliquet nunc justo, bibendum nisl varius fringilla odio eu. Ut et, nullam tristique at ultrices. Viverra eget ultrices risus risus massa adipiscing adipiscing. Integer tempus aliquam vitae urna, ipsum mattis hendrerit quam.',
        }    
    }
};
</script>
            
            