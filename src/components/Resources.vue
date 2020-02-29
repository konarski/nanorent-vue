<template>
    <div>
        <b-container>
            <b-row class="p-2">
                <b-button v-b-modal.modal-1 variant="success">New resource</b-button>

                <b-modal id="modal-1" title="Create new resource" hide-footer>
                    <b-form @submit="onSubmit" @reset="onReset">
                        <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                            <b-form-input
                                    id="input-1"
                                    v-model="form.name"
                                    required
                                    placeholder="Enter resource name"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                            <b-form-input
                                    id="input-2"
                                    v-model="form.description"
                                    required
                                    placeholder="Enter resource description"
                            ></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="primary" class="m-1">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </b-modal>

            </b-row>
            <b-row align-v="center">
                <Resource resourceItem="res"
                          v-for="res in resources"
                          :key="res.id"
                          :id="res.id"
                          :name="res.name"
                          :description="res.description"
                />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Resource from "./Resource";

    export default {
        name: 'Resources',
        components: {Resource},
        comments: {
            Resource
        },
        mounted() {
            this.fetchData();
        },
        data() {
            return {
                form: {
                    name: '',
                    description: ''
                },
                resources: []
            }
        },
        methods: {
            async fetchData() {
                this.resources = [
                    {id: 1, name: 'Book1', description: 'Lorem ipsume djrig '},
                    {id: 2, name: 'Book2', description: 'xxwrefer fwewerg erg ergxx'},
                    {id: 5, name: 'Book5', description: 'xxxx fw efwe wef we we '}
                ];
            },
            onSubmit(evt) {
                evt.preventDefault()
                this.resources.push({id:4444, name: this.form.name, description: this.form.description})
            },
            onReset(evt) {
                evt.preventDefault()
                this.form.name = ''
                this.form.description = ''
            }
        }
    }
</script>

