<template>
    <div>
        <b-container>
            <b-row>
                <b-card :title="name" v-bind:img-src="`https://picsum.photos/600/600/?image=${id}`">
                    <b-card-text>
                        {{description}}
                    </b-card-text>
                    <b-button variant="primary" @click="test">Make a reservation</b-button>
                </b-card>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'ResourceDetails',
        props: [
            'id', 'name', 'description'
        ],
        mounted() {
            this.id = this.$route.params.id;
            this.fetchData();
        },
        methods: {
            test(evt) {
                evt.preventDefault()
                alert('Reservation created for: ' + this.name)
            },
            async fetchData() {
                axios
                    .get('http://localhost:8081/resources/' + this.id)
                    .then(response => (this.name = response.data.name))
            }
        }
    }
</script>