
<template>
    <div>
        <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
        <v-container v-else class="my-2">
            <form @submit.prevent="updateCities" autocomplete="off">
                <v-layout row wrap>
        
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-text-field v-model="cities.city_name" type="text" :label="$store.getters.language.data.cities.city_name" dense
                            class="mx-1"  filled required >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 lg2 xl2 md2 sm4>
                        <v-btn  color="success" x-large   type="submit">{{$store.getters.language.data.cities.update_btn}}</v-btn>
                    </v-flex>
                </v-layout>
            </form>
        </v-container>
    <v-snackbar v-model="snackbar.value" :color="snackbar.color">
        {{snackbar.text}}
    </v-snackbar>
</div>
</template>
<script>
    import requests from './../../requests/cities.request.js'
    export default {
        data() {
            return {
                cities: {},
                id: '',
                loading: true,
                snackbar: {
                    value: false,
                    text: '',
                    color: ''
                },
            }
        },
        computed: {
            
        },
        mounted(){
            this.id = this.$route.params.id
            this.getOneCities()
        },
        methods: {
            getOneCities() {
                this.loading = true
                requests.getOneCities(this.id).then(r =>{
                    if (r.status == 200) {
                        this.cities = r.data.row
                        this.loading = false
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Fail to read Cities',
                            color: 'error'
                        }
                    }
                })
                .catch(e => {
                    this.snackbar = {
                        value: true,
                        text: 'Fail to read Cities',
                        color: 'error'
                    }
                })
                .finally(() => {
                    this.loading = false
                })
            },
            updateCities() {
                this.loading = true
                requests.updateCities(this.id,this.cities).then(r => {
                    if (r.status == 200) {
                        this.snackbar = {
                            value: true,
                            text: 'Cities Updated',
                            color: 'success'
                        }
                        this.loading = false
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Update Faild',
                            color: 'error'
                        }
                        this.loading = false
                    }
                })
                .catch(e => {
                    this.snackbar = {
                        value: true,
                        text: 'Update Faild',
                        color: 'error'
                    }
                    this.loading = false
                })
                .finally(() => {
                    this.loading = false
                })
            },
        },
    }
</script>
                    