<template>
    <main>
        <div id="mainContainerOutside">
            <div id="leftSide"></div>
            <div id="rightSide"></div>

            <div id="top" class="sidePart">
                <div id="html" class="sectionHolder">
                    <textarea id="drewCodeHTML" class="localCode local drewsmall"></textarea>
                </div>
            </div>
            <div id="middle" class="sidePart">
                <div id="css" class="sectionHolder">
                    <textarea id="drewCodeCSS" class="localCode local drewsmall"></textarea>
                </div>
            </div>
            <div id="bottom" class="sidePart">
                <div id="js" class="sectionHolder">
                    <textarea id="drewCodeJavaScript" class="localCode local drewsmall"></textarea>
                </div>
            </div>
            
            <iframe loading="lazy" id="drewDisplay" src="" class="localDisplay"></iframe>
            <div id="mockConsole"></div>

            <div id="horizontalSlider"></div> 
            <div id="vSlider1" class="vslider"></div> 
            <div id="vSlider2" class="vslider"></div>

            <div id="buttonsContainer">
                <div ontouchstart="" @click="this.toggleConsole">
                    <div class="button">
                        <nuxt-link to="">Log</nuxt-link>
                    </div>
                </div>


                <div ontouchstart="" @click="this.displayDrewCode">
                    <div class="button">
                        <nuxt-link to="">Run</nuxt-link>
                    </div>
                </div>
                
                
                <template v-if="$auth.$state.loggedIn">
                    <div ontouchstart="" @click="this.openAddSaveDetails">
                        <div class="button">
                            <nuxt-link to="">Save</nuxt-link>
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div ontouchstart="" @click="this.runAlert">
                        <div class="button">
                            <nuxt-link to="">Save</nuxt-link>
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
            <div id="nameInputBox">
                <div id="nameInputTitle" class="localTitle1" maxlength="30">Name:</div>
                <input type="text" name="" id="nameInput" placeholder="Add a name...">
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
        <div id="pageCover"></div>

    </main>
</template>

<script>
import { parseCSS, formatTextareas } from '../middleware/parseData';
export default {
    data() {
        return {
            id: "",
            minimumHeight: 220,
            horizontalSliderOriginalPosition: 0,
            horizontalSliderNewPosition: 0,
            upperVerticalSliderOriginalPosition: 100,
            lowerVerticalSliderOriginalPosition: 100,
            upperVerticalSliderNewPosition: 200,
            lowerVerticalSliderNewPosition: 200,
            horizontalSliderSetInInitialPositionOnHover: false,
            upperVerticalSliderSetInInitialPositionOnHover: false,
            lowerVerticalSliderSetInInitialPositionOnHover: false,
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
        
        dragHorizontalSlider() {
            let elmnt = document.getElementById("horizontalSlider")
            elmnt.onmousedown = dragMouseDown;
   
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                this.horizontalSliderNewPosition = e.clientX;
                let iframe = document.getElementById("drewDisplay")
                iframe.style.display = "none"
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;

                
                
            }

            function shrinkButtonsContainer() {
                let buttonsContainer = document.getElementById("buttonsContainer")
                buttonsContainer.style.transform = "scale(0.4, 0.525) translateX(100px)"
            }
            function unShrinkButtonsContainer() {
                let buttonsContainer = document.getElementById("buttonsContainer")
                buttonsContainer.style.transform = "initial"
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
    
                if (e.clientX < 75) {return}
                if (e.clientX > window.innerWidth - 75) {return}
                if (e.clientX > window.innerWidth - 153) {
                    shrinkButtonsContainer()
                }
                else {
                    unShrinkButtonsContainer()
                }
                this.horizontalSliderOriginalPosition = this.horizontalSliderNewPosition - e.clientX;
                this.horizontalSliderNewPosition = e.clientX;
    
                elmnt.style.left = (elmnt.offsetLeft - this.horizontalSliderOriginalPosition) + "px";

                let leftSide = document.getElementById("leftSide")
                let rightSide = document.getElementById("drewDisplay")

                let windowWidth = window.innerWidth
                let leftSideWidth = (this.horizontalSliderNewPosition / windowWidth * 100)
                // console.log(windowWidth, leftSideWidth)
                let leftSideWidthPercent = `${leftSideWidth - 0.62}%`



                let rightSideWidth = 100 - leftSideWidth + 20
                let rightSideWidthPercent = `${rightSideWidth}%`

                leftSide.style.width = leftSideWidthPercent
                rightSide.style.width = rightSideWidthPercent

                let rightSideLeft = leftSideWidth + 4
                rightSide.style.left = rightSideLeft + "%"

                let upperVerticalSlider = document.getElementById("vSlider1")
                let lowerVerticalSlider = document.getElementById("vSlider2")
                let top = document.getElementById("top")
                let middle = document.getElementById("middle")
                let bottom = document.getElementById("bottom")

                let mockConsole = document.getElementById("mockConsole")
                let mockConsoleWidthPercent = "" + (rightSideWidth - 3) + "%"
                mockConsole.style.width = mockConsoleWidthPercent
                mockConsole.style.left = rightSideLeft + "%"


                upperVerticalSlider.style.width = leftSideWidthPercent
                lowerVerticalSlider.style.width = leftSideWidthPercent
                top.style.width = leftSideWidthPercent
                middle.style.width = leftSideWidthPercent
                bottom.style.width = leftSideWidthPercent
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;

                let iframe = document.getElementById("drewDisplay")
                iframe.style.display = "initial"
                iframe.style.paddingLeft = "8px"

            }
        },
        dragVSlider1() {

            let slider1 = document.getElementById("vSlider1")
            let slider2 = document.getElementById("vSlider2")
            
            slider1.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.upperVerticalSliderNewPosition = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                if (e.clientY < 70 + 54) {return}

                let slider2Top = slider2.offsetTop
                if (e.clientY > slider2Top + 30) {return}

                e = e || window.event;
                e.preventDefault();

                let top = document.getElementById("top")
                let topHeight = e.clientY - 70
                let topHeightPx = topHeight + "px"

                this.upperVerticalSliderOriginalPosition = this.upperVerticalSliderNewPosition - e.clientY;
                this.upperVerticalSliderNewPosition = e.clientY;

                slider1.style.top = (slider1.offsetTop - this.upperVerticalSliderOriginalPosition) + "px";

                top.style.height = topHeightPx

                let middle = document.getElementById("middle")
                    
                let bottom = document.getElementById("bottom")
                let bottomHeight = bottom.clientHeight

                let middleHeight = window.innerHeight - 220 - topHeight - bottomHeight
                let middleHeightPx = middleHeight + "px"
                middle.style.height = middleHeightPx
                middle.style.top = topHeightPx
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        dragVSlider2() {

            let slider1 = document.getElementById("vSlider1")
            let slider2 = document.getElementById("vSlider2")
            
            slider2.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.lowerVerticalSliderNewPosition = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();

                let mainContainerOutside = document.getElementById("mainContainerOutside")

                if (e.clientY - 30 > mainContainerOutside.clientHeight) {return}
                if (e.clientY < slider1.offsetTop + 150) {return}

                this.lowerVerticalSliderOriginalPosition = this.lowerVerticalSliderNewPosition - e.clientY;
                this.lowerVerticalSliderNewPosition = e.clientY;
                let slider2Top = slider2.offsetTop - this.lowerVerticalSliderOriginalPosition
                slider2.style.top = (slider2Top) + "px";

                let top = document.getElementById("top")
                let topHeight = top.clientHeight

                let middle = document.getElementById("middle")

                let middleTop = topHeight
                let middleTopPx = middleTop + "px" 

                middle.style.top = middleTopPx

                let middleHeight = slider2Top - topHeight
                let middleHeightPx = middleHeight + "px"
                middle.style.height = middleHeightPx

                let bottom = document.getElementById("bottom")
                let bottomTop = slider2Top
                let bottomTopPx = bottomTop + "px"
                bottom.style.top = bottomTopPx
                let bottomHeight = mainContainerOutside.clientHeight - topHeight - middleHeight
                let bottomHeightPx = bottomHeight + "px"
                bottom.style.height = bottomHeightPx
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        runAlert() {
            alert(`Create an account and login to save your code for later.`)
        },
        addKeyWord() {
            let input = document.getElementById("keywordInput")
            let display = document.getElementById("keyWordsDisplay")
            let text = "\t" + display.innerText
            // console.log(display.innerText)
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
            // let everythingElse = document.getElementById("mainContentOutside")
            // everythingElse.style.opacity = "1.0"

            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            drewCodeHTML.removeAttribute("disabled")
            drewCodeCSS.removeAttribute("disabled")
            drewCodeJavaScript.removeAttribute("disabled")

            let addSaveDetailsBox = document.getElementById("addSaveDetailsBox")
            addSaveDetailsBox.style.display = "none"

            let pageCover = document.getElementById("pageCover")
            pageCover.style.display = "none"

            let display = document.getElementById("keyWordsDisplay")
            display.innerText = ""
        },
        openAddSaveDetails() {
            let pageCover = document.getElementById("pageCover")
            pageCover.style.display = "initial"
            // everythingElse.style.opacity = "0.4"
            // everythingElse.style.userSelect = "none"
            

            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            drewCodeHTML.setAttribute("disabled", "true")
            drewCodeCSS.setAttribute("disabled", "true")
            drewCodeJavaScript.setAttribute("disabled", "true")

            let addSaveDetailsBox = document.getElementById("addSaveDetailsBox")
            addSaveDetailsBox.style.display = "initial"

        },
        displayLesson(){
            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            // let drewDisplay = document.getElementById("drewDisplay")

            let urlParams = new URLSearchParams(window.location.search);
            let numberOfParameters = 0
            urlParams.forEach((paramater) => {numberOfParameters++})

            if (numberOfParameters > 0) {
                let yourCodeID = urlParams.get("l")
                for (let i = 0; i < this.drewSaveContents.length; i++) {
                    let drewCode = this.drewSaveContents[i]
                    if (drewCode._id == yourCodeID) {
                        drewCodeHTML.innerHTML = drewCode.htmlContent 
                        // console.log(drewCode.htmlContent, drewCode.cssContent, drewCode.javaScriptContent)
                        if (drewCode.cssContent == "* {}") {
                            drewCodeCSS.innerText = ""
                        }
                        else {
                            // drewCodeCSS.innerText = drewCode.cssContent
                            drewCodeCSS.innerHTML = drewCode.cssContent
                        }
                        // drewCodeJavaScript.innerText = drewCode.javaScriptContent
                        drewCodeJavaScript.innerHTML = drewCode.javaScriptContent
                    }
                }
            }
            
        },
        displayDrewCode(){
            let drewCodeHTML = document.getElementById("drewCodeHTML")
            let drewCodeCSS = document.getElementById("drewCodeCSS")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScript")
            let drewDisplay = document.getElementById("drewDisplay")

            // sessionStorage.setItem(`drewCodeForDisplayHTML`, drewCodeHTML.value)

            // if (drewCodeCSS.value == "") {
            //     sessionStorage.setItem(`drewCodeForDisplayCSS`, "* {}")
            // }
            // else {
            //     sessionStorage.setItem(`drewCodeForDisplayCSS`, drewCodeCSS.value)
            // }
            // sessionStorage.setItem(`drewCodeForDisplayJavaScript`, drewCodeJavaScript.value)

            // drewDisplay["src"] = ""
            // setTimeout(()=> {
            //     drewDisplay["src"] = "drewCode"    
            // }, 100)

            sessionStorage.setItem(`practicehtmlCodeForDisplay`, drewCodeHTML.value)

            if (drewCodeCSS.value == "") {
                sessionStorage.setItem(`practicecssCodeForDisplay`, "* {}")
            }
            else {
                sessionStorage.setItem(`practicecssCodeForDisplay`, drewCodeCSS.value)
            }
            sessionStorage.setItem(`practicejavaScriptCodeForDisplay`, drewCodeJavaScript.value)

            drewDisplay["src"] = ""
            setTimeout(()=> {
                drewDisplay["src"] = "practiceCode"    
            }, 100)

            setTimeout(() => {
                this.displayConsoleData()
            }, 450)
            // this.displayConsoleData()


            // }, 100)
        },
        displayConsoleData() {
            setTimeout(() => {
                let consoleText = ""
                let mockConsole = document.getElementById("mockConsole")
                let mockConsoleData = sessionStorage.getItem("mockConsoleData").split(",")
                for (let i = 0; i < mockConsoleData.length; i++) {
                    let consoleItem = mockConsoleData[i]
                    consoleText += consoleItem + "\n"
                }
                mockConsole.innerText = consoleText
            }, 100)
            // let consoleText = ""
            // let mockConsole = document.getElementById("mockConsole")
            // let mockConsoleData = sessionStorage.getItem("mockConsoleData").split(",")
            // for (let i = 0; i < mockConsoleData.length; i++) {
            //     let consoleItem = mockConsoleData[i]
            //     consoleText += consoleItem + "\n"
            // }
            // mockConsole.innerText = consoleText
        },
        allowTabbing() {
            document.body.addEventListener("keydown", (event) => {
            if (event.code == "Tab" && document.activeElement.tagName == "TEXTAREA") {
                event.preventDefault()
                let textarea = document.activeElement
                var startPosition = textarea.selectionStart;
                var endPosition = textarea.selectionEnd;
                let textareaValue = textarea.value
                // console.log(textareaValue)
                let beginningPart = textareaValue.substring(0, startPosition)
                let middlePart = "    "
                let endingPart = textareaValue.substring(startPosition, textareaValue.length)
                // console.log("beginningPart:", beginningPart, "\nmiddlePart:", middlePart,  "\nendingPart:",endingPart)
                textarea.value = beginningPart + middlePart + endingPart
                textarea.focus()
                textarea.selectionEnd = startPosition + 4

            }    
        })
        },
        async onSaveDrewCode() {
            this.displayDrewCode()
            // setTimeout(() => {
            let nameInput = document.getElementById("nameInput")
            let keyWordsInput = document.getElementById("keyWordsDisplay")
            
            let lclname = nameInput.value
            let lclkeyWords = keyWordsInput.innerText
            
            let data  = {}
            
            let drewHTMLDiv = document.getElementById("drewCodeHTML")
            let drewCSSDiv = document.getElementById("drewCodeCSS")
            let drewJSDiv = document.getElementById("drewCodeJavaScript")
            let html = drewHTMLDiv.value
            let css = drewCSSDiv.value
            let js = drewJSDiv.value
            // console.log("\nhtml: ",html, "\ncss:", css, "\njs:", js)

            // }, 200)
            

            // let drewCodeForDisplayHTML = sessionStorage.getItem("drewCodeForDisplayHTML");
            // let drewCodeForDisplayCSS = sessionStorage.getItem("drewCodeForDisplayCSS");
            // let drewCodeForDisplayJavaScript = sessionStorage.getItem("drewCodeForDisplayJavaScript");

            data["nameOfLesson"] = lclname
            data["creator"] = `${this.$auth.user._id}`
            data["dateCreated"] = Date.now()
            data["keyWords"] = lclkeyWords
            data["htmlContent"] = html
            data["cssContent"] = css
            data["javaScriptContent"] = js

            let result = await this.$axios.$post("/api/drewSaveContents", data);
            setTimeout(
                () => {
                    this.$router.push("/mainpage")
                },
                200
            )
        },
        setUpSliders() {

            this.horizontalSliderOriginalPosition = 0
            this.horizontalSliderNewPosition = 0
            this.upperVerticalSliderOriginalPosition = 0
            this.lowerVerticalSliderOriginalPosition = 0
            this.upperVerticalSliderNewPosition = 0
            this.lowerVerticalSliderNewPosition = 0
            this.horizontalSliderSetInInitialPositionOnHover = false
            this.upperVerticalSliderSetInInitialPositionOnHover = false
            this.lowerVerticalSliderSetInInitialPositionOnHover = false


            let horizontalSlider = document.getElementById("horizontalSlider")

            horizontalSlider.addEventListener("mouseenter", (e) => {
                if (this.horizontalSliderSetInInitialPositionOnHover == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragHorizontalSlider()
                    this.horizontalSliderSetInInitialPositionOnHover = true
                }
                else {
                    return
                }
            })
            horizontalSlider.addEventListener("mousedown", (e) => {
                this.dragHorizontalSlider()
            })

            let vSlider1 = document.getElementById("vSlider1")
            let vSlider2 = document.getElementById("vSlider2")

            vSlider1.addEventListener("mouseenter", (e) => {
                if (this.upperVerticalSliderSetInInitialPositionOnHover == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider1()
                    this.upperVerticalSliderSetInInitialPositionOnHover = true
                }
                else {
                    return
                }
            })
            vSlider2.addEventListener("mouseenter", (e) => {
                if (this.lowerVerticalSliderSetInInitialPositionOnHover == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider2()
                    this.lowerVerticalSliderSetInInitialPositionOnHover = true
                }
                else {
                    return
                }
            })
            vSlider1.addEventListener("mousedown", (e) => {
                this.dragVSlider1()
            })
            vSlider2.addEventListener("mousedown", (e) => {
                this.dragVSlider2()
            })
        },
        toggleConsole() {
            let mockConsole = document.getElementById("mockConsole")
            if (mockConsole.style.display == "initial") {
                mockConsole.style.display = "none"
            }
            else {
                mockConsole.style.display = "initial"
            }
        },
        initializeBoxDisplaysForSavingPurposes() {
            let addSaveDetailsBox = document.getElementById("addSaveDetailsBox")
            addSaveDetailsBox.style.display = "none"

            let pageCover = document.getElementById("pageCover")
            pageCover.style.display = "none"

            let mockConsole = document.getElementById("mockConsole")
            mockConsole.style.display = "none"
        }   
    },
    updated() {
        sessionStorage.setItem("currentTitle", "Get Creative")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "Get Creative")
    },
    beforeUpdate() {
        sessionStorage.setItem("currentTitle", "Get Creative")
    },
    mounted() {
        let mountingTime = new Date()
        let mTime = mountingTime.getTime()
        sessionStorage.setItem("currentMountTimePractice", mTime)

        let previousMountTime = sessionStorage.getItem("previousMountTimePractice")

        if (Number(previousMountTime) == "NaN") {
            previousMountTime = 0
        }

        setTimeout(() => {
            if (mTime - previousMountTime > 2000) {
                window.location.reload()
            }
        }, 1)

        sessionStorage.setItem("previousMountTimePractice", mTime)
        sessionStorage.setItem("currentTitle", "Get Creative")



        this.initializeBoxDisplaysForSavingPurposes()
        this.setUpSliders()
        this.displayLesson()
        this.displayDrewCode()
        this.allowTabbing()

        let keywordInput = document.getElementById("keywordInput")

        keywordInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.addKeyWord();
            }
        });

        
    },
    updated() {
        // window.location.reload();
    },
}
</script>

<style scoped>

#mockConsole {
    position: absolute;
    bottom: 0;
    left: 55%;
    max-height: 132px;
    width: 44%;
    background-color: rgba(50, 50, 50, 1);
    color: white;
    overflow-y: scroll !important;
    z-index: 1001;
    /* display: none; */
}
#pageCover {
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0,0,0,0.8);
    /* opacity: 0.5; */
}
#mainContainerOutside {
    overflow: hidden;
    outline: 4px solid #0e5850;
}
#drewDisplay {
    position: absolute;
    top: 0;
    left: 51.5%;
    width: 48%;
    height: 100%;
    /* background-color: yellow; */
    /* outline: 4px solid #0e5850; */
    user-select: none;
    padding-top: 0px;
    padding-left: 15px;
    margin-right: 10px;
    /* z-index: 0; */
    /* display: none; */

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
#nameInput {
    width: 350px;
    height: 50px;
    font-size: 25px;
    margin-right: 250px;
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
    padding-right: 30px;
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
#nameInputBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
    height: 400px;
    z-index: 1001;
    background-color: bisque;
    outline: 2px solid black;
}







.button {
    transform: scale(0.8);
    /* display: none; */
}
#buttonsContainer {
    position: absolute;
    bottom: 0;
    right: 0.5%;
    /* height: 80px; */
    /* width: 20%; */
    background-color:#158479;
    border-radius: 20px;
    border-bottom-right-radius: 0;
    padding-bottom: 5px;
    outline: 1px solid transparent;
    transform: scale(1);
    transition: 375ms transform;
    /* transition: 250ms outline; */
}
#html {
    margin-left: 2px;
    margin-top: 2px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
}
#html::after {
    content: "HTML";
    position: absolute;
    top: 0;
    right: 8px;
    /* width: 50px; */
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: red;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-right: 11px;
    color: white;
    /* writing-mode: vertical-lr;
    text-orientation: upright; */
}
#css {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
}
#css::after {
    content: "CSS";
    position: absolute;
    top: 0;
    right: 8px;
    /* width: 50px; */
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: orange;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-top: 12px;
    margin-right: 11px;
    color: white;
}

#js {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
}

#js::after {
    content: "JS";
    position: absolute;
    top: 0;
    right: 8px;
    /* width: 50px; */
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: blue;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-top: 12px;
    margin-right: 11px;
    color: white;
    /* transition: 375ms background-color;  */
}

.sectionHolder {
    width: 100%;
}
textarea {
    height: 100%;
    width: 100%;
    resize: none;
    /* outline: none; */
    border: none;
    background-color: transparent;
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    
}
textarea:focus {
    outline: none !important;
    background-color: transparent;
}
#mainContainerOutside {
    position: absolute;
    top: 70px;
    left: 0;
    background-color: white;
    height: calc(100% - 164px);
    /* height: calc(100% - 220px); */
    width: 100%;
    /* outline: 5px solid black; */
}

#leftSide {
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: white; */
    height: 100%;
    width: 50%;
    background-color: transparent;
}
#rightSide {
    position: absolute;
    top: 0;
    left: 50%;
    background-color: transparent;
    height: 100%;
    width: 50%;
}
#horizontalSlider {
    position: absolute;
    top: 0px;
    left: 50%;
    height: 100%;
    width: 25px;
    background-color: #0e5850;
    /* outline: 2px dashed rgba(50, 50, 50, 1);
    outline: 2px dashed white; */
    cursor: col-resize;

}
.vslider {
    position: absolute;
    /* top: 33.334%; */
    left: 0;
    width: 50%;
    height: 15px;
    
    cursor: row-resize;
    background-color: #0e5850;
    /* outline: 2px dashed rgba(50, 50, 50, 1);
    outline: 2px dashed white; */
}
#vSlider1 {
    top: 33.334%;
    /* background-color: rgba(100, 200, 221, 0.5); */
    /* background-color: rgba(50, 50, 50, 1); */

}

#vSlider2 {
    top: 66.6667%;
    /* background-color: rgba(250, 50, 221, 0.5); */
    /* background-color: rgba(50, 50, 50, 0.5); */
}

#top {
    width: 50%;
    background-color:transparent;
    top: 0;
}
#middle {
    width: 50%;
    background-color:transparent;
    top: 33.333%;
}
#bottom {
    width: 50%;
    background-color:transparent;
    top: 66.667%;
    background-color: transparent;
}
.sidePart {
    position: absolute;
    left: 0;
    width: 50%;
    height: calc(33.334%);
    /* border: 3px dashed black; */
}
</style>