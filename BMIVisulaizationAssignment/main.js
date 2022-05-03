new Vue({
    el: "#app",
    data() {
        return {
            value: "60",
            status:"Normal"
        }
    },
    methods: {
        warning: function() {
            if (this.value <= 30) {
                this.status = "Underweight";
            }
            else if(this.value <= 90){
                    this.status ="Normal";
            }
            else {
                this.status = "Overweight";
            }
        }
    },
});