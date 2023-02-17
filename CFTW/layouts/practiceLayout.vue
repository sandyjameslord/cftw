<template>

</template>

<script>
export default {
    data() {
        return {
            id: "",
        }
    },
    methods: {
        displayDrewCode() {
            let drewCodeForDisplayHTML = sessionStorage.getItem("practiceCodeForDisplayHTML");
            let drewCodeForDisplayCSS = sessionStorage.getItem("practiceCodeForDisplayCSS");
            
            let body = document.body
            body.innerHTML = drewCodeForDisplayHTML
            let rules = drewCodeForDisplayCSS.split(`\n`)
            for (let i = 0; i < rules.length; i++) {
                document.styleSheets[1].insertRule(rules[i], 0)
            }
            this.executeDrewJavaScript()
        },
        executeDrewJavaScript() {
            
            let drewCodeForDisplayJavaScript = sessionStorage.getItem("practiceCodeForDisplayJavaScript");
            if (drewCodeForDisplayJavaScript.includes("this")) {
                console.log("Unable to process requests using `this`.")
            }
            else {
                eval(drewCodeForDisplayJavaScript)
            }
        },

    },

    mounted() {
        this.displayDrewCode()
    }
}
</script>

<style scoped>

</style>