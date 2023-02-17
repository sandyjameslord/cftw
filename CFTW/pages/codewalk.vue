<template>
    <main>
        <div id="learningZone" class="learningZone">
            <div id="learningZoneLeft" class="learningZoneSide">
                <div class="titleAndInfoBox">
                    <div class="learningZoneTitle">Code Explanation   </div>

                    <div ontouchstart="" @click="displayInfo(`left`)">
                        <div id="leftInfoButton" class="infoButton button info lclLink">
                            <nuxt-link class="" to=""><span class="moveTextSpan">&#8505;</span></nuxt-link>
                        </div>
                    </div>
                </div>              
                <iframe class="youTubeVideo leftPart" width="420" height="315" src="https://www.youtube.com/embed/vOsdfRbrNdk"></iframe>
            </div>
            <div id="learningZoneRight" class="learningZoneSide">
                <div class="titleAndInfoBox">
                    <div class="learningZoneTitle">The Code You'll Write   </div>
                    <div ontouchstart="" @click="displayInfo(`right`)">
                        <div id="rightInfoButton" class="infoButton button info lclLink">
                            <nuxt-link class="" to=""><span class="moveTextSpan">&#8505;</span></nuxt-link>
                        </div>
                    </div>
                </div>
                <div id="mainContainerOutside">
                    <div id="leftSide"></div>
            
                    <div id="top" class="sidePart">
                        <div id="html" class="sectionHolder">
                            <textarea id="htmlCode" class="localCode local drewsmall" readonly></textarea>
                        </div>
                    </div>
                    <div id="middle" class="sidePart">
                        <div id="css" class="sectionHolder">
                            <textarea id="cssCode" class="localCode local drewsmall" readonly></textarea>
                        </div>
                    </div>
                    <div id="bottom" class="sidePart">
                        <div id="js" class="sectionHolder">
                            <textarea id="javaScriptCode" class="localCode local drewsmall" readonly></textarea>
                        </div>
                    </div>
            
                    <div id="subbottom" class="sidePart">
                        <div id="output" class="sectionHolder">
                            <iframe loading="lazy" id="drewDisplay" src="" class="localDisplay"></iframe>
                        </div>
                    </div>

                            

                    <div id="vSlider1" class="vslider"></div> 
                    <div id="vSlider2" class="vslider"></div>
                    <div id="vSlider3" class="vslider"></div>

                </div>
            </div>
        </div>
        <div id="controlBox">
            <div ontouchstart="" @click="openPage(`interaction`)">
                <div class="button controlBoxButton">
                    <nuxt-link to="">Next level:<br>Interaction</nuxt-link>
                </div>
            </div>
        </div>
        <div id="infoDisplay" class="infoDisplay">
            <div id="iDisplay" class="iDisplay">
                <div id="infoDismissalButton" ontouchstart="" @click="displayInfo(`none`)">
                    <div class="infoButton button info lclLink">
                        <nuxt-link class="" to=""><span class="moveTextSpanX" >&#10006;</span></nuxt-link>
                    </div>
                </div>
                <div id="infoTitle"></div>
                <div id="infoText"></div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            colorWhite: true,
            loremText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nulla in turpis euismod, eu varius velit rutrum. Etiam rhoncus euismod dictum. In vel semper nunc. Phasellus at risus et dolor lacinia porta quis a ex. Vestibulum quis lacus at quam dapibus pellentesque. Nulla scelerisque pharetra est a dapibus. Mauris laoreet rhoncus ultricies. Nulla ullamcorper malesuada fermentum. Donec augue ex, tempor eu lectus sed, dignissim eleifend tellus. Morbi ante justo, cursus in sem eu, pellentesque placerat elit. Ut sed maximus diam, sed lobortis arcu.",
            leftInfoTitleText: "Code Explanation",
            leftInfoContentText: "The Learning Goals Box to the left contains information about this lesson. <br><br><br>Watch the video. Sandy will introduce this lesson, present goals and discuss final outcomes.<br><br><br>Remember to pace yourself and focus on your own goals.",  
            rightInfoTitleText: "The Code You'll Write",
            rightInfoContentText: "Check out the final product. This is what you will be able to produce by the end of the lesson.<br><br><br>What do you see from a programming perspective?<br><br><br>What is your experience?",
            sideSelected: "none",

            upperVerticalSliderOriginalPosition: 0,
            lowerVerticalSliderOriginalPosition: 0,
            lowestVerticalSliderOriginalPosition: 0,
            upperVerticalSliderNewPosition: 0,
            lowerVerticalSliderNewPosition: 0,
            lowestVerticalSliderNewPosition: 0,
            upperVerticalSliderSetInInitialPositionOnHover: false,
            lowerVerticalSliderSetInInitialPositionOnHover: false,
            lowestVerticalSliderSetInInitialPositionOnHover: false,

        }
    },
    async asyncData({ $axios }) {
      try {
        let drewSaveContentsResponse = await $axios.$get("/api/drewSaveContents");
        let drewSaveLessonStatusesResponse = await $axios.$get("/api/drewSaveLessonStatuses");
        let webDevLessonsResponse = await $axios.$get("/api/webDevLessons");

        return {
          drewSaveContents: drewSaveContentsResponse.drewSaveContents,
          drewSaveLessonStatuses: drewSaveLessonStatusesResponse.drewSaveLessonStatuses,
          webDevLessons: webDevLessonsResponse.webDevLessons
        }
      } catch (err) {
        console.log(err.message)
      }
    },               
    methods: {
        displayInfo(side) {
            let infoDisplay = document.getElementById("infoDisplay")
            if (side == "none") {
                infoDisplay.style.zIndex = "-1"
                infoDisplay.style.opacity = "0"
                this.sideSelected = "none"
                return
            }
            
            let infoTitleDiv = document.getElementById("infoTitle")
            let infoBodyTextDiv = document.getElementById("infoText")
            if (side == "left") {
                if (side == this.sideSelected) {
                    infoDisplay.style.zIndex = "-1"
                    infoDisplay.style.opacity = "0"
                    
                    this.sideSelected = "none"
                    return
                }
                else {
                    infoDisplay.style.zIndex = "100000000"
                    infoDisplay.style.opacity = "1"
                    
                    let leftTitleText = this.$data.leftInfoTitleText
                    let leftBodyText = this.$data.leftInfoContentText

                    infoTitleDiv.innerHTML = leftTitleText
                    infoBodyTextDiv.innerHTML = leftBodyText

                    infoDisplay.style.left = "50.5%"

                    this.sideSelected = "left"
                }
                
            } else if (side == "right") {
                if (side == this.sideSelected) {
                    infoDisplay.style.zIndex = "-1"
                    infoDisplay.style.opacity = "0"
                    this.sideSelected = "none"
                    return
                }
                else {
                    infoDisplay.style.zIndex = "100000000"
                    infoDisplay.style.opacity = "1"
                    
                    let rightTitleText = this.$data.rightInfoTitleText
                    let rightBodyText = this.$data.rightInfoContentText

                    infoTitleDiv.innerHTML = rightTitleText
                    infoBodyTextDiv.innerHTML = rightBodyText

                    infoDisplay.style.left = "0.5%"

                    this.sideSelected = "right"
                }
                
            }
            


        },
        openPage(page) {
            sessionStorage.setItem(`currentTitle`, page)
            this.$router.push(`/${page}`);
        },
        initiateLeftSide() {

        },
        initiateRightSide() {
            let urlParams = new URLSearchParams(window.location.search);
            let webDevLessonID = urlParams.get("webDevLessonID") || sessionStorage.lessonID
            sessionStorage.setItem("currentWebDevLesson", webDevLessonID)
            let finalProductDisplay = document.getElementById("drewDisplay")

            let htmlCodeDiv = document.getElementById("htmlCode")
            let cssCodeDiv = document.getElementById("cssCode")
            let javaScriptCodeDiv = document.getElementById("javaScriptCode")

            for (let i = 0; i < this.webDevLessons.length; i++) {
                let lesson = this.webDevLessons[i]
                if (lesson._id == webDevLessonID) {
                    let htmlValue = lesson.htmlContent
                    let cssValue = lesson.cssContent
                    let jsValue = lesson.javaScriptContent
                    sessionStorage.setItem(`htmlCodeForDisplay`, htmlValue)
                    sessionStorage.setItem(`cssCodeForDisplay`, cssValue)
                    sessionStorage.setItem(`javaScriptCodeForDisplay`, jsValue)

                    htmlCodeDiv.innerHTML = htmlValue
                    cssCodeDiv.innerHTML = cssValue
                    javaScriptCodeDiv.innerHTML = jsValue
                }
            }
            finalProductDisplay["src"] = ""
            setTimeout(()=> {
                finalProductDisplay["src"] = "drewCode"    
            }, 100)

            this.setUpSliders()

            
        },
        initializeLessonInformationDisplay() {
            let lessonLevelDiv = document.getElementById("learningLevel") 
            let lessonTitleDiv = document.getElementById("lessonContent") 
            let lessonKeywordsDiv = document.getElementById("keywords")
            
            let lessonLevel = sessionStorage.getItem("lessonLevel") || "not initialized yet"
            let lessonTitle = sessionStorage.getItem("lessonTitle") || "not initialized yet"
            let keywords = sessionStorage.getItem("keywords") || "not initialized yet"
            

            let begginingIntermediateAdvanced = lessonLevel.substring(0, 1)
            if (begginingIntermediateAdvanced == "b") {
                begginingIntermediateAdvanced = "Beginner"
            }
            else if (begginingIntermediateAdvanced == "i") {
                begginingIntermediateAdvanced = "Intermediate"
            }
            else if (begginingIntermediateAdvanced == "a") {
                begginingIntermediateAdvanced = "Advanced"
            }

            let htmlCSSJS = lessonLevel.substring(2, 3)
            if (htmlCSSJS == "H") {
                htmlCSSJS = "HTML"
                

            }
            else if (htmlCSSJS == "C") {
                htmlCSSJS = "CSS"
                lessonNumber = parseInt(lessonLevel.substring(4,7))
            }
            else if (htmlCSSJS == "J") {
                htmlCSSJS = "JavaScript"
                lessonNumber = parseInt(lessonLevel.substring(4,7))
            }

            let lessonNumber = "Lesson " + parseInt(lessonLevel.substring(4,7))

            let extraLine = "\n"

            lessonTitleDiv.innerText = lessonTitle
            lessonLevelDiv.innerText = begginingIntermediateAdvanced + extraLine + htmlCSSJS + extraLine + lessonNumber
            lessonKeywordsDiv.innerText = keywords
        },
        setUpSliders() {


            let vSlider1 = document.getElementById("vSlider1")
            let vSlider2 = document.getElementById("vSlider2")
            let vSlider3 = document.getElementById("vSlider3")

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
            vSlider3.addEventListener("mouseenter", (e) => {
                if (this.lowestVerticalSliderSetInInitialPositionOnHover == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider3()
                    this.lowestVerticalSliderSetInInitialPositionOnHover = true
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
            vSlider3.addEventListener("mousedown", (e) => {
                this.dragVSlider3()
            })
        },
        dragVSlider1() {

            let slider1 = document.getElementById("vSlider1")
            let slider2 = document.getElementById("vSlider2")
            
            slider1.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.upperVerticalSliderNewPositionLevel2Left = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                if (e.clientY < 70 + 54 + 70) {return}

                let slider2Top = slider2.offsetTop
                if (e.clientY > slider2Top + 90) {return}

                e = e || window.event;
                e.preventDefault();

                let top = document.getElementById("top")
                let middle = document.getElementById("middle")
                let bottom = document.getElementById("bottom")
                let subbottom = document.getElementById("subbottom")
                let topHeight = e.clientY - (70 + 54)
                let topHeightPx = topHeight + "px"

                this.upperVerticalSliderOriginalPositionLevel2Left = this.upperVerticalSliderNewPositionLevel2Left - e.clientY;
                this.upperVerticalSliderNewPositionLevel2Left = e.clientY;

                slider1.style.top = (slider1.offsetTop - this.upperVerticalSliderOriginalPositionLevel2Left) + "px";

                top.style.height = topHeightPx

                let slider1OffsetTop = slider1.offsetTop
                let slider2OffsetTop = slider2.offsetTop

                let bottomHeight = bottom.clientHeight

                let middleHeight = slider2OffsetTop - slider1OffsetTop
                let middleHeightPx = middleHeight + "px"
                middle.style.height = middleHeightPx
                
                let middleTop = topHeight - 27
                middle.style.top = middleTop + "px"
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        dragVSlider2() {

            let slider1 = document.getElementById("vSlider1")
            let slider2 = document.getElementById("vSlider2")
            let slider3 = document.getElementById("vSlider3")
            
            slider2.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.lowerVerticalSliderNewPositionLevel2Left = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();

                let mainContainerOutside = document.getElementById("mainContainerOutside")
                
                let top = document.getElementById("top")
                let middle = document.getElementById("middle")
                let bottom = document.getElementById("bottom")

                let slider1OffsetTop = slider1.offsetTop
                let slider2OffsetTop = slider2.offsetTop
                let slider3OffsetTop = slider3.offsetTop

                if (e.clientY < slider1OffsetTop + 198) {return}
                if (e.clientY > slider3OffsetTop + 88) {return}

                this.lowerVerticalSliderOriginalPositionLevel2Left = this.lowerVerticalSliderNewPositionLevel2Left - e.clientY;
                this.lowerVerticalSliderNewPositionLevel2Left = e.clientY;
                let slider2Top = slider2.offsetTop - this.lowerVerticalSliderOriginalPositionLevel2Left
                slider2.style.top = (slider2Top) + "px";

                let middleHeight = slider2OffsetTop - slider1OffsetTop
                let middleHeightPx = middleHeight + "px"
                middle.style.height = middleHeightPx

                let bottomHeight = slider3OffsetTop - slider2OffsetTop
                let bottomHeightPx = bottomHeight + "px"
                bottom.style.height = bottomHeightPx

                bottom.style.top = slider2OffsetTop + "px"

                
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        dragVSlider3() {
            let slider2 = document.getElementById("vSlider2")
            let slider3 = document.getElementById("vSlider3")
            
            slider3.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.lowestVerticalSliderNewPositionLevel2Left = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();

                let mainContainerOutside = document.getElementById("mainContainerOutside")

                if (e.clientY - 60 > mainContainerOutside.clientHeight) {return}

                let slider2Top = slider2.offsetTop
                if (e.clientY < slider2Top + 208) {return}

                this.lowestVerticalSliderOriginalPositionLevel2Left = this.lowestVerticalSliderNewPositionLevel2Left - e.clientY;
                this.lowestVerticalSliderNewPositionLevel2Left = e.clientY;
                let slider3Top = slider3.offsetTop - this.lowestVerticalSliderOriginalPositionLevel2Left
                slider3.style.top = (slider3Top) + "px";

                let top = document.getElementById("top")
                let middle = document.getElementById("middle")
                let bottom = document.getElementById("bottom")
                let subbottom = document.getElementById("subbottom")
                
                let topHeight = top.clientHeight

                let slider2OffsetTop = slider2.offsetTop
                let slider3OffsetTop = slider3.offsetTop

                let bottomHeight = slider3OffsetTop - slider2OffsetTop
                let bottomHeightPx = bottomHeight + "px"
                bottom.style.height = bottomHeightPx

                let subbottomTop = slider3Top
                let subbottomTopPx = subbottomTop + "px"
                subbottom.style.top = subbottomTopPx
                let subbottomHeight = mainContainerOutside.clientHeight - subbottomTop
                
                let subbottomHeightPx = subbottomHeight + "px"
                subbottom.style.height = subbottomHeightPx
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        
    },
    updated() {
        sessionStorage.setItem("currentTitle", "CodeWalk")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "CodeWalk")
    },
    beforeUpdate() 
    {
        sessionStorage.setItem("currentTitle", "CodeWalk")
    },
    mounted() {
        let mountingTime = new Date()
        let mTime = mountingTime.getTime()
        sessionStorage.setItem("currentMountTime", mTime)

        let previousMountTime = sessionStorage.getItem("previousMountTime")

        if (Number(previousMountTime) == "NaN") {
            previousMountTime = 0
        }

        setTimeout(() => {
            if (mTime-previousMountTime > 2000) {
                window.location.reload()
            }
        }, 1)

        sessionStorage.setItem("previousMountTime", mTime)

        sessionStorage.setItem("currentTitle", "CodeWalk")
        setTimeout(() => {
            this.initiateLeftSide()
            this.initiateRightSide()
            let infoDisplay = document.getElementById("infoDisplay")
            infoDisplay.style.opacity = "0"
        }, 100)
    },
    unmounted() {
        
    },
}
</script>

<style scoped>

.titleOfContent {
    height: 50px;
    width: 140px;
    font-size: 24px;
    margin-top: 5px;
    margin-left: 5px;
    line-height: 50px;
    text-align: left;
}
.contentItself {
    height: 28px;
    width: 60%;
    margin-top: 16px;
    margin-right: 5px;
    line-height: 28px;
    border-left: 2px solid rgba(0,0,0,0.4);
    padding-left: 10px;
}
.contentBox {
    height: 60px;
    width: 90%;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
#learningLevelBox {
    height: 100px;
}
#learningLevelTitle {
    height: 100px;
    line-height: 100px;
}
#learningLevel {
    height: 80px;
    margin-top: 9px;
    padding-top: 0px;
}
#learningGoalsBox {
    height: 261px;
    width: 45.0vw;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255,255,255,0.5);
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 4px;
}
#infoDisplay {
    position: relative;
    top: 70px;
    left: calc(50.5%);
    height: 40vh;
    width: 49%;

    background-color: rgba(255,255,255,0.97);
    z-index: -1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 150px solid rgba(255,255,255,1);
    border-radius: 8px;
    outline: 3px dotted black;
    transition: left 250ms ease-in-out;
}
#iDisplay {
    height: 100%;
    width: 100%;
}
#infoTitle {
    position: absolute;
    top: 18.75%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    text-align: center;
    width: 100%;
}
#infoText {
    position: absolute;
    top: 37.5%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    text-align: left;
    padding-left: 20px;
    padding-right: 30px;
    width: 90%;
}

#infoDismissalButton {
    position: absolute;
    right: 10px;
    top: 10px;
}

.infoButton:after{
  content:"";
  height:42px;
  width:42px;
  padding:4px;
  position: absolute;
  bottom:-26px;
  left:-5px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 42px;
  -moz-border-radius: 42px;
  border-radius: 42px;
}

.infoButton {
    font-size: 30px;
    width: 20px;
    line-height: 15px;
    line-gap-override: 10%;
    margin-right: 22px;
    transform: translateY(-3px);
    width: 20px;
    height: 20px;
    text-align: left;
    white-space: pre;
}

.infoButton a{    
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size: 1.1em;
  text-align: left;
  text-decoration:none;
  background-image: linear-gradient(90deg,  red, red, orange);
  position:relative;
  
  -webkit-tap-highlight-color: darkblue;
  text-shadow: 0px 1px 0px #000;

  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 4px 0 blue;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 4px 0 blue;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 4px 0 blue;

  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;

  width: 0px;
  height: 20px;
  white-space: pre;
  color: green;
}

.infoButton a:active{
  top:6px;
  background-color:rgba(120, 20, 20, 1.0);
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -6px 0 black;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -6px 0 black;
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -6px 0 black;
  transition: background-color 0.125s ease-out;
}

.moveTextSpan {
    position: relative;
    top: 0px;
    left: -12px;
    font-size: 42px;
    color: white;
}
.moveTextSpanX {
    position: relative;
    top: 3px;
    left: -13px;
    font-size: 34px;
    color: white;
}
.titleAndInfoBox {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
.controlBoxButton {
    transform: scale(0.8) translate(-40px, -15px);
}
#controlBox {
    position: absolute;
    top: calc(100% - 145px);
    left: calc(50.5%);
    height: 62px;
    width: 49%;
    display: flex;
    flex-direction: row;
    justify-content:center;

    background-color: rgba(255,255,255,0.5);
    border-radius: 4px;
}
.learningZoneTitle {
    font-size: 26px;
    height: 30px;
    background-color: rgba(255,255,255,0.5);
    width: fit-content;
    padding: 10px;
    padding-right: 10px;
    text-decoration: underline;
    text-decoration-thickness: 0.01em;
    text-underline-offset: 4px;
    white-space: pre;
    border-radius: 4px;
    
}
#emptyBoxForSpace {
    height: 70px;
    width: 100%;
    margin-top: 15px;
}
.bottomBox {

}
.leftPart {}
.rightPart {
    height: 100%;
    width: 100%;
    border: 1px solid black;
    background-color: white;
}

#introductionContainer {
    height: 100%;
    width: 100%;

}
.youTubeVideo {
    border-radius: 8px;
    margin: auto;
    height: 27vw;
    width: 48vw;
    
}
.learningZone {
    position: absolute;
    height: calc(100%);
    width: 100%;
    font-size: 100px;
    transition: background-color 1s;
}
#learningZoneLeft {
display: flex;
    flex-direction: column;
}
.learningZoneSide {
    font-size: 20px;
    width: 50%;
    height: 100%;
    padding: 8px;

}
#learningZone {
    height: calc(100% - 188px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#mainContainerOutside {
    position: absolute;
    top: 70px;
    left: 51.1875%;
    background-color: white;
    height: calc(100% - 120px);
    width: 48%;
    outline: 5px solid #0e5850;
}

.learningZone4Side {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 90213;
    

}

#level5RightDisplay {
    z-index: 90211;
}

#htmlDad {
    margin-left: 2px;
    margin-top: 2px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#htmlDad::after {
    content: "HTML";
    position: absolute;
    top: 0;
    right: -10px;
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: darkorange;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-right: 11px;
}
#cssDad {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#cssDad::after {
    content: "CSS";
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: darkorange;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-top: 12px;
    margin-right: 11px;
}
#jsDad {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#jsDad::after {
    content: "JS";
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: darkorange;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-top: 12px;
    margin-right: 11px;
}
#outputDad {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#outputDad::after {
    content: "Output";
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: darkorange;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-top: 12px;
    margin-right: 11px;
}
.sectionHolder {
    width: 100%;
}
textarea {
    height: 100%;
    width: 100%;
    resize: none;
    border: none;
    background-color: transparent;
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    
}
textarea:focus {
    outline: none !important;
    background-color: transparent;
}
#mainContainerOutsideDad {
    position: absolute;
    top: 70px;
    left: 0;
    background-color: white;
    height: calc(100%);
    width: 100%;
}
#leftSideDad {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-color: transparent;
}
#rightSideDad {
    position: absolute;
    top: 0;
    left: 50%;
    background-color: transparent;
    height: 100%;
    width: 50%;
}

.vslider {
    position: absolute;
    left: 0;
    width: 50%;
    height: 15px;
    cursor: row-resize;
    background-color: #0e5850;
}
#vSlider1Dad {
    top: 25.0%;
}
#vSlider2Dad {
    top: 50.0%;
}
#vSlider3Dad {
    top: 75.0%;
}
#topDad {
    width: 50%;
    background-color:transparent;
    top: 0;
}
#middleDad {
    width: 50%;
    background-color:transparent;
    top: 25.0%;
}
#bottomDad {
    width: 50%;
    background-color:transparent;
    top: 50.0%;
    background-color: transparent;
}
#subbottomDad {
    width: 50%;
    background-color:transparent;
    top: 75.0%;
    background-color: transparent;
}

#drewMakeCodeSide {
    z-index: 90211;
}

#leftSideExplanationTitle {
    font-size: 24px;
    text-align: center;
    padding: 20px;
}

#leftSideExplanationDescription {
    font-size: 14px;
    padding: 20px;
}
#rightSideExplanationTitle {
    font-size: 24px;
    text-align: center;
    padding: 20px;
}

#rightSideExplanationDescription {
    font-size: 14px;
    padding: 20px;
}

#opaqueScreen {
    position: absolute;
    top: 136px;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 1002;
    opacity: 0.5;
}
#explanationContainer {
    position: absolute;
    top: 170px;
    width: 100%;
    background-color: white;
    height: 350px;
    z-index: 1003;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    outline: 12px solid black;
}

#leftSideExplanation {
    height: 330px;
    width: 45%;
    border-right: 3px solid black;
}
#rightSideExplanation {
    height: 330px;
    width: 45%;
    border-left: 3px solid black;
}



/*
info marks below
*/
.infoMark {
    position: absolute;
    top: 110px;
    height: 15px;
    line-height: 15px;
    width: 15px;

    font-size: 15px;
    color: black;

    background-color: white !important;
    
    border-radius: 3px;
    z-index: 10020;
    text-align: center;
    cursor: pointer;
    padding: 1px;
    outline: 1px solid black;
}

#infoMark1 {
    left: 1.0%;
}
#infoMark2 {
    left: 21%;
}
#infoMark3 {
    left: 41%;
}
#infoMark4 {
    left: 61%;
}
#infoMark5 {
    left: 81%;
}
/*
movable parts below
*/
#html {
    margin-left: 2px;
    margin-top: 2px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#html::after {
    content: "HTML";
    position: absolute;
    top: 0;
    right: 0px;
    height: 20px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: red;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
    padding: 5px;
    padding-bottom: 0px;
    color: white;
    outline: 2px solid black;
    z-index: 1;
    margin-top: -2px;
}
#css {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#css::after {
    content: "CSS";
    position: absolute;
    top: 2px;
    right: 0;
    height: 20px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: orange;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
    padding: 5px;
    padding-bottom: 0px;
    margin-top: 12px;
    color: white;
    outline: 2px solid black;
    z-index: 1;
}
#js {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#js::after {
    content: "JS";
    position: absolute;
    top: 2px;
    right: 0;
    height: 20px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: blue;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
    padding: 5px;
    padding-bottom: 0px;
    margin-top: 12px;
    color: white;
    outline: 2px solid black;
    z-index: 1;
}
#output {
    margin-left: 2px;
    margin-top: 15px;
    margin-right: 18px;
    margin-bottom: 12px;
    height: 93%;
    width: auto;
    background-color: transparent;
}
#output::after {
    content: "Output";
    position: absolute;
    top: 0;
    right: 0;
    height: 36px;
    border-radius: 36px;
    border-top-right-radius: 0;
    background-image: linear-gradient(90deg, red,red,red,red,red,red,red,red,red,red,orange, orange, orange, orange, orange, orange, orange, orange, orange, orange, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue );
    font-size: 28px;
    line-height: 28px;
    text-align: left;
    padding: 5px;
    padding-bottom: 0px;
    margin-top: 12px;
    outline: 2px solid black;
    z-index: 1;
    color: white;

    -webkit-text-stroke: 1px black;
}
.sectionHolder {
    width: 100%;
}
textarea {
    height: 100%;
    width: 100%;
    resize: none;

    border: none;
    background-color: transparent;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    
}
textarea:focus {
    outline: none !important;
    background-color: transparent;
}

#leftSide {
    position: absolute;
    top: 0;
    left: 0;
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

/* below is code for sliders */
#horizontalSlider {
    position: absolute;
    top: 0px;
    left: 50%;
    height: 100%;
    width: 15px;
    background-color: rgba(111,111,111,0.3);
    outline: 2px dashed rgba(50, 50, 50, 1);
    cursor: pointer;

}
.vslider {
    position: absolute;
    left: 0;
    width: 100%;
    height: 15px;
    
    cursor: row-resize;
    background-color: #0e5850;
}
#vSlider1 {
    top: 25.0%;
}
#vSlider2 {
    top: 50.0%;
}
#vSlider3 {
    top: 75.0%;
}
#top {
    width: 100%;
    background-color:transparent;
    top: 0;
}
#middle {
    width: 100%;
    background-color:transparent;
    top: 25.0%;
}
#bottom {
    width: 100%;
    background-color:transparent;
    top: 50.0%;
    background-color: transparent;
}
#subbottom {
    width: 100%;
    background-color:transparent;
    top: 75.0%;
    background-color: transparent;
}
.sidePart {
    position: absolute;
    left: 0;
    width: 50%;
    height: calc(25.0%);
}

/* above is code for sliders */

template {
    opacity: 0;
    display: none;
}
.sizeHolder {
    height: 315px;
    width: 420px;
    border: 3px solid black;
}
.learningZone2Side {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    z-index: 1001;
}

#learningZone5 {
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
}
#learningZone4 {
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
}
#learningZone3 {
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
}
#learningZone2 {
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.learningZone1Side {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
}
#learningZone1 {
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
#continueButtonContainer {
    position: absolute;
    right: 0px;
    bottom: 40px;
    z-index: 90215;
}
.learningZone {
    position: absolute;
    height: calc(100%);
    width: 100%;
    font-size: 100px;
    transition: background-color 1s;
}
</style>