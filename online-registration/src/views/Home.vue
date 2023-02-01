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
  </div>
</template>

<script>
    import axios from 'axios'
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
                loading_register: false
            }
        },
        mounted() {
            axios.get('http://localhost:5000/cities/all')
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
                    
                } else {
                    
                }
            }
        }
    }
</script>

