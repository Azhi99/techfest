
<template>
    <div>
        <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
        <v-container v-else class="my-2">
            <form @submit.prevent="updateVisitorCheckIn" autocomplete="off">
                <v-layout row wrap>
        
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-select class="mx-1" clearable  :items="visitors" v-model="visitor_check_in.visitor_id" dense  filled item-text="visitor_id"
                                    item-value="visitor_id" :return-object="false" :label="$store.getters.language.data.visitor_check_in.visitor_id">
                        </v-select>
                    </v-flex>
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-text-field v-model="visitor_check_in.visitor_check_in_date_time" type="datetime-local" :label="$store.getters.language.data.visitor_check_in.visitor_check_in_date_time" dense
                            class="mx-1"  filled required >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 lg2 xl2 md2 sm4>
                        <v-btn  color="success" x-large   type="submit">{{$store.getters.language.data.visitor_check_in.update_btn}}</v-btn>
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
    import requests from './../../requests/visitor_check_in.request.js'
    export default {
        data() {
            return {
                visitor_check_in: {},
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
            
                    undefined(){
                        return this.$store.getters.undefined_list
                    },
                    
        },
        mounted(){
            this.id = this.$route.params.id
            this.getOneVisitorCheckIn()
        },
        methods: {
            getOneVisitorCheckIn() {
                this.loading = true
                requests.getOneVisitorCheckIn(this.id).then(r =>{
                    if (r.status == 200) {
                        this.visitor_check_in = r.data.row
                        this.loading = false
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Fail to read VisitorCheckIn',
                            color: 'error'
                        }
                    }
                })
                .catch(e => {
                    this.snackbar = {
                        value: true,
                        text: 'Fail to read VisitorCheckIn',
                        color: 'error'
                    }
                })
                .finally(() => {
                    this.loading = false
                })
            },
            updateVisitorCheckIn() {
                this.loading = true
                requests.updateVisitorCheckIn(this.id,this.visitor_check_in).then(r => {
                    if (r.status == 200) {
                        this.snackbar = {
                            value: true,
                            text: 'VisitorCheckIn Updated',
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
                    