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
            
            let drewCodeForDisplayHTML = sessionStorage.getItem("htmlCodeForDisplay");
            let drewCodeForDisplayCSS = sessionStorage.getItem("cssCodeForDisplay");
            
            let body = document.body
            body.innerHTML = drewCodeForDisplayHTML
            let rlz = parseCSS(drewCodeForDisplayCSS)

            let rules = rlz
            for (let i = 0; i < rules.length; i++) {
                let rule = rules[i]
                document.styleSheets[1].insertRule(rule, 0)
            }
            this.executeDrewJavaScript()
        },
        executeDrewJavaScript() {
            let drewCodeForDisplayJavaScript = sessionStorage.getItem("javaScriptCodeForDisplay");
            
            if (drewCodeForDisplayJavaScript.includes("this")) {
                console.log("Unable to process requests using `this`.")
            }
            else {
                let current_log = console.log;
                console.log = msg => {
                    if (msg !== undefined) this.data.push(msg);
                        current_log.apply(null, arguments);
                    }
                
                eval(drewCodeForDisplayJavaScript)
            }
            sessionStorage.setItem("mockConsoleData", [])
            sessionStorage.setItem("mockConsoleData", this.data)
        },

    },

    mounted() {
        setTimeout(()=> {this.displayDrewCode()}, 100)
        
    }
}
</script>

<style scoped>

</style>