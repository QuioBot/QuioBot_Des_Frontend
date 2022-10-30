<template>
    <lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
    >
        <a
            v-for="item in dataGallery.slice(5,19)" :key="item.id"
            :data-src="item.link"
        >
            <img  :src="item.link" />
        </a>
    </lightgallery>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import { dataGallery } from '../../fake-data/data-gallery';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery= null;

export default {
    name: 'GalleryTwoColumn',
    components: {
        Lightgallery,
    },
    watch: {
        items() {
            this.$nextTick(() => {
                lightGallery.refresh();
            });
        },
    },
    data: () => ({
        
        plugins: [lgZoom],
        dataGallery,
    }),
    methods: {
        onInit: (detail) => {
            lightGallery = detail.instance;
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
};
</script>

<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');
</style>
