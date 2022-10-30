<template>
    <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <h2 className="title">{{title}}</h2>
                            <p className="desc">{{desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>

export default {
    name: 'PageTitle',
    props: ['title','desc']

}
</script>