
<template>
    <div>
        <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
            <v-container v-else class="my-2">
                <form @submit.prevent="addCities" autocomplete="off">
                    <v-layout row wrap>
        
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-text-field v-model="cities.city_name" type="text" :label="$store.getters.language.data.cities.city_name" dense
                            class="mx-1"  filled required>
                        </v-text-field>
                    </v-flex>
                
                        <v-flex xs12 lg2 xl2 md2 sm4>
                            <v-btn  color="primary" :loading="loading_btn" type="submit" x-large>{{$store.getters.language.data.cities.add_btn}}</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
<v-layout row wrap mt-5>
    <v-flex xs12>
        <v-card>
            <v-card-text>
                <v-data-table :headers="headers"  show-select v-model="selected_rows"    :search="search" :items="rows" class="elevation-0"
                    item-key="city_id">
                    <template v-slot:[`item.city_id`]="{ item }">
                        <div>
                            <v-btn icon :to="'/cities-list/'+item.city_id"  color="teal" class="mx-1">
                            <v-icon> mdi-pencil-outline </v-icon>
                            </v-btn>
                            <v-btn color="error" icon class="mx-1" @click="selectCities(item)" >
                                <v-icon> mdi-delete-outline </v-icon>
                            </v-btn>
                        </div>
                    </template>
                </v-data-table>
            </v-card-text>
            
            <v-card-actions v-if="selected_rows.length > 0">
                <v-btn color="error" @click="deleteCitiesList">{{$store.getters.language.data.cities.delete_list_btn}}</v-btn>
            </v-card-actions>
                
        </v-card>
    </v-flex>
</v-layout>
</v-container>
<v-dialog v-model="delete_dialog" persistent max-width="400">
    <v-card>
        <v-card-title>
            {{$store.getters.language.data.cities.delete_question}}
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text class="elevation-0" @click="delete_dialog = false">
                {{$store.getters.language.data.cities.cancel_btn}}
            </v-btn>
            <v-btn color="error" class="elevation-0" @click="deleteCities(selected_cities.city_id)">
                {{$store.getters.language.data.cities.yes_btn}}
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
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
                search: '',
                loading : true,
                loading_btn:false,
                selected_rows : [],
                snackbar: {
                    value: false,
                    text: '',
                    color: ''
                },
                rows:[],
                selected_cities : {},
                delete_dialog: false,
                headers: [

                    
                        { 
                            text: this.$store.getters.language.data.cities.city_name,
                            align: 'start',
                            sortable: true,
                            value: 'city_name',
                        },   {
            text: this.$store.getters.language.data.actions,
            align: 'start',
            sortable: true,
            value: 'city_id',
        }
                ],
            }
        },
        computed: {
            
            
        },
        mounted(){
            this.readCities();
        },
        methods: {
            addCities() {
                this.loading_btn = true
                requests.createCities(this.cities).then(r => {
                    if (r.status == 200) {
                        this.cities = {}
                        this.rows.push(
                            r.data.new_data
                        )
                        this.snackbar = {
                            value: true,
                            text: 'Cities Added',
                            color: 'success'
                        }
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Fail to add Cities',
                            color: 'error'
                        }
                    }
                })
                .finally(() => {
                    this.loading_btn = false
                })

            },
            deleteCities(city_id) {
                requests.deleteCities(city_id).then(r => {
                    this.delete_dialog = false
                    if (r.status == 200) {
                        this.rows = this.rows.filter(f =>{
                            return f.city_id != city_id
                        })
                        this.snackbar = {
                            value: true,
                            text: 'Cities Deleted',
                            color: 'success'
                        }
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Delete Faild',
                            color: 'error'
                        }
                    }
                })
            },
            
            deleteCitiesList() {
                let ids = this.selected_rows.map(m => m.city_id)
                requests.deleteCitiesList(ids).then(r => {
                    if (r.status == 200) {
                        this.rows = this.rows.filter(f =>{  
                            return ids.indexOf(f.city_id) == -1
                        })
                        this.snackbar = {
                            value: true,
                            text: this.selected_rows.length+' Cities Deleted',
                            color: 'success'
                        }
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Delete Faild',
                            color: 'error'
                        }
                    }
                })
            },
            
            readCities() {
                this.loading = true
                requests.getAllCities().then(r => {
                    if (r.status == 200) {
                        this.rows = r.data.rows
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
            selectCities(i) {
                this.selected_cities = i
                this.delete_dialog = true
            },
        },
    }
</script>
                    