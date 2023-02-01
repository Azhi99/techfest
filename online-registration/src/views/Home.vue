<template>
  <div class="text-center">
    <div style="width: 80%;" class="mx-auto">
        <h1 class="text-center my-4"> Techfest 2023 </h1>
        <v-form ref="formRegister" @submit.prevent>
            <v-text-field outlined dense label="Fullname" v-model.trim="fullname" :rules="rules.required" validate-on-blur></v-text-field>
            <v-text-field outlined dense label="Phone" max="11" v-model.trim="phone" :rules="rules.min" validate-on-blur></v-text-field>
            <v-autocomplete outlined dense label="City" :items="cities" item-text="city_name" item-value="city_id" v-model="city_id" :rules="rules.required" validate-on-blur></v-autocomplete>
            <v-btn block color="primary" :loading="loading_register" @click="register()"> Register </v-btn>
        </v-form>
    </div>
    <v-snackbar v-model="snackbar.value" :color="snackbar.color">
        {{snackbar.text}}
    </v-snackbar>
  </div>
</template>

<script>
    import axios from 'axios'
    if(process.env.NODE_ENV === 'development') axios.defaults.baseURL = 'http://localhost:5000/'
    else axios.defaults.baseURL = 'https://techfest2023.com/api'
    export default {
        name: 'Home',
        data() {
            return {
                cities: [],
                fullname: '',
                phone: '',
                city_id: null,
                rules: {
                    required: [value => !!value || 'Required.'],
                    min: [v => (v && v.length >= 11) || 'Min 11 digits'],
                },
                loading_register: false,
                snackbar: {
                    value: false,
                    text: '',
                    color: ''
                },
            }
        },
        mounted() {
            axios.get('cities/all')
                .then(res => {
                    this.cities = res.data.rows
                    this.city_id = 1
                })
                .catch(err => {
                    console.log(err)
                })
        },
        methods: {
            register() {
                if(this.$refs.formRegister.validate()) {
                    this.loading_register = true
                    axios.post('visitors/create', {
                        visitor_full_name: this.fullname,
                        visitor_phone: this.phone,
                        visitor_code: null,
                        city_id: this.city_id,
                    }).then((r) => {
                        this.snackbar = {
                            value: true,
                            text: 'Register success',
                            color: 'success'
                        }
                        this.fullname = ''
                        this.phone = ''
                        this.city_id = 1
                    }).catch((err) => {
                        this.snackbar = {
                            value: true,
                            text: err.response.data.message,
                            color: 'error'
                        }
                    }).finally(() => {
                        this.loading_register = false
                    })
                } else {
                    
                }
            }
        }
    }
</script>

