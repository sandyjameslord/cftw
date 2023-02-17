<template>

</template>

<script>
import { parseCSS } from '../middleware/parseData';
export default {
    data() {
        return {
            id: "",
            data: [],
        }
    },
    methods: {
        
        displayDrewCode() {
            setTimeout(() => {
                let drewCodeForDisplayHTML = sessionStorage.getItem("dadCodeForDisplayHTML");
                let drewCodeForDisplayCSS = sessionStorage.getItem("dadCodeForDisplayCSS");
            
                let body = document.body
                body.innerHTML = drewCodeForDisplayHTML
                
                let rlz = parseCSS(drewCodeForDisplayCSS)

                let rules = rlz
                for (let i = 0; i < rules.length; i++) {
                    let rule = rules[i]
                    document.styleSheets[1].insertRule(rule, 0)
                }
                this.executeDrewJavaScript()
                let newRule = "* {}"
                document.styleSheets[1].insertRule(newRule, 0)
                
            }, 100)
        },
        executeDrewJavaScript() {
            let drewCodeForDisplayJavaScript = sessionStorage.getItem("dadCodeForDisplayJavaScript");
            
            if (drewCodeForDisplayJavaScript.includes("this")) {
                console.log("Unable to process requests using `this`.")
            }
            else {
                eval(drewCodeForDisplayJavaScript)
            }
            sessionStorage.setItem("mockConsoleData", [])
            sessionStorage.setItem("mockConsoleData", this.data)
        },

    },

    mounted() {
        this.displayDrewCode()
    }
}
</script>

<style scoped>

</style>