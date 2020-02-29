<template>
    <div>
        <b-col class="p-2">
            <b-card :title="name" img-src="https://picsum.photos/300/300/?image=41">
                <b-card-text>
                    {{description}}
                </b-card-text>
                <b-button variant="primary" @click="test">More info</b-button>
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