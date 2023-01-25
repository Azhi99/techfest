
<template>
    <div>
        <v-container>
        <v-layout row wrap mt-4>
            
        </v-layout>
        </v-container>
    </div>
</template>
<script>
  export default {
    computed: {
      navigation_links() {
          return [
            
                {
                    path : '/users-list',
                    title : 'users',
                },
        
                {
                    path : '/visitors-list',
                    title : 'visitors',
                },
        
                {
                    path : '/visitor_check_in-list',
                    title : 'visitor_check_in',
                },
        
        ]
      },
    },
  }
</script>