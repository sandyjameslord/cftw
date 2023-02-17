<template>
    <main>
        <div id="learningZone" class="learningZone">
            <div id="learningZoneLeft" class="learningZoneSide">
                <div class="titleAndInfoBox">
                    <div class="learningZoneTitle">What You Will Learn   </div>

                    <div ontouchstart="" @click="displayInfo(`left`)">
                        <div id="leftInfoButton" class="infoButton button info lclLink">
                            <nuxt-link class="" to=""><span class="moveTextSpan">&#8505;</span></nuxt-link>
                        </div>
                    </div>
                </div>
                <div id="learningGoalsBox">
                    <div id="learningLevelBox" class="contentBox">
                        <div id="learningLevelTitle" class="titleOfContent">Level</div>
                        <div id="learningLevel" class="contentItself"></div>
                    </div>
                    <div id="lessonContentBox" class="contentBox">
                        <div id="lessonContentTitle" class="titleOfContent">Title</div>
                        <div id="lessonContent" class="contentItself"></div>
                    </div>
                    <div id="keywordsBox" class="contentBox">
                        <div id="keywordsTitle" class="titleOfContent">Keywords</div>
                        <div id="keywords" class="contentItself"></div>
                    </div>
                </div>
                
                <iframe class="youTubeVideo leftPart" width="420" height="315" src="https://www.youtube.com/embed/vOsdfRbrNdk"></iframe>
                <div id="emptyBoxForSpace" class="bottomBox"></div>
            </div>
            <div id="learningZoneRight" class="learningZoneSide">
                <div class="titleAndInfoBox">
                    <div class="learningZoneTitle">What You Will Produce   </div>
                    <div ontouchstart="" @click="displayInfo(`right`)">
                        <div id="rightInfoButton" class="infoButton button info lclLink">
                            <nuxt-link class="" to=""><span class="moveTextSpan">&#8505;</span></nuxt-link>
                        </div>
                    </div>
                </div>
                
                <iframe id="finalProductDisplay" class="localDisplay rightPart" loading="lazy" src="" ></iframe>
                <div id="controlBox" class="bottomBox">
                    <div ontouchstart="" @click="openPage(`codewalk`)">
                        <div class="button controlBoxButton">
                            <nuxt-link to="">Next level:<br>Code Walk</nuxt-link>
                        </div>
                    </div>
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
            leftInfoTitleText: "What You Will Learn",
            leftInfoContentText: "The Learning Goals Box to the left contains information about this lesson. <br><br><br>Watch the video. Sandy will introduce this lesson, present goals and discuss final outcomes.<br><br><br>Remember to pace yourself and focus on your own goals.",  
            rightInfoTitleText: "What You Will Produce",
            rightInfoContentText: "Check out the final product. This is what you will be able to produce by the end of the lesson.<br><br><br>What do you see from a programming perspective?<br><br><br>What is your experience?",
            sideSelected: "none",
            // sameSideSelected: false

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
            this.initializeLessonInformationDisplay() 
        },
        initiateRightSide() {
            let urlParams = new URLSearchParams(window.location.search);
            let webDevLessonID = urlParams.get("webDevLessonID") || sessionStorage.lessonID
            sessionStorage.setItem("currentWebDevLesson", webDevLessonID)
            let finalProductDisplay = document.getElementById("finalProductDisplay")
            for (let i = 0; i < this.webDevLessons.length; i++) {
                let lesson = this.webDevLessons[i]
                if (lesson._id == webDevLessonID) {
                    let htmlValue = lesson.htmlContent
                    let cssValue = lesson.cssContent
                    let jsValue = lesson.javaScriptContent
                    sessionStorage.setItem(`drewCodeForDisplayHTML`, htmlValue)
                    sessionStorage.setItem(`drewCodeForDisplayCSS`, cssValue)
                    sessionStorage.setItem(`drewCodeForDisplayJavaScript`, jsValue)
                }
            }
            finalProductDisplay["src"] = ""
            setTimeout(()=> {
                finalProductDisplay["src"] = "drewCode"    
            }, 100)
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
            console.log("what `lessonLevel` is: ", lessonLevel)
            let htmlCSSJS = lessonLevel.substring(2, 3)
            let lessonNumber = "Lesson " + lessonLevel.substring(lessonLevel.length - 2,lessonLevel.length)
            if (htmlCSSJS == "H") {
                htmlCSSJS = "HTML"
                

            }
            else if (htmlCSSJS == "C") {
                htmlCSSJS = "CSS"
                // lessonNumber = parseInt(lessonLevel.substring(4,7))
            }
            else if (htmlCSSJS == "J") {
                htmlCSSJS = "JavaScript"
                // lessonNumber = parseInt(lessonLevel.substring(4,7))
            }

            

            let extraLine = "\n"

            lessonTitleDiv.innerText = lessonTitle
            lessonLevelDiv.innerText = begginingIntermediateAdvanced + extraLine + htmlCSSJS + extraLine + lessonNumber
            lessonKeywordsDiv.innerText = keywords
        },
        
    },
    updated() {
        sessionStorage.setItem("currentTitle", "Introduction")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "Introduction")
    },
    beforeUpdate() {
        sessionStorage.setItem("currentTitle", "Introduction")
    },
    mounted() {
        sessionStorage.setItem("currentTitle", "Introduction")
        let initialHTML = sessionStorage.getItem(`drewCodeForDisplayHTML`)
        let initialCSS = sessionStorage.getItem(`drewCodeForDisplayCSS`)
        let initialJS = sessionStorage.getItem(`drewCodeForDisplayJavaScript`)
console.log(initialHTML, initialCSS, initialJS)
        sessionStorage.setItem("htmlCodeForDisplay", initialHTML)
        sessionStorage.setItem("cssCodeForDisplay", initialCSS)
        sessionStorage.setItem("javaScriptCodeForDisplay", initialJS)
                    
        let finalProductDisplay = document.getElementById("finalProductDisplay")
        finalProductDisplay["src"] = ""
        setTimeout(()=> {
            finalProductDisplay["src"] = "drewCode"    
        }, 100)


        // setTimeout(() => {
        //     this.$refs.navbar.setCurrentTitle("first")
        // }, 200)
        this.initiateLeftSide()
        this.initiateRightSide()
        let infoDisplay = document.getElementById("infoDisplay")
        infoDisplay.style.opacity = "0"

        
        
    },
}
</script>

<style scoped>

.titleOfContent {
    /* background-color: turquoise; */
    height: 50px;
    width: 140px;
    font-size: 24px;
    margin-top: 5px;
    margin-left: 5px;
    line-height: 50px;
    text-align: left;
    

}
.contentItself {
    /* background-color: green; */
    height: 28px;
    /* width: auto; */
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
    /* font-size: 24px; */
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
    width: 100%;
    height: 70px;
    background-color: rgba(255,255,255,0.5);
    display: flex;
    flex-direction: row;
    justify-content:center;
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
.bottomBox {
    height: 70px;
    width: 100%;
    margin-top: 15px;
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
.learningZoneSide {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 50%;
    height: 100%;
    padding: 8px;
    border: 1px solid black;
}
#learningZone {
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#keywords {
    font-size: clamp(10px, 1.8vw, 16px);
    /* background-color: aqua; */
    
}
</style>