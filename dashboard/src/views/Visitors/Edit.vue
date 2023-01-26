
<template>
    <div>
        <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
        <v-container v-else class="my-2">
            <form @submit.prevent="updateVisitors" autocomplete="off">
                <v-layout row wrap>
        
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-text-field v-model="visitors.visitor_full_name" type="text" :label="$store.getters.language.data.visitors.visitor_full_name" dense
                            class="mx-1"  filled required >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-text-field v-model="visitors.visitor_phone" type="text" :label="$store.getters.language.data.visitors.visitor_phone" dense
                            class="mx-1"  filled required >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-text-field v-model="visitors.visitor_code" type="text" :label="$store.getters.language.data.visitors.visitor_code" dense
                            class="mx-1"  filled required >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 lg2 xl2 md2 sm4>
                        <v-btn  color="success" x-large   type="submit">{{$store.getters.language.data.visitors.update_btn}}</v-btn>
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
    import requests from './../../requests/visitors.request.js'
    export default {
        data() {
            return {
                visitors: {},
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
            this.getOneVisitors()
        },
        methods: {
            getOneVisitors() {
                this.loading = true
                requests.getOneVisitors(this.id).then(r =>{
                    if (r.status == 200) {
                        this.visitors = r.data.row
                        this.loading = false
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Fail to read Visitors',
                            color: 'error'
                        }
                    }
                })
                .catch(e => {
                    this.snackbar = {
                        value: true,
                        text: 'Fail to read Visitors',
                        color: 'error'
                    }
                })
                .finally(() => {
                    this.loading = false
                })
            },
            updateVisitors() {
                this.loading = true
                requests.updateVisitors(this.id,this.visitors).then(r => {
                    if (r.status == 200) {
                        this.snackbar = {
                            value: true,
                            text: 'Visitors Updated',
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
                    