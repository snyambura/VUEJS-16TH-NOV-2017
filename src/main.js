
import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        message: "",
        seen: true,
        tasks :[
        {
            "name": "attend training"
        },
        {
            "name": "write today's daily blog"
        },
        {
            "name": "do the vuejs report"
        },
        {
            "name": "write a simple vuejs application"
        },
        {
            "name": "complete the styling challenge"
        }

    ],

        styleObject: {
            color: 'red',
            fontSize: '18px'
        }

    },
    methods: {
        deleteObject: function(index) {
            this.$delete(this.tasks, index);
        },

        Add() {
             if(this.message != "") {
                 //alert message
                this.tasks.unshift({
                     name: this.message
                    // status: false
                 });
                 this.message = '';
             }

        },



    watch: {
        displaymsg: function (val) {
            this.message1 = val + ' ' + this.message
        },

    },


    }
});