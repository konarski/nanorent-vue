<template>
    <div>
        <b-col class="p-2">
            <b-card :title="name" v-bind:img-src="`https://picsum.photos/300/300/?image=${id}`">
                <b-card-text>
                    {{description}}
                </b-card-text>
                <router-link :to="`/resources/${id}`"><b-button variant="primary">More info</b-button></router-link>
            </b-card>
        </b-col>


    </div>
</template>

<script>
    export default {
        name: 'Resource',
        props: [
            'id', 'name', 'description'
        ],
        methods: {
            test(evt) {
                evt.preventDefault()
                alert(this.name)
            }
        }
    }
</script>