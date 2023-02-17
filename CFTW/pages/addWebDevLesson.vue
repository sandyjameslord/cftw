<template>
    <main id="body">
        <div id="everythingElse">
            <div id="title"></div>
            <div id="headerInfo"></div>
                <div id="outerContainer">
                <div class="side titleSide">
                    <div class="sideLocal htmlTitle">HTML</div>
                    <div class="sideLocal cssTitle">CSS</div>
                    <div class="sideLocal jsTitle">JS</div>
                </div>
                <div id="drewSide" class="side">
                    <textarea id="drewCodeHTML" class="localCode local drewsmall"></textarea>
                    <textarea id="drewCodeCSS" class="localCode local drewsmall"></textarea>
                    <textarea id="drewCodeJavaScript" class="localCode local drewsmall"></textarea>
                </div>
                <div id="codeDisplay">
                    <iframe id="drewDisplay" src="" class="localDisplay"></iframe>
                </div>
            </div>
            <div id="lowerButtonsContainer">
                <div ontouchstart="" @click="this.displayDrewCode">
                    <div class="button">
                        <nuxt-link to="">Run Your Code</nuxt-link>
                    </div>
                </div>
                
                
                <template v-if="$auth.$state.loggedIn">
                    <div ontouchstart="" @click="this.openAddSaveDetails">
                        <div class="button">
                        <nuxt-link to="">Save Your Code</nuxt-link>
                    </div>
                </div>
                </template>

                <template v-else>
                    <div ontouchstart="" @click="this.runAlert">
                        <div class="button">
                            <nuxt-link to="">Save Your Code</nuxt-link>
                        </div>
                    </div>
                </template>

                
            </div>
        </div>
        
        <div id="addSaveDetailsBox">
            <div id="detailsTitleBox">
                <div id="detailTitle">Finalize Details</div>
                <div id="detailDetail">Hint: Give your project unique details for better searchability.</div>
            </div>
            <div id="nameInputBox" class="inputBox">
                <div id="nameInputTitle" class="localTitle1" maxlength="30">Name:</div>
                <input type="text" name="" id="nameInput" class="localInput" placeholder="Add a name...">
            </div>
            <div id="lessonLevelInputBox" class="inputBox">
                <div id="lessonLevelInputTitle" class="localTitle1" maxlength="30">Lesson Level:</div>
                <input type="text" name="" id="lessonLevelInput" class="localInput" placeholder="Lesson level,(bia)(ABC) bAJS01...">
            </div>
            <div id="keyWordInputBox">
                <div id="keywordInputTitle" class="localTitle1">Add a Key Word:</div>
                <input type="text" name="" id="keywordInput" placeholder="Add a keyword">
                <div id="addKeyWord">
                    <div ontouchstart="" @click="this.addKeyWord">
                        <div class="button">
                            <nuxt-link to="">Add keyword</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="keyWordsDisplayBox">
                <div id="keywordsDisplayTitle" class="localTitle1">Keywords:</div>
                <div id="keyWordsDisplay"></div>
            </div>
            <div id="buttonsBox">
                
                <div ontouchstart="" @click="this.cancelSave">
                    <div class="button">
                        <nuxt-link to="">Cancel</nuxt-link>
                    </div>
                </div>
                <div ontouchstart="" @click="this.onSaveDrewCode">
                    <div class="button">
                        <nuxt-link to="">Submit</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { parseCSS } from '../middleware/parseData';
export default {
    
    data() {
        return {
            id: "",
            drewCurrentCode: ""
        }
    },
    components: {

    },
    async asyncData({ $axios }) {
      try {
        let drewSaveContentsResponse = await $axios.$get("/api/drewSaveContents");
        return {
          drewSaveContents: drewSaveContentsResponse.drewSaveContents
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        
        runAlert() {
            alert(`Create an account and login to save your code for later.`)
        },
        addKeyWord() {
            let input = document.getElementById("keywordInput")
            let display = document.getElementById("keyWordsDisplay")
            let text = "\t" + display.innerText
            console.log(display.innerText)
            if (display.innerText == "") {
                text = text += input.value
            }
            else {
                text = text += ", " + input.value
            }

            display.innerText = text
            input.value = ""
        },
        cancelSave() {
            let everythingElse = document.getElementById("everythingElse")
            everythingElse.style.opacity = "1.0"

            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            drewCodeHTML.removeAttribute("disabled")
            drewCodeCSS.removeAttribute("disabled")
            drewCodeJavaScript.removeAttribute("disabled")

            let addSaveDetailsBox = document.getElementById("addSaveDetailsBox")
            addSaveDetailsBox.style.zIndex = "-1001"

            let display = document.getElementById("keyWordsDisplay")
            display.innerText = ""
        },
        openAddSaveDetails() {
            let everythingElse = document.getElementById("everythingElse")
            everythingElse.style.opacity = "0.4"

            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            drewCodeHTML.setAttribute("disabled", "true")
            drewCodeCSS.setAttribute("disabled", "true")
            drewCodeJavaScript.setAttribute("disabled", "true")

            let addSaveDetailsBox = document.getElementById("addSaveDetailsBox")
            addSaveDetailsBox.style.zIndex = "1001"

        },
        displayLesson(){
            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            // let drewDisplay = document.getElementById("drewDisplay")

            let urlParams = new URLSearchParams(window.location.search);
            let numberOfParameters = 0
            urlParams.forEach((paramater) => {numberOfParameters++})
            // console.log("urlParams!", numberOfParameters)
            if (numberOfParameters > 0) {
                let yourCodeID = urlParams.get("yourCode")
                for (let i = 0; i < this.drewSaveContents.length; i++) {
                    let drewCode = this.drewSaveContents[i]
                    if (drewCode._id == yourCodeID) {

                        let htmlSplits = drewCode.htmlContent.split("\n")
                        let modifiedHTMLContentText = ""
                        for (let i = 0; i < htmlSplits.length; i++) {
                            modifiedHTMLContentText += htmlSplits[i] + "\r\n"
                            
                        }
                        drewCodeHTML.innerHTML = modifiedHTMLContentText 
                        // let parsedLocalCSS = parseCSS()
                        if (drewCode.cssContent == "* {}") {
                            drewCodeCSS.innerText = ""
                        }
                        else {
                            drewCodeCSS.innerText = drewCode.cssContent
                        }
                        drewCodeJavaScript.innerText = drewCode.javaScriptContent
                    }
                }
            }
        },
        displayDrewCode(){
            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            let drewDisplay = document.getElementById("drewDisplay")

            console.log(drewCodeHTML.value.length)
            console.log(drewCodeCSS.value.length)
            console.log(drewCodeJavaScript.value.length)

            sessionStorage.setItem(`htmlCodeForDisplay`, drewCodeHTML.value)

            if (drewCodeCSS.value.length == 0) {
                sessionStorage.setItem(`cssCodeForDisplay`, "* {}")
            }
            else {
                sessionStorage.setItem(`cssCodeForDisplay`, drewCodeCSS.value)
            }
            sessionStorage.setItem(`javaScriptCodeForDisplay`, drewCodeJavaScript.value)

            drewDisplay["src"] = ""
            setTimeout(()=> {
                drewDisplay["src"] = "drewCode"    
            }, 100)
        },
        allowTabbing() {
            console.log("hi11")
            // if (event.keyCode===9) {
            //     var v=this.value,
            //     s=this.selectionStart,
            //     e=this.selectionEnd;
                
            //     this.value=v.substring(0, s)+'\t'+v.substring(e);
            //     this.selectionStart=this.selectionEnd=s+1;
            //     return false;
            // }
        },
        async onSaveDrewCode() {
            this.displayDrewCode()

            let nameInput = document.getElementById("nameInput")
            let lessonLevelInput = document.getElementById("lessonLevelInput")
            let keyWordsInput = document.getElementById("keyWordsDisplay")

            let lclname = nameInput.value
            let lclLessonLevel = lessonLevelInput.value
            let lclkeyWords = keyWordsInput.innerText

            let data  = {}

            let drewCodeForDisplayHTML = sessionStorage.getItem("htmlCodeForDisplay");
            let drewCodeForDisplayCSS = sessionStorage.getItem("cssCodeForDisplay");
            let drewCodeForDisplayJavaScript = sessionStorage.getItem("javaScriptCodeForDisplay");

            data["nameOfLesson"] = lclname
            data["creator"] = `${this.$auth.user.nickName}`
            data["dateCreated"] = Date.now()
            data["lessonLevel"] = lclLessonLevel
            data["keyWords"] = lclkeyWords
            data["htmlContent"] = drewCodeForDisplayHTML
            data["cssContent"] = drewCodeForDisplayCSS
            data["javaScriptContent"] = drewCodeForDisplayJavaScript

            let result = await this.$axios.$post("/api/webDevLessons", data);
            setTimeout(
                () => {
                    this.$router.push("/mainpage")
                },
                200
            )
        },
    },

    mounted() {
        this.displayLesson()
        document.body.addEventListener("keydown", (event) => {
            if (event.code == "Tab" && document.activeElement.tagName == "TEXTAREA") {
                event.preventDefault()
                let textarea = document.activeElement
                let startPosition = textarea.selectionStart;
                let endPosition = textarea.selectionEnd;
                let textareaValue = textarea.value
                
                let beginningPart = textareaValue.substring(0, startPosition)
                let middlePart = "    "
                let endingPart = textareaValue.substring(startPosition, textareaValue.length)
                
                textarea.value = beginningPart + middlePart + endingPart
                textarea.focus()
                textarea.selectionEnd = startPosition + 4

            }    
        })
    }
}
</script>

<style scoped>












textarea {
    min-width: 97%;
    max-width: 97%;
}
#addKeyWord {
    transform: translateY(-10px);
}
#keywordsDisplayTitle {
    padding-top: 30px;
}
#keywordInputTitle {
    padding-top: 10px;
}
#nameInputTitle {
    padding-top: 10px;
}
.localInput {
    width: 440px;
    height: 50px;
    font-size: 25px;
    margin-right: 250px;
}
#nameInput {
    /* width: 350px;
    height: 50px;
    font-size: 25px;
    margin-right: 250px; */
}
#keywordInput {
    width: 350px;
    height: 50px;
    font-size: 25px;
    margin-right: 48px;
}

.localTitle1 {
    font-size: 18px;
    /* color: white; */
    width: 150px;
    text-align: right;
    line-height: 36px;
    font-weight: 600;
    padding-right: 10px;
}
#detailDetail {
    font-size: 18px;
    line-height: 36px;
    font-weight: 800;
    /* transition: 2s font-weight; */
}
#detailTitle {
    font-size: 36px;
    border-bottom: 5px solid #44cf6c;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
}
#keyWordsDisplayBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
#keyWordInputBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.inputBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
#nameInputBox {
    /* display: flex;
    flex-direction: row;
    justify-content: flex-start; */
}
#detailsTitleBox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
#addSaveDetailsBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
}
#buttonsBox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    outline: 2px solid maroon;
    padding-bottom: 14px;
    margin: 14px;

}
#keyWordsDisplay {
    height: 100px;
    max-width: 700px;
    min-width: 500px;
    width: 70%;
    background-color: #837A75;
    color: white;
    font-size: 30px;
    line-height: 100px;
    text-align: center;
}

#addSaveDetailsBox {
    position: absolute;
    top: 25%;
    left: 15%;
    width: 70%;
    min-width: 800px;
    height: 450px;
    z-index: -1001;
    background-color: bisque;
    outline: 2px solid black;
}
#drewDisplay {
    width: 100%;
    height: 100%;
}
#lowerButtonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 20px;
}
#codeDisplay {
    width: 48%;
    height: 99.5%;
    background-color: white;
    margin-left: 2%;
    border: 2px solid black;
}

#drewSubmit {
    cursor: pointer;
}
.local {
    width: 97%;
    height: 340px;
    margin-left: 2.0%;
    border: 3px dashed black;
}
.sideLocal {
    height: 340px;
    background-color: darkorange;
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-align: center;
    font-size: 20px;
}
.drewSmall {
    height: 150px;
    min-height: 50px;
}
main {
    background-color: white;
}
#outerContainer {
    display: flex;
    flex-direction: row;
    height: 700px;
    width: 100%;
    background-color: lightgray;
}
.side {
    display: flex;
    flex-direction: column;
    width: 48%;
}
.titleSide {
    width: 22px;
}
.htmlTitle {
    background-color: blueviolet;
}
.cssTitle {
    background-color: green;
}
.jsTitle {
    background-color: blue;
}
</style>