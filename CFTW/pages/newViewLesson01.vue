<template>
    <main id="body">
        
       <div id="trackingImagesContainer"></div>

        <div id="trackingImg1" class="trackingImage"></div>
        <div id="trackingImg2" class="trackingImage"></div>
        <div id="trackingImg3" class="trackingImage"></div>
        <div id="trackingImg4" class="trackingImage"></div>
        <div id="trackingImg5" class="trackingImage"></div>
                 
        <div id="trackingImg1Title" class="trackingImgTitle">Introduction</div>
        <div id="trackingImg2Title" class="trackingImgTitle"> Code Walk  </div>
        <div id="trackingImg3Title" class="trackingImgTitle">Interaction </div>
        <div id="trackingImg4Title" class="trackingImgTitle"> Pair Code  </div>
        <div id="trackingImg5Title" class="trackingImgTitle">  Mastery   </div>
        
        <div id="smallTrackingImg1" class="smallTrackingImage"></div>
        <div id="smallTrackingImg2" class="smallTrackingImage"></div>
        <div id="smallTrackingImg3" class="smallTrackingImage"></div>
        <div id="smallTrackingImg4" class="smallTrackingImage"></div>

        <div id="checkMark1" class="localCheckMark">&#10004;</div>
        <div id="checkMark2" class="localCheckMark">&#10004;</div>
        <div id="checkMark3" class="localCheckMark">&#10004;</div>
        <div id="checkMark4" class="localCheckMark">&#10004;</div>
        <div id="checkMark5" class="localCheckMark">&#10004;</div>

        <div id="infoMark1" class="infoMark">&#9432;</div>
        <div id="infoMark2" class="infoMark">&#9432;</div>
        <div id="infoMark3" class="infoMark">&#9432;</div>
        <div id="infoMark4" class="infoMark">&#9432;</div>
        <div id="infoMark5" class="infoMark">&#9432;</div>

        <div id="explanationContainer">
            <div id="leftSideExplanation">
                <div id="leftSideExplanationTitle"></div>
                <div id="leftSideExplanationDescription"></div>
            </div>
            <div id="rightSideExplanation">
                <div id="rightSideExplanationTitle"></div>
                <div id="rightSideExplanationDescription"></div>
            </div>
        </div>

        <div id="opaqueScreen"></div>
            
        <template id="template1" class="templt" v-if="this.currentLearningZone == 1">
            
            <div key=1 id="learningZone1" class="learningZone">
                <!-- <div>1</div> -->
                <div class="introVideo learningZone1Side">
                    <!-- <div id="videoToWatchTitle">This video explains what you will learn in this unit.</div> -->
                    <iframe class="youTubeVideo" width="420" height="315" src="https://www.youtube.com/embed/vOsdfRbrNdk"></iframe>
                </div>
                <div class="introFinalResult learningZone1Side">
                    <!-- <div id="pageToCreateTitle">This window demonstrates what you will produce in this unit.</div> -->
                    <iframe class="youTubeVideo" width="420" height="315" src="https://www.youtube.com/embed/vOsdfRbrNdk"></iframe>
                </div>

            </div>
        </template>

        <template id="template2" class="templt" v-if="this.currentLearningZone == 2">
            <div key=2 id="learningZone2" class="learningZone">
                <!-- <div>2</div> -->
                <div class="showCodeSide learningZone2Side">
                    <!-- <div id="showCodeTitle">Follow along with the code.</div> -->
                    <!-- <div id="learningZone2CodeModule" class="sizeHolder">SHOW CODE INTERACTION MODULE</div> -->
                    <div id="learningZone2CodeModule" class="sizeHolder">
<!--  -->

                        <div id="mainContainerOutside">
                            <div id="leftSide"></div>
            
                            <div id="top" class="sidePart">
                                <div id="html" class="sectionHolder">
                                    <textarea id="drewCodeHTML" class="localCode local drewsmall" readonly></textarea>
                                </div>
                            </div>
                            <div id="middle" class="sidePart">
                                <div id="css" class="sectionHolder">
                                    <textarea id="drewCodeCSS" class="localCode local drewsmall" readonly></textarea>
                                </div>
                            </div>
                            <div id="bottom" class="sidePart">
                                <div id="js" class="sectionHolder">
                                    <textarea id="drewCodeJavaScript" class="localCode local drewsmall" readonly></textarea>
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
<!--  -->           </div>
                </div>
                <div class="sandyExplainSide learningZone2Side">
                    <!-- <div id="sandyExplainTitle">Listen to Sandy go through the code.</div> -->
                    <iframe class="sizeHolder" width="420" height="315" src="https://www.youtube.com/embed/vOsdfRbrNdk"></iframe>
                </div>
            </div>
        </template>

        <template id="template3" class="templt" v-if="this.currentLearningZone == 3">
            <div key=3 id="learningZone3" class="learningZone">
                <!-- <div>3</div> -->
                <div class="sandyShowCodeSide learningZone3Side">
                    <!-- <div id="sandyShowCodeTitle">Use this code to help you with yours.</div> -->
                    <div class="sizeHolder" width="420" height="315" src="">SHOW CODE INTERACTION MODULE</div>
                </div>
                <div class="drewMakeCodeSide learningZone3Side">
                    <!-- <div id="drewMakeCodeTitle">Implement your code below.</div> -->
                    <div class="sizeHolder">SHOW CODE INTERACTION MODULE</div>
                </div>

            </div>
        </template>

        <template id="template4" class="templt"  v-if="this.currentLearningZone == 4">            
            <div key=4 id="learningZone4" class="learningZone">
                <!-- <div>4</div> -->
                <div class="drewMakeCodeSide4 learningZone4Side">
                    <!-- <div id="drewMakeCodeSideTitle4">Implement code and follow along in video.</div> -->
                    <!-- <div class="sizeHolder" width="420" height="315" src="">SHOW CODE INTERACTION MODULE</div> -->
                    <div id="learningZone2CodeModule" class="sizeHolder">
<!--  -->

                        <div id="mainContainerOutsideDad">
                            <div id="leftSideDad"></div>
            
                            <div id="topDad" class="sidePart">
                                <div id="htmlDad" class="sectionHolder">
                                    <textarea @keyup="executeThisCode()" id="drewCodeHTMLDad" class="localCode local drewsmall"></textarea>
                                </div>
                            </div>
                            <div id="middleDad" class="sidePart">
                                <div id="cssDad" class="sectionHolder">
                                    <textarea @keyup="executeThisCode()" id="drewCodeCSSDad" class="localCode local drewsmall"></textarea>
                                </div>
                            </div>
                            <div id="bottomDad" class="sidePart">
                                <div id="jsDad" class="sectionHolder">
                                    <textarea @keyup="executeThisCode()" id="drewCodeJavaScriptDad" class="localCode local drewsmall"></textarea>
                                </div>
                            </div>
            


                            <div id="subbottomDad" class="sidePart">
                                <div id="outputDad" class="sectionHolder">
                                    <iframe loading="lazy" id="drewDisplayDad" src="" class="localDisplay"></iframe>
                                </div>
                            </div>

                            

                            <div id="vSlider1Dad" class="vslider"></div> 
                            <div id="vSlider2Dad" class="vslider"></div>
                            <div id="vSlider3Dad" class="vslider"></div>

                        </div>
<!--  -->           </div>
                </div>
                <div class="drewMakeCodeSide learningZone4Side">
                    <!-- <div id="drewMakeCodeTitle2">Watch Drew attempt to code.</div> -->
                    <!-- <iframe loading="lazy" id="drewDisplayZone5" src="" class="localDisplay"></iframe> -->
                    <iframe class="youTubeVideo" width="420" height="315" src="https://www.youtube.com/embed/vOsdfRbrNdk"></iframe>
                    <iframe style="align-self: flex-start;" loading="lazy" id="drewDisplayZone5" src="" class="localDisplay"></iframe>
                    <!-- <iframe class="sizeHolder" width="420" height="315" src="https://www.youtube.com/embed/vOsdfRbrNdk"></iframe> -->
                </div>

            </div>
        </template>

        <template id="template5" class="templt" v-if="this.currentLearningZone == 5">
            <div key=5 id="learningZone5" class="learningZone">
                <!-- <div>5</div> -->
                <div class="drewMakeCodeSide5 learningZone5Side">
                    <!-- <div id="drewMakeCodeSideTitle5">Implement code from memory and the visual.</div> -->

                    <div id="learningZone2CodeModule" class="sizeHolder">
<!--  -->

                        <div id="mainContainerOutsideDad">
                            <div id="leftSideDad"></div>
            
                            <div id="topDad" class="sidePart">
                                <div id="htmlDad" class="sectionHolder">
                                    <textarea @keyup="executeThisCode()" id="drewCodeHTMLDad" class="localCode local drewsmall"></textarea>
                                </div>
                            </div>
                            <div id="middleDad" class="sidePart">
                                <div id="cssDad" class="sectionHolder">
                                    <textarea @keyup="executeThisCode()" id="drewCodeCSSDad" class="localCode local drewsmall"></textarea>
                                </div>
                            </div>
                            <div id="bottomDad" class="sidePart">
                                <div id="jsDad" class="sectionHolder">
                                    <textarea @keyup="executeThisCode()" id="drewCodeJavaScriptDad" class="localCode local drewsmall"></textarea>
                                </div>
                            </div>
            


                            <div id="subbottomDad" class="sidePart">
                                <div id="outputDad" class="sectionHolder">
                                    <iframe loading="lazy" id="drewDisplayDad" src="" class="localDisplay"></iframe>
                                </div>
                            </div>

                            

                            <div id="vSlider1Dad" class="vslider"></div> 
                            <div id="vSlider2Dad" class="vslider"></div>
                            <div id="vSlider3Dad" class="vslider"></div>

                        </div>
<!--  -->           </div>
                </div>
                <div id="level5RightDisplay" class="displayOnlyCodeResult learningZone5Side">
                    <iframe loading="lazy" id="drewDisplayZone5" src="" class="localDisplay"></iframe>
                    <!-- <div id="displayOnlyCodeResultTitle">Use the visual to guide your code.</div> -->
                    
                </div>
            </div>
        </template>

        <div id="continueButtonContainer">
            <template v-if="(this.currentLearningZone < 6) && (!this.learningCompleted)">
                <div ontouchstart="" @click="performAnimation()">
                    <div class="button">
                        <nuxt-link to="">Next level: <br><br> {{ this.levelNames[this.currentLearningZone] }}</nuxt-link>
                    </div>
                </div>
            </template>
            <template v-else>
                <div ontouchstart="" @click="finishAndSave()">
                    <div class="button">
                        <nuxt-link to="">Next Lesson!</nuxt-link>
                    </div>
                </div>
            </template>
        </div>
    </main>
</template>

<script>


export default {
    data() {
        return {
            id: "",
            learningCompleted: false,
            currentLearningZone: 1,
            levelNames: ["Introduction", "Code Walk", "Interaction", "Pair Code", "Mastery", "(almost done!)" ],
            minimumHeight: 220,


            upperVerticalSliderOriginalPositionLevel2Left: 0,
            lowerVerticalSliderOriginalPositionLevel2Left: 0,
            lowestVerticalSliderOriginalPositionLevel2Left: 0,
            upperVerticalSliderNewPositionLevel2Left: 0,
            lowerVerticalSliderNewPositionLevel2Left: 0,
            lowestVerticalSliderNewPositionLevel2Left: 0,
            upperVerticalSliderSetInInitialPositionOnHoverLevel2Left: false,
            lowerVerticalSliderSetInInitialPositionOnHoverLevel2Left: false,
            lowestVerticalSliderSetInInitialPositionOnHoverLevel2Left: false,

            // upperVerticalSliderOriginalPositionLevel2Left: 100,
            // lowerVerticalSliderOriginalPositionLevel2Left: 100,
            // lowestVerticalSliderOriginalPositionLevel2Left: 100,
            // upperVerticalSliderNewPositionLevel2Left: 200,
            // lowerVerticalSliderNewPositionLevel2Left: 200,
            // lowestVerticalSliderNewPositionLevel2Left: 200,
            // upperVerticalSliderSetInInitialPositionOnHoverLevel2Left: false,
            // lowerVerticalSliderSetInInitialPositionOnHoverLevel2Left: false,
            // lowestVerticalSliderSetInInitialPositionOnHoverLevel2Left: false,

            // upperVerticalSliderOriginalPosition: 100,
            // lowerVerticalSliderOriginalPosition: 100,
            // lowestVerticalSliderOriginalPosition: 100,
            // upperVerticalSliderNewPosition: 200,
            // lowerVerticalSliderNewPosition: 200,
            // lowestVerticalSliderNewPosition: 200,
            // upperVerticalSliderSetInInitialPositionOnHover: false,
            // lowerVerticalSliderSetInInitialPositionOnHover: false,
            // lowestVerticalSliderSetInInitialPositionOnHover: false,

            upperVerticalSliderOriginalPositionDad: 100,
            lowerVerticalSliderOriginalPositionDad: 100,
            lowestVerticalSliderOriginalPositionDad: 100,
            upperVerticalSliderNewPositionDad: 200,
            lowerVerticalSliderNewPositionDad: 200,
            lowestVerticalSliderNewPositionDad: 200,
            upperVerticalSliderSetInInitialPositionOnHoverDad: false,
            lowerVerticalSliderSetInInitialPositionOnHoverDad: false,
            lowestVerticalSliderSetInInitialPositionOnHoverDad: false,


            codeExplanations: 
                {
                    "e1Left": {
                        "title": "Introduction\n\nLesson Overview",
                        "description": "This video explains in broad details what you will make the technologies you will use. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl purus. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Suspendisse interdum consectetur libero id. Id cursus metus aliquam eleifend mi in nulla. Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt eget nullam non nisi est. Cursus mattis molestie a iaculis at. Pellentesque sit amet porttitor eget. Eu turpis egestas pretium aenean pharetra. Quisque id diam vel quam elementum pulvinar. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus."
                    },  
                    "e1Right": {
                        "title": "Introduction\n\nFinal Product Demonstration",
                        "description": "This window lets you interact and view the final product. Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    }, 
                    
                    "e2Left": {
                        "title": "Code Walk\n\nExamine the Code",
                        "description": "This window lets you view the code with the final product. Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    },  
                    "e2Right": {
                        "title": "Code Walk\n\nView Building the Code",
                        "description": "This video has Sandy's walk through of the code.Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    }, 

                    "e3Left": {
                        "title": "Interaction\n\nCode Base",
                        "description": "This window lets you view the code with the final product.Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    },  
                    "e3Right": {
                        "title": "Interaction\n\nImplement the Code ",
                        "description": "This window lets you implement the code. Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    }, 

                    "e4Left": {
                        "title": "Pair Code\n\nImplement the Code along with Drew",
                        "description": "This window lets you implement the code. Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    },  
                    "e4Right": {
                        "title": "Pair Code\n\nWatch Drew Implement the Code",
                        "description": "This video is of Drew implement the code. Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    }, 

                    "e5Left": {
                        "title": "Mastery\n\nImplement the Code from the Visual",
                        "description": "This window lets you implement the code. Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    },  
                    "e5Right": {
                        "title": "Mastery\n\nUse the Visual",
                        "description": "This window is of the final product only. Further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum further details lorem ipsum "
                    }, 
                
                
                },
            sandyNowText: "hey",
            
        }
    },
    components: {

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
        
        async finishAndSave() {
            let webDevLessonID = this.webDevLessonID
            this.lessonHasReachedCompletion = true
            // let urlParams = new URLSearchParams(window.location.search);
            // let webDevLessonID = urlParams.get("webDevLessonID")
            let userID = this.$auth.user._id

            let completedLessons = []
            for (let i = 0; i < this.drewSaveLessonStatuses.length; i++) {
                let drewSaveLessonStatus = this.drewSaveLessonStatuses[i]
                if (drewSaveLessonStatus.userWhoFinishedID == userID) {
                    let completedLessonID = drewSaveLessonStatus.lessonID
                    completedLessons.push(completedLessonID)
                }
            }
            for (let i = 0; i < completedLessons.length; i++) {
                let completedLesson = completedLessons[i]
                if (completedLesson == webDevLessonID) {
                    alert("You've already completed this lesson. Great revisit!")
                    return
                }
            }
            // console.log("saving")
            
            if (this.lessonHasReachedCompletion == true) {
                // console.log("cool")
                try {
                    let data = {
                        lessonID: webDevLessonID,
                        userWhoFinishedID: userID,
                        dateCompleted: Date.now()
                    };

                    let response = await this.$axios.$post("/api/drewSaveLessonStatuses", data);
                    this.$router.push(`/profile`);
                // let result = await this.$axios.$post("/api/webDevLessons", data);
                } catch (err) {
                    console.log(err)
                }
            }
            else {
                return
            }
        },
        resetSliderPositions() {
            // let slider1 = document.getElementById

            this.upperVerticalSliderOriginalPositionLevel2Left = 0
            this.lowerVerticalSliderOriginalPositionLevel2Left = 0
            this.lowestVerticalSliderOriginalPositionLevel2Left = 0
            this.upperVerticalSliderNewPositionLevel2Left = 0
            this.lowerVerticalSliderNewPositionLevel2Left = 0
            this.lowestVerticalSliderNewPositionLevel2Left = 0
            this.upperVerticalSliderSetInInitialPositionOnHoverLevel2Left = false
            this.lowerVerticalSliderSetInInitialPositionOnHoverLevel2Left = false
            this.lowestVerticalSliderSetInInitialPositionOnHoverLevel2Left = false

            // this.upperVerticalSliderOriginalPositionLevel2Left = 100
            // this.lowerVerticalSliderOriginalPositionLevel2Left = 100
            // this.lowestVerticalSliderOriginalPositionLevel2Left = 100
            // this.upperVerticalSliderNewPositionLevel2Left = 200
            // this.lowerVerticalSliderNewPositionLevel2Left = 200
            // this.lowestVerticalSliderNewPositionLevel2Left = 200
            // this.upperVerticalSliderSetInInitialPositionOnHoverLevel2Left = false
            // this.lowerVerticalSliderSetInInitialPositionOnHoverLevel2Left = false
            // this.lowestVerticalSliderSetInInitialPositionOnHoverLevel2Left = false

        },
        executeThisCode(){
            // console.log("executing code")
            let drewCodeHTMLDad = document.getElementById("drewCodeHTMLDad")
            let drewCodeCSSDad = document.getElementById("drewCodeCSSDad")
            let drewCodeJavaScriptDad = document.getElementById("drewCodeJavaScriptDad")
            let drewDisplayDad = document.getElementById("drewDisplayDad")
            
            let htmlValue = drewCodeHTMLDad.value
            let cssValue = drewCodeCSSDad.value
            let javaScriptValue = drewCodeJavaScriptDad.value

            
            

            sessionStorage.setItem(`drewCodeForDisplayHTMLDad`, htmlValue)

            if (drewCodeCSSDad.value == "") {
                sessionStorage.setItem(`drewCodeForDisplayCSSDad`, "* {}")
            }
            else {
                sessionStorage.setItem(`drewCodeForDisplayCSSDad`, cssValue)
            }
            sessionStorage.setItem(`drewCodeForDisplayJavaScriptDad`, javaScriptValue)

            drewDisplayDad["src"] = ""
            setTimeout(()=> {
                drewDisplayDad["src"] = "dadCode"    
            }, 100)

            setTimeout(() => {
                this.displayConsoleData()
            }, 450)


        },
        // for moving sliders
        dragVSlider1Level2Left() {

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
                // console.log("dragging", e)
                if (e.clientY < 70 + 54 + 70) {return}

                let slider2Top = slider2.offsetTop
                if (e.clientY > slider2Top + 90) {return}

                e = e || window.event;
                e.preventDefault();

                let top = document.getElementById("top")
                let middle = document.getElementById("middle")
                let bottom = document.getElementById("bottom")
                let subbottom = document.getElementById("subbottom")
                // let topHeight = e.clientY
                let topHeight = e.clientY - (70 + 54)
                let topHeightPx = topHeight + "px"

                this.upperVerticalSliderOriginalPositionLevel2Left = this.upperVerticalSliderNewPositionLevel2Left - e.clientY;
                this.upperVerticalSliderNewPositionLevel2Left = e.clientY;

                slider1.style.top = (slider1.offsetTop - this.upperVerticalSliderOriginalPositionLevel2Left) + "px";

                top.style.height = topHeightPx

                let slider1OffsetTop = slider1.offsetTop
                let slider2OffsetTop = slider2.offsetTop


// let middle = document.getElementById("middle")
                    
                // let bottom = document.getElementById("bottom")
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
        dragVSlider2Level2Left() {

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


                // console.log("e.clientY", e.clientY, "slider3OffsetTop", slider3OffsetTop)
                if (e.clientY < slider1OffsetTop + 198) {return}
                if (e.clientY > slider3OffsetTop + 88) {return}

                // if (e.clientY - 30 > mainContainerOutside.clientHeight) {return}
                // if (e.clientY < slider1.offsetTop + 150) {return}

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
        dragVSlider3Level2Left() {

            // let slider1 = document.getElementById("vSlider1")
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
                // console.log("e.clientY", e.clientY, "slider2Top", slider2Top)
                if (e.clientY < slider2Top + 208) {return}

                // if (e.clientY < slider1.offsetTop + 150) {return}

                this.lowestVerticalSliderOriginalPositionLevel2Left = this.lowestVerticalSliderNewPositionLevel2Left - e.clientY;
                this.lowestVerticalSliderNewPositionLevel2Left = e.clientY;
                let slider3Top = slider3.offsetTop - this.lowestVerticalSliderOriginalPositionLevel2Left
                slider3.style.top = (slider3Top) + "px";

                let top = document.getElementById("top")
                let middle = document.getElementById("middle")
                let bottom = document.getElementById("bottom")
                let subbottom = document.getElementById("subbottom")
                
                // let slider1OffsetTop = slider1.offsetTop
                // let slider2OffsetTop = slider2.offsetTop


                let topHeight = top.clientHeight
                // console.log("topHeight", topHeight)


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
                // subbottom.style.bottom = "100%"
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },

        dragVSlider1Dad() {

            let slider1 = document.getElementById("vSlider1Dad")
            let slider2 = document.getElementById("vSlider2Dad")
            
            slider1.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.upperVerticalSliderNewPositionDad = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                // console.log("dragging", e)
                if (e.clientY < 70 + 54 + 70) {return}

                let slider2Top = slider2.offsetTop
                if (e.clientY > slider2Top + 90) {return}

                e = e || window.event;
                e.preventDefault();

                let top = document.getElementById("topDad")
                let middle = document.getElementById("middleDad")
                let bottom = document.getElementById("bottomDad")
                let subbottom = document.getElementById("subbottomDad")
                // let topHeight = e.clientY
                let topHeight = e.clientY - (70 + 54)
                let topHeightPx = topHeight + "px"

                this.upperVerticalSliderOriginalPositionDad = this.upperVerticalSliderNewPositionDad - e.clientY;
                this.upperVerticalSliderNewPositionDad = e.clientY;

                slider1.style.top = (slider1.offsetTop - this.upperVerticalSliderOriginalPositionDad) + "px";

                top.style.height = topHeightPx

                let slider1OffsetTop = slider1.offsetTop
                let slider2OffsetTop = slider2.offsetTop


// let middle = document.getElementById("middle")
                    
                // let bottom = document.getElementById("bottom")
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
        dragVSlider2Dad() {

            let slider1 = document.getElementById("vSlider1Dad")
            let slider2 = document.getElementById("vSlider2Dad")
            let slider3 = document.getElementById("vSlider3Dad")
            
            slider2.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.lowerVerticalSliderNewPositionDad = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();

                let mainContainerOutside = document.getElementById("mainContainerOutsideDad")
                
                let top = document.getElementById("topDad")
                let middle = document.getElementById("middleDad")
                let bottom = document.getElementById("bottomDad")

                let slider1OffsetTop = slider1.offsetTop
                let slider2OffsetTop = slider2.offsetTop
                let slider3OffsetTop = slider3.offsetTop


                // console.log("e.clientY", e.clientY, "slider3OffsetTop", slider3OffsetTop)
                if (e.clientY < slider1OffsetTop + 198) {return}
                if (e.clientY > slider3OffsetTop + 88) {return}

                // if (e.clientY - 30 > mainContainerOutside.clientHeight) {return}
                // if (e.clientY < slider1.offsetTop + 150) {return}

                this.lowerVerticalSliderOriginalPositionDad = this.lowerVerticalSliderNewPositionDad - e.clientY;
                this.lowerVerticalSliderNewPositionDad = e.clientY;
                let slider2Top = slider2.offsetTop - this.lowerVerticalSliderOriginalPositionDad
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
        dragVSlider3Dad() {

            // let slider1 = document.getElementById("vSlider1")
            let slider2 = document.getElementById("vSlider2Dad")
            let slider3 = document.getElementById("vSlider3Dad")
            
            slider3.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.lowestVerticalSliderNewPositionDad = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();

                let mainContainerOutside = document.getElementById("mainContainerOutsideDad")

                if (e.clientY - 60 > mainContainerOutside.clientHeight) {return}

                let slider2Top = slider2.offsetTop
                // console.log("e.clientY", e.clientY, "slider2Top", slider2Top)
                if (e.clientY < slider2Top + 208) {return}

                // if (e.clientY < slider1.offsetTop + 150) {return}

                this.lowestVerticalSliderOriginalPositionDad = this.lowestVerticalSliderNewPositionDad - e.clientY;
                this.lowestVerticalSliderNewPositionDad = e.clientY;
                let slider3Top = slider3.offsetTop - this.lowestVerticalSliderOriginalPositionDad
                slider3.style.top = (slider3Top) + "px";

                let top = document.getElementById("topDad")
                let middle = document.getElementById("middleDad")
                let bottom = document.getElementById("bottomDad")
                let subbottom = document.getElementById("subbottomDad")
                
                // let slider1OffsetTop = slider1.offsetTop
                // let slider2OffsetTop = slider2.offsetTop


                let topHeight = top.clientHeight
                // console.log("topHeight", topHeight)


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
                // subbottom.style.bottom = "100%"
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
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

            sessionStorage.setItem(`drewCodeForDisplayHTML`, drewCodeHTML.value)

            if (drewCodeCSS.value == "") {
                sessionStorage.setItem(`drewCodeForDisplayCSS`, "* {}")
            }
            else {
                sessionStorage.setItem(`drewCodeForDisplayCSS`, drewCodeCSS.value)
            }
            sessionStorage.setItem(`drewCodeForDisplayJavaScript`, drewCodeJavaScript.value)

            drewDisplay["src"] = ""
            setTimeout(()=> {
                drewDisplay["src"] = "drewCode"    
            }, 100)

            setTimeout(() => {
                this.displayConsoleData()
            }, 450)
            // this.displayConsoleData()


            // }, 100)
        },
        displayDrewCodeDad(){
            let drewCodeHTML = document.getElementById("drewCodeHTMLDad")
            let drewCodeCSS = document.getElementById("drewCodeCSSDad")
            let drewCodeJavaScript = document.getElementById("drewCodeJavaScriptDad")
            let drewDisplay = document.getElementById("drewDisplayDad")

            sessionStorage.setItem(`drewCodeForDisplayHTMDadL`, drewCodeHTML.value)

            if (drewCodeCSS.value == "") {
                sessionStorage.setItem(`drewCodeForDisplayCSSDad`, "* {}")
            }
            else {
                sessionStorage.setItem(`drewCodeForDisplayCSSDad`, drewCodeCSS.value)
            }
            sessionStorage.setItem(`drewCodeForDisplayJavaScriptDad`, drewCodeJavaScript.value)

            drewDisplay["src"] = ""
            setTimeout(()=> {
                drewDisplay["src"] = "dadCode"    
            }, 100)

            // setTimeout(() => {
            //     this.displayConsoleData()
            // }, 450)
            // this.displayConsoleData()


            // }, 100)
        },

        setUpSlidersLevel2() {


            let vSlider1 = document.getElementById("vSlider1")
            let vSlider2 = document.getElementById("vSlider2")
            let vSlider3 = document.getElementById("vSlider3")

            vSlider1.addEventListener("mouseenter", (e) => {
                if (this.upperVerticalSliderSetInInitialPositionOnHoverLevel2Left == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider1Level2Left()
                    this.upperVerticalSliderSetInInitialPositionOnHoverLevel2Left = true
                }
                else {
                    return
                }
            })
            vSlider2.addEventListener("mouseenter", (e) => {
                if (this.lowerVerticalSliderSetInInitialPositionOnHoverLevel2Left == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider2Level2Left()
                    this.lowerVerticalSliderSetInInitialPositionOnHoverLevel2Left = true
                }
                else {
                    return
                }
            })
            vSlider3.addEventListener("mouseenter", (e) => {
                if (this.lowestVerticalSliderSetInInitialPositionOnHoverLevel2Left == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider3Level2Left()
                    this.lowestVerticalSliderSetInInitialPositionOnHoverLevel2Left = true
                }
                else {
                    return
                }
            })
            vSlider1.addEventListener("mousedown", (e) => {
                this.dragVSlider1Level2Left()
            })
            vSlider2.addEventListener("mousedown", (e) => {
                this.dragVSlider2Level2Left()
            })
            vSlider3.addEventListener("mousedown", (e) => {
                this.dragVSlider3Level2Left()
            })
        },
        setUpSlidersDad() {


            let vSlider1 = document.getElementById("vSlider1Dad")
            let vSlider2 = document.getElementById("vSlider2Dad")
            let vSlider3 = document.getElementById("vSlider3Dad")

            vSlider1.addEventListener("mouseenter", (e) => {
                if (this.upperVerticalSliderSetInInitialPositionOnHoverDad == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider1()
                    this.upperVerticalSliderSetInInitialPositionOnHoverDad = true
                }
                else {
                    return
                }
            })
            vSlider2.addEventListener("mouseenter", (e) => {
                if (this.lowerVerticalSliderSetInInitialPositionOnHoverDad == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider2()
                    this.lowerVerticalSliderSetInInitialPositionOnHoverDad = true
                }
                else {
                    return
                }
            })
            vSlider3.addEventListener("mouseenter", (e) => {
                if (this.lowestVerticalSliderSetInInitialPositionOnHoverDad == false) {
                    e = e || window.event;
                    e.preventDefault();
                    this.dragVSlider3()
                    this.lowestVerticalSliderSetInInitialPositionOnHoverDad = true
                }
                else {
                    return
                }
            })
            vSlider1.addEventListener("mousedown", (e) => {
                this.dragVSlider1Dad()
            })
            vSlider2.addEventListener("mousedown", (e) => {
                this.dragVSlider2Dad()
            })
            vSlider3.addEventListener("mousedown", (e) => {
                this.dragVSlider3Dad()
            })
        },

        ///////////////////
        performAnimation() {
            let darkBackgroundColors = ["rgb(155, 65, 0)","rgb(155, 155, 0)","rgb(0, 28, 0)","rgb(0, 0, 155)",]
            let backgroundColors = ["red", "orange", "yellow", "green", "blue"]
            let trackingImages = document.getElementsByClassName("trackingImage") // largest boxes
            let trackingImageTitles = document.getElementsByClassName("trackingImgTitle") // titles, eg. `introduction`
            let smallTrackingImages = document.getElementsByClassName("smallTrackingImage") // small, rotated squares
            let checkMarks = document.getElementsByClassName("localCheckMark") // checkmarks
            let infoMarks = document.getElementsByClassName("infoMark") // infoMarks
            
            if (this.learningCompleted) {return}
            // try {this.setUpSliders()}
            // catch {console.log("couldn't set up sliders")}
            for (let i = 1; i < trackingImages.length; i++) {
                let colorIsDark = false
                let trackingImage = trackingImages[i]
                let trackingImageBackgroundColor = getComputedStyle(trackingImage).backgroundColor

                if (darkBackgroundColors.includes(trackingImageBackgroundColor)) {
                    colorIsDark = true
                }

                if (colorIsDark && i != 4) {
                    let trackingImage = trackingImages[i]
                    let nextTrackingImage = trackingImages[i+1]
                    let title = trackingImageTitles[i-1]
                    let nextTitle = trackingImageTitles[i]
                    let square = smallTrackingImages[i-1]
                    let nextSquare = smallTrackingImages[i]
                    let checkMark = checkMarks[i-1]
                    let infoMark = infoMarks[i-1]
                    let nextInfoMark = infoMarks[i]

                    setTimeout(()=>{
                        infoMark.style.display = "none"
                        nextInfoMark.style.display = "initial"
                    }, 500)
                    

                    checkMark.style.opacity = "1"
                    checkMark.style.webkitTextStroke = "2px white"
                    
                    square.style.borderLeft = "3px solid black"
                    square.style.borderBottom = "3px solid black"

                    square.style.borderRight = "3px solid transparent"
                    square.style.borderTop = "3px solid transparent"

                    trackingImage.style.backgroundColor = backgroundColors[i]
                    square.style.backgroundColor = backgroundColors[i]

                    nextSquare.style.backgroundColor = backgroundColors[i]

                    let titleComputedLeft = getComputedStyle(title).left.split(".")[0]
                    let titleComputedLeftPercent = window.innerWidth

                    let numberPercentToMoveTitleLeft = `${((titleComputedLeft / window.innerWidth) * 100) - 3}%`
                    let numberPercentToMoveTitleLeftIfIEqualsOne =  `${((titleComputedLeft / window.innerWidth) * 100) - 3}%`
                    let numberPercentToMoveNextTitleLeft = `${((titleComputedLeft / window.innerWidth) * 100) + 20.5}%`

                    if (i == 1) {
                        title.style.left = numberPercentToMoveTitleLeftIfIEqualsOne
                    }
                    else {
                        title.style.left = numberPercentToMoveTitleLeft
                    }

                    nextTitle.style.left = numberPercentToMoveNextTitleLeft
                    this.currentLearningZone = i + 1
                    // if (i == 0) {
                    // try {this.setUpSliders()}
                    // catch {console.log("couldn't set up sliders")}
                    // }
                    return
                }
                if(colorIsDark && i == 4) {
                    let trackingImage = trackingImages[i]
                    let title = trackingImageTitles[i-1]
                    let nextTitle = trackingImageTitles[i]
                    let square = smallTrackingImages[i-1]
                    let checkMark = checkMarks[i-1]
                    let infoMark = infoMarks[i-1]
                    let nextInfoMark = infoMarks[i]

                    setTimeout(()=>{
                        infoMark.style.display = "none"
                        nextInfoMark.style.display = "initial"
                    }, 500)

                    let numberPixelsToMoveLeft = Math.floor(window.innerWidth / 5 / 5)

                    checkMark.style.opacity = "1"
                    checkMark.style.webkitTextStroke = "2px white"

                    square.style.borderLeft = "3px solid black"
                    square.style.borderBottom = "3px solid black"

                    square.style.borderRight = "3px solid transparent"
                    square.style.borderTop = "3px solid transparent"

                    trackingImage.style.backgroundColor = backgroundColors[i]
                    square.style.backgroundColor = backgroundColors[i]

                    let titleComputedLeft = getComputedStyle(title).left.split(".")[0]

                    let numberPercentToMoveTitleLeft = `${((titleComputedLeft / window.innerWidth) * 100) - 3}%`
                    let numberPercentToMoveNextTitleLeft = `${((titleComputedLeft / window.innerWidth) * 100) + 20.5}%`
                   
                    title.style.left = numberPercentToMoveTitleLeft
                    nextTitle.style.left = numberPercentToMoveNextTitleLeft
                    this.currentLearningZone = i + 1
                    return
                }
                if (i == 4) {

                    let infoMark = infoMarks[i-1]
                    // let nextInfoMark = infoMarks[i]
                    let percentToMoveCurrentInfoMarkLeft = 95.5

                    // let extraForOrange = 1
                    for (let j = infoMarks.length - 1; j >= 0; j--) {
                        let currentInfoMark = infoMarks[j]
                        if (j == 1) {
                            let localPercentToMoveCurrentInfoMarkLeft = percentToMoveCurrentInfoMarkLeft + 0.5
                            currentInfoMark.style.left = `${localPercentToMoveCurrentInfoMarkLeft}%`    
                        } else {
                            currentInfoMark.style.left = `${percentToMoveCurrentInfoMarkLeft}%`
                        }
                        
                        percentToMoveCurrentInfoMarkLeft -= 20
                        // currentInfoMark.style.display = "initial"
                        
                    }
                    // infoMark.style.display = "initial"

                    // setTimeout(()=>{
                    //     infoMark.style.display = "none"
                    //     // nextInfoMark.style.display = "initial"
                    // }, 500)

                    let checkMark = checkMarks[i]
                    checkMark.style.opacity = "1"
                    checkMark.style.webkitTextStroke = "2px white"
                    
                    let title = trackingImageTitles[i]

                    let titleComputedLeft = getComputedStyle(title).left.split(".")[0]
                    let titleComputedLeftPercent = window.innerWidth

                    let numberPercentToMoveTitleLeft = `${((titleComputedLeft / window.innerWidth) * 100) - 3}%`

                    title.style.left = numberPercentToMoveTitleLeft

                    this.learningCompleted = true
                    this.enableLevelClicking()
                    this.currentLearningZone = i + 1
                    
                    for (let j = 0; j < checkMarks.length; j++) {
                        let checkm = checkMarks[j]
                        checkm.style.transitionDelay = "0ms"
                    }

                    return

                }
                if (i == 5) {
                    // this.learningCompleted = true
                }          
            }
        },
        enableLevelClicking() {
            let trackingImages = document.getElementsByClassName("trackingImage") // largest boxes
            let trackingImageTitles = document.getElementsByClassName("trackingImgTitle") // titles, eg. `introduction` 
            let checkMarks = document.getElementsByClassName("localCheckMark") // checkmarks

            for (let i = 0; i < trackingImages.length; i++) {
                let trackingImage = trackingImages[i]
                let trackingImageTitle = trackingImageTitles[i]
                let checkMark = checkMarks[i]
                
                trackingImage.style.cursor = "pointer"
                trackingImageTitle.style.cursor = "pointer"
                checkMark.style.cursor = "pointer"

                trackingImage.addEventListener("click", () => {
                    this.showLevel(i)
                })

                trackingImageTitle.addEventListener("click", () => {
                    this.showLevel(i)
                })

                checkMark.addEventListener("click", () => {
                    this.showLevel(i)
                })
            }

        },
        showLevel(level) {
            this.currentLearningZone = level + 1
            let infoMarks = document.getElementsByClassName("infoMark") // infoMarks
            for (let i = 0; i < infoMarks.length; i++) {
                let infoMark = infoMarks[i]
                if (level == i) {
                    
                    infoMark.style.display = "initial"
                } else {
                    infoMark.style.display = "none"
                }
                
            }
            
            let checkMarks = document.getElementsByClassName("localCheckMark") // checkmarks


            for (let i = 0; i < checkMarks.length; i++) {
                let checkMark = checkMarks[i]

                if (i == level) {
                    checkMark.style.color = "white"
                    checkMark.style.webkitTextStroke = "2px black"

                }
                else {
                    checkMark.style.color = "initial"
                    checkMark.style.webkitTextStroke = "2px white"

                }
            }
        },
        displayDadCodeOnUpdate() {
            let urlParams = new URLSearchParams(window.location.search);
            let webDevLessonID = urlParams.get("webDevLessonID") || sessionStorage.currentWebDevLesson
            sessionStorage.setItem("currentWebDevLesson", webDevLessonID)
            // let webDevLessonID = "635bdc55802c7805bc27ea79"

            for (let i = 0; i < this.webDevLessons.length; i++) {
                let lesson = this.webDevLessons[i]
                if (lesson._id == webDevLessonID) {
                    // console.log("lesson info: ", lesson)
                    let html = document.getElementById("drewCodeHTML")
                    let css = document.getElementById("drewCodeCSS")
                    let js = document.getElementById("drewCodeJavaScript")

                    html.innerText = lesson.htmlContent
                    css.innerText = lesson.cssContent
                    js.innerText = lesson.javaScriptContent
                }
            }
        },
        initialSetUpOfInfoMarksAndExplanationContainer() {
            let infoMarks = document.getElementsByClassName("infoMark") // infoMarks
            
            let explanationContainer = document.getElementById("explanationContainer")
            let leftSideExplanationTitle = document.getElementById("leftSideExplanationTitle")
            let rightSideExplanationTitle = document.getElementById("rightSideExplanationTitle")
            let leftSideExplanationDescription = document.getElementById("leftSideExplanationDescription")
            let rightSideExplanationDescription = document.getElementById("rightSideExplanationDescription")

            let opaqueScreen = document.getElementById("opaqueScreen")
            opaqueScreen.style.display = "none"

            explanationContainer.style.display = "none"

            for (let i = 0; i < infoMarks.length; i++) {
                let infoMark = infoMarks[i]
                infoMark.style.display = "none"

                infoMark.addEventListener("mouseenter", () => {
                    setTimeout(() => {

                        let leftSideTitleText = this.codeExplanations[`e${i+1}Left`]["title"]
                        let leftSideDescriptionText = this.codeExplanations[`e${i+1}Left`]["description"]
                        let rightSideTitleText = this.codeExplanations[`e${i+1}Right`]["title"]
                        let rightSideDescriptionText = this.codeExplanations[`e${i+1}Right`]["description"]
                        explanationContainer.style.display = "flex"
                        
                        leftSideExplanationTitle.innerText = leftSideTitleText
                        leftSideExplanationDescription.innerText = leftSideDescriptionText
                        rightSideExplanationTitle.innerText = rightSideTitleText
                        rightSideExplanationDescription.innerText = rightSideDescriptionText
                        
                        
                        
                        
                        
                        // leftSideExplanation.innerText = this.codeExplanations[i * 2]
                        // rightSideExplanation.innerText = this.codeExplanations[(i * 2) + 1]
                        opaqueScreen.style.display = "initial"
                        // explanationContainer.style.display = "initial"
                    }, 667);
                    
                })
                infoMark.addEventListener("mouseleave", () => {
                    explanationContainer.style.display = "none"
                    opaqueScreen.style.display = "none"
                })
            }
            let firstMark = infoMarks[0]
            firstMark.style.display = "initial"
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
        setUpLevel5() {
            
            let drewDisplay = document.getElementById("drewDisplayZone5")
            drewDisplay["src"] = ""
            setTimeout(()=> {
                drewDisplay["src"] = "drewCode"    
            }, 100)
        },


    },

    mounted() {
        this.currentLearningZone = 1
        this.levelNames = ["Introduction", "Code Walk", "Interaction", "Pair Code", "Mastery", "q" ]
        
        this.initialSetUpOfInfoMarksAndExplanationContainer()


        let urlParams = new URLSearchParams(window.location.search);
        let webDevLessonID = urlParams.get("webDevLessonID")
        this.webDevLessonID = webDevLessonID

        // this.highlightFinishedLessons()


    },
    beforeUpdate() {
        try {this.resetSliderPositions()}
        catch {}
    },
    updated() {

        // try {this.resetSliderPositions()}
        // catch {}

        try {this.setUpSlidersLevel2()}
        catch {}
        
        // try {this.resetSliderPositions()}
        // catch {}
        
        try {this.setUpSlidersDad()}
        catch {}
        
        // try {this.resetSliderPositions()}
        // catch {}
        
        try {this.allowTabbing()}
        catch {}
        
        try {this.displayDadCodeOnUpdate()}
        catch {}

        try {this.displayDrewCode()}
        catch {}

        try {this.setUpLevel5()}
        catch {}

        
    },
    updated() {
        sessionStorage.setItem("currentTitle", "CurrentLesson")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "CurrentLesson")
    },
    beforeUpdate() {
        sessionStorage.setItem("currentTitle", "CurrentLesson")
    },

}
</script>

<style scoped>
.learningZone4Side {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 90213;
    

}
.youTubeVideo {
    margin-bottom: 20px;
    /* display: none; */
}
#level5RightDisplay {
    z-index: 90211;
}


/* Below is lesson5 left side */

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
    right: 0;
    /* width: 50px; */
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: darkorange;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-right: 11px;
    /* writing-mode: vertical-lr;
    text-orientation: upright; */
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
    /* width: 50px; */
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
    /* width: 50px; */
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
    /* transition: 375ms background-color;  */
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
    /* width: 50px; */
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
#mainContainerOutsideDad {
    position: absolute;
    top: 70px;
    left: 0;
    background-color: white;
    height: calc(100%);
    /* height: calc(100% - 164px); */
    /* height: calc(100% - 220px); */
    width: 100%;
    /* outline: 5px solid black; */
}
#leftSideDad {
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: white; */
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

/* below is code for sliders */

.vslider {
    position: absolute;
    /* top: 33.334%; */
    left: 0;
    width: 50%;
    height: 15px;
    
    cursor: pointer;
    background-color: gray;
    outline: 2px dashed rgba(50, 50, 50, 1);
}
#vSlider1Dad {
    top: 25.0%;
    /* background-color: rgba(255, 0, 0, 0.5); */
    /* background-color: rgba(50, 50, 50, 1); */

}
#vSlider2Dad {
    top: 50.0%;
    /* background-color: rgba(0, 255, 0, 0.5); */
    /* background-color: rgba(50, 50, 50, 0.5); */
}
#vSlider3Dad {
    top: 75.0%;
    /* background-color: rgba(0, 0, 255, 0.5); */
    /* background-color: rgba(50, 50, 50, 0.5); */
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

/* Above is lesson5 left side */




#drewMakeCodeSide {
    z-index: 90211;
}

/*
explanationContainer below
*/

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
    /* background-color: aqua; */
}
#rightSideExplanation {
    height: 330px;
    width: 45%;
    border-left: 3px solid black;
    /* background-color: red; */
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
    right: 0;
    /* width: 50px; */
    height: 50px;
    border-radius: 20px;
    border-top-right-radius: 0;
    background-color: darkorange;
    font-size: 20px;
    line-height: 50px;
    text-align: left;
    padding: 0 5px;
    margin-right: 11px;
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
    background-color: transparent;
}
#css::after {
    content: "CSS";
    position: absolute;
    top: 0;
    right: 0;
    /* width: 50px; */
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
    top: 0;
    right: 0;
    /* width: 50px; */
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
    /* transition: 375ms background-color;  */
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
    /* width: 50px; */
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
    height: calc(100%);
    /* height: calc(100% - 164px); */
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
    /* top: 33.334%; */
    left: 0;
    width: 50%;
    height: 15px;
    
    cursor: pointer;
    background-color: gray;
    outline: 2px dashed rgba(50, 50, 50, 1);
}
#vSlider1 {
    top: 25.0%;
    /* background-color: rgba(255, 0, 0, 0.5); */
    /* background-color: rgba(50, 50, 50, 1); */

}
#vSlider2 {
    top: 50.0%;
    /* background-color: rgba(0, 255, 0, 0.5); */
    /* background-color: rgba(50, 50, 50, 0.5); */
}
#vSlider3 {
    top: 75.0%;
    /* background-color: rgba(0, 0, 255, 0.5); */
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
    top: 25.0%;
}
#bottom {
    width: 50%;
    background-color:transparent;
    top: 50.0%;
    background-color: transparent;
}
#subbottom {
    width: 50%;
    background-color:transparent;
    top: 75.0%;
    background-color: transparent;
}
.sidePart {
    position: absolute;
    left: 0;
    width: 50%;
    height: calc(25.0%);
    /* border: 3px dashed black; */
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
    /* background-color: lightblue; */
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
}
#learningZone4 {
    /* background-color: plum; */
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
}
#learningZone3 {
    /* background-color: yellowgreen; */
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
}
#learningZone2 {
    /* background-color: burlywood; */
    /* height: calc(100%); */
    height: calc(100% - 168px);
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* outline: 2px solid black; */
    /* z-index: 1001; */
    /* border: 2px solid black; */
}
.learningZone1Side {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
}
#learningZone1 {
    /* background-color: aqua; */
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
    /* top: 136px; */
    height: calc(100%);
    /* height: calc(100% - 168px); */
    width: 100%;
    /* background-color: blue; */
    font-size: 100px;
    transition: background-color 1s;
    
}
/* level tracking scheme below */
#trackingImagesContainer {
    height: 60px;
    width: 100%;
    background-color:black;
    position: absolute;
    /* top: 70px; */
    /* z-index: 10000; */
    border-top: 3px solid black;
    border-bottom: 3px solid black;

}
.trackingImage {
    position: absolute;
    top: 70px;
    height: 60px;
    width: 20%;
    
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    transition: background-color 1s;
    /* opacity: 0.7; */
}
.trackingImgTitle {
    position: absolute;
    top: 85px;
    height: 30px;
    line-height: 30px;
    
    /* top: 313px; */
    /* font-size: max(16px, 2.2vw); */
    font-size: clamp(12px, 2vw, 30px);
    color: black;

    background-color: white !important;
    
    padding: 3px;
    border-radius: 3px;
    margin-left: 10px; 
    z-index: 1001;
    transition: left 1s;

    white-space: pre;
    text-align: center;

    /* -webkit-text-stroke: 2px black; */
    
    
}
.smallTrackingImage {
    position: absolute;
    /* top: 10px; */
    top: 80px;
    height: 40px;
    width: 40px;

    transform: rotate(45deg);
    
    border-right: 3px solid black;
    border-top: 3px solid black;
    border-left: 3px solid transparent;
    border-bottom: 3px solid transparent;

    transition: border 1s, background-color 1s;
    
    
    /* z-index: 5; */
    
}
.localCheckMark {
    position: absolute;
    top: 80px;
    height: 40px;
    opacity: 0;
    font-size: clamp(20px, 4.4vw, 40px);
    /* font-size: 4.4vw; */
    z-index: 1001;
    -webkit-text-stroke: 2px white;
    background-color: transparent;
    transition: opacity 500ms, color 500ms, -webkit-text-stroke 500ms;
    transition-delay: 1000ms;
}
#trackingImg1 {
    background-color: red;
    opacity: 1;
    left: 0%;
}
#trackingImg2 {
    background-color: rgba(155,65,0,1);
    left: 20%;
}
#trackingImg3 {
    background-color: rgba(155,155,0,1);
    left: 40%;
}
#trackingImg4 {
    background-color: rgba(0, 28,0,1);
    left: 60%;
}
#trackingImg5 {
    background-color:  rgba(0,0,155,1);
    left: 80%;
}
#smallTrackingImg1 {
    background-color: red;
    left: calc(20% - 20px);
}
#smallTrackingImg2 {
    background-color: rgba(155,65,0,1);
    left: calc(40% - 20px);
}
#smallTrackingImg3 {
    background-color: rgba(155,155,0,1);
    left: calc(60% - 20px);
}
#smallTrackingImg4 {
    background-color: rgba(0, 28,0,1);
    left: calc(80% - 20px);
}
#trackingImg1Title {
    background-color: red;
    /* background-color: darkred; */
    opacity: 1;
    left: 3%;
    outline: 2px dashed black;
}
#trackingImg2Title {
    background-color: orange;
    /* background-color: darkorange; */
    opacity: 1;
    left: 25%;
    outline: 2px dashed black;
}
#trackingImg3Title {
    background-color: yellow;
    /* background-color: darkgoldenrod; */
    opacity: 1;
    left: 45%;
    outline: 2px dashed black;
}
#trackingImg4Title {
    background-color: green;
    /* background-color: darkgreen; */
    opacity: 1;
    left: 65%;
    outline: 2px dashed black;
}
#trackingImg5Title {
    background-color: blue;
    /* background-color: darkblue; */
    opacity: 1;
    left: 85%;
    outline: 2px dashed black;
}
#checkMark1 {
    left: calc(15% - 20px);
}
#checkMark2 {
    left: calc(36% - 20px);
}
#checkMark3 {
    left: calc(55% - 20px);
}
#checkMark4 {
    left: calc(75% - 20px);
}
#checkMark5 {
    left: calc(95% - 20px);
}
/* level tracking scheme above */
</style>