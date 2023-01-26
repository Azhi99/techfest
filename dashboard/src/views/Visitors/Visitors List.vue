<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-text>
                        <v-text-field label="Search" v-model="search"></v-text-field>
                        <v-data-table :headers="headers"  show-select v-model="selected_rows"  :search="search" :items="rows" class="elevation-0"
                            item-key="visitor_id">
                            <template v-slot:[`item.visitor_id`]="{ item }">
                                <div>
                                    <v-btn icon :to="'/visitors-list/'+item.visitor_id"  color="teal" class="mx-1">
                                    <v-icon> mdi-pencil-outline </v-icon>
                                    </v-btn>
                                    <v-btn color="error" icon class="mx-1" @click="selectVisitors(item)" >
                                        <v-icon> mdi-delete-outline </v-icon>
                                    </v-btn>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card-text>
                    
                    <v-card-actions v-if="selected_rows.length > 0">
                        <v-btn color="error" @click="deleteVisitorsList">{{$store.getters.language.data.visitors.delete_list_btn}}</v-btn>
                    </v-card-actions>
                        
                </v-card>
            </v-flex>
        </v-layout>
        <v-dialog v-model="delete_dialog" persistent max-width="400">
            <v-card>
                <v-card-title>
                    {{$store.getters.language.data.visitors.delete_question}}
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text class="elevation-0" @click="delete_dialog = false">
                        {{$store.getters.language.data.visitors.cancel_btn}}
                    </v-btn>
                    <v-btn color="error" class="elevation-0" @click="deleteVisitors(selected_visitors.visitor_id)">
                        {{$store.getters.language.data.visitors.yes_btn}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar.value" :color="snackbar.color">
            {{snackbar.text}}
        </v-snackbar>
    </v-container>


</template>

<script>
import requests from '../../requests/visitors.request'
export default {
    data() {
        return {
            rows: [],
            search: '',
            loading: false,
            selected_rows: [],
            selected_visitors : {},
            delete_dialog: false,
            snackbar: {
                value: false,
                text: '',
                color: ''
            },
            headers: [
                { 
                    text: this.$store.getters.language.data.visitors.visitor_full_name,
                    align: 'start',
                    sortable: true,
                    value: 'visitor_full_name',
                },
                { 
                    text: this.$store.getters.language.data.visitors.visitor_phone,
                    align: 'start',
                    sortable: true,
                    value: 'visitor_phone',
                },
                { 
                    text: this.$store.getters.language.data.cities.city_name,
                    align: 'start',
                    sortable: true,
                    value: 'city_name',
                },
                { 
                    text: this.$store.getters.language.data.visitors.visitor_code,
                    align: 'start',
                    sortable: true,
                    value: 'visitor_code',
                }, 
                { 
                    text: this.$store.getters.language.data.users.user_name,
                    align: 'start',
                    sortable: true,
                    value: 'user_name',
                },     
                {
                    text: this.$store.getters.language.data.actions,
                    align: 'start',
                    sortable: true,
                    value: 'visitor_id',
                }
            ],
        }
    },
    mounted() {
        this.readVisitors();
    },

    methods: {

        deleteVisitors(visitor_id) {
            requests.deleteVisitors(visitor_id).then(r => {
                this.delete_dialog = false
                if (r.status == 200) {
                    this.rows = this.rows.filter(f =>{
                        return f.visitor_id != visitor_id
                    })
                    this.snackbar = {
                        value: true,
                        text: 'Visitors Deleted',
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
        
        deleteVisitorsList() {
            let ids = this.selected_rows.map(m => m.visitor_id)
            requests.deleteVisitorsList(ids).then(r => {
                if (r.status == 200) {
                    this.rows = this.rows.filter(f =>{  
                        return ids.indexOf(f.visitor_id) == -1
                    })
                    this.snackbar = {
                        value: true,
                        text: this.selected_rows.length+' Visitors Deleted',
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
        readVisitors() {
            this.loading = true
            requests.getAllVisitors().then(r => {
                if (r.status == 200) {
                    this.rows = r.data.rows
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
        selectVisitors(i) {
            this.selected_visitors = i
            this.delete_dialog = true
        },
    }
}


</script>
