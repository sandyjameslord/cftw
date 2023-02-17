const parseCSS = function parseCSS(cssData) {
    let rules = cssData.split("}")
    let parsedRules = []
    for (let i = 0; i < rules.length; i++) {
        let rule = rules[i].trim() + "}"
        if (rule === "}") {
            rule = "* {}"
        }
        parsedRules.push(rule)
    }
    return parsedRules
}

const formatTextareas = function formatTextareas() {
    let textareas = document.getElementsByTagName("textarea")
    for (let i = 0; i < textareas.length; i++) {

    }
}

module.exports = {
    parseCSS,
    formatTextareas
}