
<template>
    <div>
        <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
            <v-container v-else class="my-2">
                <form @submit.prevent="addVisitorCheckIn" autocomplete="off">
                    <v-layout row wrap>

    
                        <v-flex xs12 lg2 xl2 md3 sm4>
                            <v-autocomplete class="mx-1" clearable  :items="visitors" v-model="visitor_check_in.visitor_id" dense  filled item-text="visitor_full_name"
                                item-value="visitor_id" :return-object="false" :label="$store.getters.language.data.visitors.visitor_full_name">
                            </v-autocomplete>
                        </v-flex>
                
                    <v-flex xs12 lg2 xl2 md3 sm4>
                        <v-text-field v-model="visitor_check_in.visitor_check_in_date_time" type="datetime-local" :label="$store.getters.language.data.visitor_check_in.visitor_check_in_date_time" dense
                            class="mx-1"  filled required>
                        </v-text-field>
                    </v-flex>
                
                        <v-flex xs12 lg2 xl2 md2 sm4>
                            <v-btn  color="primary" :loading="loading_btn" type="submit" x-large>{{$store.getters.language.data.visitor_check_in.add_btn}}</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
<v-layout row wrap mt-5>
    <v-flex xs12>
        <v-card>
            <v-card-text>
                <v-text-field label="Search" v-model="search"></v-text-field>
                <v-data-table :headers="headers"  show-select v-model="selected_rows"    :search="search" :items="rows" class="elevation-0"
                    item-key="visitor_check_in_id">
                    <template v-slot:[`item.visitor_check_in_id`]="{ item }">
                        <div>
                            <v-btn icon :to="'/visitor_check_in-list/'+item.visitor_check_in_id"  color="teal" class="mx-1">
                            <v-icon> mdi-pencil-outline </v-icon>
                            </v-btn>
                            <v-btn color="error" icon class="mx-1" @click="selectVisitorCheckIn(item)" >
                                <v-icon> mdi-delete-outline </v-icon>
                            </v-btn>
                        </div>
                    </template>
                </v-data-table>
            </v-card-text>
            
            <v-card-actions v-if="selected_rows.length > 0">
                <v-btn color="error" @click="deleteVisitorCheckInList">{{$store.getters.language.data.visitor_check_in.delete_list_btn}}</v-btn>
            </v-card-actions>
                
        </v-card>
    </v-flex>
</v-layout>
</v-container>
<v-dialog v-model="delete_dialog" persistent max-width="400">
    <v-card>
        <v-card-title>
            {{$store.getters.language.data.visitor_check_in.delete_question}}
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text class="elevation-0" @click="delete_dialog = false">
                {{$store.getters.language.data.visitor_check_in.cancel_btn}}
            </v-btn>
            <v-btn color="error" class="elevation-0" @click="deleteVisitorCheckIn(selected_visitor_check_in.visitor_check_in_id)">
                {{$store.getters.language.data.visitor_check_in.yes_btn}}
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
    import requests from './../../requests/visitor_check_in.request.js'
    import visitors_requests from './../../requests/visitors.request.js'
    export default {
        data() {
            return {
                visitor_check_in: {},
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
                visitors:[],
                selected_visitor_check_in : {},
                delete_dialog: false,
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
                            text: this.$store.getters.language.data.visitor_check_in.visitor_check_in_date_time,
                            align: 'start',
                            sortable: true,
                            value: 'visitor_check_in_date_time',
                        },   {
            text: this.$store.getters.language.data.actions,
            align: 'start',
            sortable: true,
            value: 'visitor_check_in_id',
        }
                ],
            }
        },
        computed: {
            
        },
        mounted(){
            this.readVisitorCheckIn();
            this.readVisitors()
        },
        methods: {
            readVisitors() {
                visitors_requests.getAllVisitors().then(r => {
                    
                    this.visitors = r.data.rows
                    
                })
            },
            addVisitorCheckIn() {
                this.loading_btn = true
                requests.createVisitorCheckIn(this.visitor_check_in).then(r => {
                    if (r.status == 200) {
                        this.visitor_check_in = {}
                        this.rows.push(
                            r.data.new_data
                        )
                        this.snackbar = {
                            value: true,
                            text: 'VisitorCheckIn Added',
                            color: 'success'
                        }
                    } else {
                        this.snackbar = {
                            value: true,
                            text: 'Fail to add VisitorCheckIn',
                            color: 'error'
                        }
                    }
                })
                .finally(() => {
                    this.loading_btn = false
                })

            },
            deleteVisitorCheckIn(visitor_check_in_id) {
                requests.deleteVisitorCheckIn(visitor_check_in_id).then(r => {
                    this.delete_dialog = false
                    if (r.status == 200) {
                        this.rows = this.rows.filter(f =>{
                            return f.visitor_check_in_id != visitor_check_in_id
                        })
                        this.snackbar = {
                            value: true,
                            text: 'VisitorCheckIn Deleted',
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
            
            deleteVisitorCheckInList() {
                let ids = this.selected_rows.map(m => m.visitor_check_in_id)
                requests.deleteVisitorCheckInList(ids).then(r => {
                    if (r.status == 200) {
                        this.rows = this.rows.filter(f =>{  
                            return ids.indexOf(f.visitor_check_in_id) == -1
                        })
                        this.snackbar = {
                            value: true,
                            text: this.selected_rows.length+' VisitorCheckIn Deleted',
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
            
            readVisitorCheckIn() {
                this.loading = true
                requests.getAllVisitorCheckIn().then(r => {
                    if (r.status == 200) {
                        this.rows = r.data.rows
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
            selectVisitorCheckIn(i) {
                this.selected_visitor_check_in = i
                this.delete_dialog = true
            },
        },
    }
</script>
                    