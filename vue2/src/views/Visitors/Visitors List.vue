<template>
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
                        text: this.$store.getters.language.data.visitors.visitor_code,
                        align: 'start',
                        sortable: true,
                        value: 'visitor_code',
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
    }
}


</script>
