<template>
    <main>
        <span id='number'>0</span>
        <div id="navigationContainer">
            <template v-if="$auth.$state.loggedIn">
                <template v-if="$auth.$state.user.email == `sandy@sandy.com`">
                    <div ontouchstart="" @click="goTo(`addNewLesson`)">
                        <div class="button">
                            <nuxt-link to="">Add New Lesson</nuxt-link>
                        </div>
                    </div>
                    <!-- <div id="goToAddKanBanItem" @click="goTo(`addNewLesson`)">Add New Lesson</div> -->
                </template>
            </template>
            
            <template v-if="$auth.$state.loggedIn">
                    <template v-if="!this.$route.name.includes(`profile`)">
                        <div ontouchstart="">
                            <div class="button">
                                <nuxt-link to="/profile#nicknamesCurriculum">{{ $auth.$state.user.nickName }}'s Curriculum</nuxt-link>
                            </div>
                        </div>
                        <div ontouchstart="">
                            <div class="button">
                                <nuxt-link to="/profile#nicknamesSavedCode">{{ $auth.$state.user.nickName }}'s Saved Code</nuxt-link>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <!-- <div></div> -->
                        <p id="nothingSpacer"></p>
                    </template>
            </template>

            <template v-else>
                    <div ontouchstart="">
                        <div class="button">
                            <nuxt-link to="/login">Log In</nuxt-link>
                        </div>
                    </div>

                    <div ontouchstart="">
                        <div class="button">
                            <nuxt-link to="/signup">Sign Up</nuxt-link>
                        </div>
                    </div>
            </template>
                

            <template v-if="!this.$route.name.includes(`practice`)">
                    <div ontouchstart="">
                        <div class="button">
                            <nuxt-link to="/practice">Create New Page</nuxt-link>
                        </div>
                    </div>
            </template>

            <template v-else>
                <p id="nothingSpacer"></p>
            </template>

            <div ontouchstart="">
                <div class="button">
                    <nuxt-link to="/about">About CFTW</nuxt-link>
                </div>
            </div>
        </div>
        <div id="navbarContainer">
            <nuxt-link id="firstLL" to="/mainpage">
                <img src="/img/codeForTheWorldLogo.png" alt="Coding Icon" srcset="">
            </nuxt-link>
            <div id="pageTitleContainer">
                <div id="regularDisplay"></div>
                <div id="ifLessonDisplay">
                    <div id="fiveSectionsDisplay">
                        <div id="s1" class="section"><span id="s1Textbox" class="localTextBox">Introduction</span></div>
                        <div id="s2" class="section"><span id="s2Textbox" class="localTextBox">Code Walk</span></div>
                        <div id="s3" class="section"><span id="s3Textbox" class="localTextBox">Interaction</span></div>
                        <div id="s4" class="section"><span id="s4Textbox" class="localTextBox">Pair Code</span></div>
                        <div id="s5" class="section"><span id="s5Textbox" class="localTextBox">Mastery</span></div>
                    </div>
                </div>
            </div> 
            <div id="hamburger" @click="showOptions">
                <span id="topBurgerLine" class='burgerLine'> . . . . . . </span>
                <span id="middleBurgerLine" class='burgerLine'> . . . . . . </span>
                <span id="bottomBurgerLine" class='burgerLine'> . . . . . . </span>
            </div>
        </div>

    </main>
</template>
<script>
export default {
    data() {
        return {
            id: "",
            animationIsFinished: false,
            
        }
    },
    async asyncData({ $axios }) {
      try {
        let webDevLessonsResponse = await $axios.$get("/api/webDevLessons");

        return {
          webDevLessons: webDevLessonsResponse.webDevLessons
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        goTo(destination) {
            if (destination == "addNewLesson") {
                this.$router.push("/addWebDevLesson");
            }
            else if (destination == "viewCurriculum") {
                this.$router.push("/viewCurriculum");
            }
            else if (destination == "randomLesson") {
                let ids = this.webDevLessons.filter((item => {return item._id}))
                let randomID = ids[Math.floor(Math.random() * this.webDevLessons.length)]
                this.$router.push(`/viewLesson?webDevLessonID=${randomID}`);
            }
            this.showOptions()
        },
        showOptions() {
            // let everythingElse = document.body.children[0].children[0].children[0].children[0].children[0].children[1] || document.body.children[0].children[0].children[0].children[0].children[0]
            let topBurgerLine = document.getElementById("topBurgerLine");
            let middleBurgerLine = document.getElementById("middleBurgerLine");
            let bottomBurgerLine = document.getElementById("bottomBurgerLine");

            let number = document.getElementById("number");

            let topBurgerLineKFFirstMove = "@keyframes topBurgerLineKFFirstMove         { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);}                    50% {transform: translateX(0px)  translateY(8px)   rotateZ(-90deg) ;}                  100% {transform: translateX(0px)  translateY(20px)   rotateZ(-135deg) ;} }";
            let middleBurgerLineKFFirstMove = "@keyframes middleBurgerLineKFFirstMove   { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);}                    50% {transform: translateX(5px) translateY(-17px) rotateZ(-90deg) ; opacity: 0.2 ;}    100% {transform: translateX(5px) translateY(-7px) rotateZ(-90deg) ; opacity: 0.0} }";
            let bottomBurgerLineKFFirstMove = "@keyframes bottomBurgerLineKFFirstMove   { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);}                    50% {transform: translateX(0px) translateY(-11px) rotateZ(-90deg) ;}                   100% {transform: translateX(0px) translateY(-12px) rotateZ(-45deg) ;} }";

            let topBurgerLineKFSecondMove = "@keyframes topBurgerLineKFSecondMove       {0% {transform: translateX(0px)  translateY(20px)   rotateZ(-135deg) ;}              50% {transform: translateX(0px)  translateY(8px)   rotateZ(-90deg) ;}                 100%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} }";
            let middleBurgerLineKFSecondMove = "@keyframes middleBurgerLineKFSecondMove {0% {transform: translateX(5px) translateY(-7px) rotateZ(-90deg); opacity: 0.0 ;}    50% {transform: translateX(5px) translateY(-17px) rotateZ(-90deg); opacity: 0.2 ;}    100%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} opacity: 1.0 ;}";
            let bottomBurgerLineKFSecondMove = "@keyframes bottomBurgerLineKFSecondMove {0% {transform: translateX(0px) translateY(-12px) rotateZ(-45deg) ;}                 50% {transform: translateX(0px) translateY(-11px) rotateZ(-90deg) ;}                  100%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} }";
            
            let navigationContainer = document.getElementById("navigationContainer")

            if (number.innerHTML == 0) {
                while (document.styleSheets[0].length > 0) {
                    document.styleSheets[0].removeRule(0);
                }

                document.styleSheets[0].insertRule(topBurgerLineKFFirstMove, 0);
                document.styleSheets[0].insertRule(middleBurgerLineKFFirstMove, 1);
                document.styleSheets[0].insertRule(bottomBurgerLineKFFirstMove, 2);

                topBurgerLine.style.animation = "";
                middleBurgerLine.style.animation = "";
                bottomBurgerLine.style.animation = "";

                topBurgerLine.style.animation = "topBurgerLineKFFirstMove 375ms linear forwards";
                middleBurgerLine.style.animation = "middleBurgerLineKFFirstMove 375ms linear forwards";
                bottomBurgerLine.style.animation = "bottomBurgerLineKFFirstMove 375ms linear forwards";

                number.innerHTML = 1;
                navigationContainer.style.transition = "opacity 0.375s 0.200s"
                navigationContainer.style.opacity = "1.0"

                navigationContainer.style.zIndex = 100

                // everythingElse.style.opacity = "0.4"
            } else {
                while (document.styleSheets[0].length > 0) {
                    document.styleSheets[0].removeRule(0);
                }

                document.styleSheets[0].insertRule(topBurgerLineKFSecondMove, 0);
                document.styleSheets[0].insertRule(middleBurgerLineKFSecondMove, 1);
                document.styleSheets[0].insertRule(bottomBurgerLineKFSecondMove, 2);

                topBurgerLine.style.animation = "";
                middleBurgerLine.style.animation = "";
                bottomBurgerLine.style.animation = "";

                topBurgerLine.style.animation = "topBurgerLineKFSecondMove 250ms linear forwards";
                middleBurgerLine.style.animation = "middleBurgerLineKFSecondMove 250ms linear forwards";
                bottomBurgerLine.style.animation = "bottomBurgerLineKFSecondMove 250ms linear forwards";

                number.innerHTML = 0;
                navigationContainer.style.opacity = "0.0"
                navigationContainer.style.zIndex = -100

                // everythingElse.style.opacity = "initial"
            }
        },
        dismissNavigationContainer() {
            this.showOptions()
        },
        setCurrentTitle() {
            let pageTitleContainer = document.getElementById("pageTitleContainer")
            pageTitleContainer.style.opacity = "0"
            setTimeout(() => {
                    pageTitleContainer.style.opacity = "1"
            }, 350)


            let currentTitle = sessionStorage.getItem("currentTitle")
            // console.log("current title: ", currentTitle)

            let regularDisplay = document.getElementById("regularDisplay")
            let ifLessonDisplay = document.getElementById("ifLessonDisplay")

            regularDisplay.style.display = "none"
            ifLessonDisplay.style.display = "none"

            let regularDisplayShown = true
            let lessonSectionTitles = ["introduction", "Introduction", "codewalk", "Codewalk", "CodeWalk", "Code Walk",  "interaction", "Interaction", "paircode", "Paircode", "PairCode", "Pair Code", "mastery", "Mastery"]
            for (let i = 0; i < lessonSectionTitles.length; i++) {
                let sectionTitle = lessonSectionTitles[i]
                if (sectionTitle == currentTitle) {
                    regularDisplayShown = false
                }
            }
            if (regularDisplayShown) {
                regularDisplay.style.display = "initial"
            }
            else {
                
                
                ifLessonDisplay.style.display = "initial"
            }

            if (regularDisplayShown) {
                if (currentTitle == "Profile") {
                    let userID = this.$auth.$state.user.nickName
                    regularDisplay.innerHTML = userID + "'s " + currentTitle
                }
                else if (currentTitle == "Welcome") {
                    let userID 
                    try {
                        userID = this.$auth.$state.user.nickName
                    }
                    catch {
                        userID == "" || userID == undefined
                    }
                    
                    if (userID == "" || userID == undefined) {
                        regularDisplay.innerHTML = currentTitle
                    }
                    else {
                        regularDisplay.innerHTML = currentTitle + ", " + userID
                    }
                    
                }
                else {
                    regularDisplay.innerHTML = currentTitle
                }
                
            }
            else {
            let sections = document.getElementsByClassName("section")
            let localTextBoxes = document.getElementsByClassName("localTextBox")
            

            

            function styleCurrentSection(section) {
                section.style.width = `${window.innerWidth - 520}px`
                section.style.height = "60px"
                section.style.marginTop = "10px"
                section.style.lineHeight = "60px"
                section.style.fontSize = "30px"
            }

            function unstyleCurrentSection(section) {
                section.style = "initial"
            }

            let selectedTitle = -1

            // console.log("current currentTitle", currentTitle)
            for (let i = 0; i < sections.length; i++) {
                let section = sections[i]
                
                let localTextBox = localTextBoxes[i]
                if (localTextBox.innerHTML == "Introduction" && currentTitle == "Introduction") {
                    ifLessonDisplay.style.display = "initial"
                    section = document.getElementById("s1")
                    styleCurrentSection(section)
                    section.style.borderTopRightRadius = "32px"
                    
                    localTextBox.style.backgroundColor = "white"
                    selectedTitle = 0
                }
                // console.log("local textBox innerhtml", localTextBox.innerHTML)
                if (localTextBox.innerHTML == "Code Walk" && currentTitle == "CodeWalk") {
                    // console.log("trying to set codewalk's styling")
                    let s = document.getElementById("s2")
                    styleCurrentSection(s)
                    s.style.borderTopRightRadius = "32px"
                    s.style.borderTopLeftRadius = "32px"

                    localTextBox.style.backgroundColor = "white"
                    selectedTitle = 1
                }


                if (localTextBox.innerHTML == "Interaction" && currentTitle == "Interaction") {
                    styleCurrentSection(section)
                    section.style.borderTopRightRadius = "32px"
                    section.style.borderTopLeftRadius = "32px"

                    localTextBox.style.backgroundColor = "white"
                    selectedTitle = 2
                }


                if (localTextBox.innerHTML == "Pair Code" && currentTitle == "PairCode") {
                    styleCurrentSection(section)
                    section.style.borderTopRightRadius = "32px"
                    section.style.borderTopLeftRadius = "32px"

                    localTextBox.style.backgroundColor = "white"
                    selectedTitle = 3
                }


                if (localTextBox.innerHTML == "Mastery" && currentTitle == "Mastery") {
                    styleCurrentSection(section)
                    section.style.borderTopLeftRadius = "32px"

                    localTextBox.style.backgroundColor = "white"
                    selectedTitle = 4
                }

            }
            if (selectedTitle == -1) {
                ifLessonDisplay.style.display = "none"
                pageTitleContainer.innerHTML = currentTitle
                pageTitleContainer.style.color = "black"
            }
            else {
                pageTitleContainer.style.color = "initial"
            }



            let nums = [0,1,2,3,4]
            let titles = ["introduction", "codewalk", "interaction", "paircode", "mastery"]
            if (selectedTitle != -1) {
                for (let i = 0; i < nums.length; i++) {
                    let num = nums[i]
                    let section = sections[i] 
                    if (num != selectedTitle) {
                        unstyleCurrentSection(section)
                    }
                    if (num < selectedTitle) {
                        section.style.cursor = "pointer"
                        section.addEventListener("click", () => {
                            this.$router.push(`/${titles[i]}`);
                        })
                    }
                }
            }
            }
            // console.log(regularDisplayShown)
            
            // let sections = document.getElementsByClassName("section")
            // let localTextBoxes = document.getElementsByClassName("localTextBox")
            

            // let pageTitleContainer = document.getElementById("pageTitleContainer")

            // function styleCurrentSection(section) {
            //     section.style.width = `${window.innerWidth - 520}px`
            //     section.style.height = "60px"
            //     section.style.marginTop = "10px"
            //     section.style.lineHeight = "60px"
            //     section.style.fontSize = "30px"
            // }

            // function unstyleCurrentSection(section) {
            //     section.style = "initial"
            // }

            // let selectedTitle = -1

            // // console.log("current currentTitle", currentTitle)
            // for (let i = 0; i < sections.length; i++) {
            //     let section = sections[i]
                
            //     let localTextBox = localTextBoxes[i]
            //     if ((localTextBox.innerHTML == "Introduction" && currentTitle == "Introduction") || first == "first") {
            //         ifLessonDisplay.style.display = "initial"
            //         section = document.getElementById("s1")
            //         styleCurrentSection(section)
            //         section.style.borderTopRightRadius = "32px"
                    
            //         localTextBox.style.backgroundColor = "white"
            //         selectedTitle = 0
            //     }
            //     // console.log("local textBox innerhtml", localTextBox.innerHTML)
            //     if (localTextBox.innerHTML == "Code Walk" && currentTitle == "CodeWalk") {
            //         // console.log("trying to set codewalk's styling")
            //         let s = document.getElementById("s2")
            //         styleCurrentSection(s)
            //         s.style.borderTopRightRadius = "32px"
            //         s.style.borderTopLeftRadius = "32px"

            //         localTextBox.style.backgroundColor = "white"
            //         selectedTitle = 1
            //     }


            //     if (localTextBox.innerHTML == "Interaction" && currentTitle == "Interaction") {
            //         styleCurrentSection(section)
            //         section.style.borderTopRightRadius = "32px"
            //         section.style.borderTopLeftRadius = "32px"

            //         localTextBox.style.backgroundColor = "white"
            //         selectedTitle = 2
            //     }


            //     if (localTextBox.innerHTML == "Pair Code" && currentTitle == "PairCode") {
            //         styleCurrentSection(section)
            //         section.style.borderTopRightRadius = "32px"
            //         section.style.borderTopLeftRadius = "32px"

            //         localTextBox.style.backgroundColor = "white"
            //         selectedTitle = 3
            //     }


            //     if (localTextBox.innerHTML == "Mastery" && currentTitle == "Mastery") {
            //         styleCurrentSection(section)
            //         section.style.borderTopLeftRadius = "32px"

            //         localTextBox.style.backgroundColor = "white"
            //         selectedTitle = 4
            //     }

            // }
            // if (selectedTitle == -1) {
            //     ifLessonDisplay.style.display = "none"
            //     pageTitleContainer.innerHTML = currentTitle
            //     pageTitleContainer.style.color = "black"
            // }
            // else {
            //     pageTitleContainer.style.color = "initial"
            // }



            // let nums = [0,1,2,3,4]
            
            // if (selectedTitle != -1) {
            //     for (let i = 0; i < nums.length; i++) {
            //         let num = nums[i]
            //         let section = sections[i] 
            //         if (num != selectedTitle) {
            //             unstyleCurrentSection(section)
            //         }
            //         if (num < selectedTitle) {
            //             section.style.cursor = "pointer"
            //             section.addEventListener("click", () => {
            //                 this.$router.push(`/${titles[i]}`);
            //             })
            //         }
            //     }
            // }
            

        },
        
    },
    beforeMount() {
        // this.setCurrentTitle()
    },
    mounted() {
        setTimeout(()=> {
            this.setCurrentTitle()
        }, 50)
        setTimeout(()=> {
            let number = document.getElementById("number")
            if (number.innerHTML == 1) {
                this.dismissNavigationContainer()
            }
        }, 100)
        
    },
    beforeUpdate() {
        
        
    },
    updated() {
        setTimeout(()=> {
            // console.log("updated")
            this.setCurrentTitle()
        }, 50)
        setTimeout(()=> {
            let number = document.getElementById("number")
            if (number.innerHTML == 1) {
                this.dismissNavigationContainer()
            }
        }, 200)

        
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
/* #00C49A */
#pageTitleContainer {
    width: calc(100% - 240px);
    text-align: center;
    line-height: 70px;
    font-size: 48px;
    
    text-align: center;
    border-radius: 64px;
    opacity: 0;
    
}
#regularDisplay {
    height: 100%;
}
#ifLessonDisplay {
    /* background-color: lightcoral; */
    height: 100%;
}
#fiveSectionsDisplay {
    display: flex;
    flex-direction: row;
    /* align-items: flex-end; */
}
.section {
    width: 80px;
    font-size: 12px;
    /* outline: 3px solid black; */
    height: 30px;
    line-height: 30px;
    margin-top: 40px;
    transition: 375ms all;
}
#s1 {
    background-color: red;
    /* width: 200px; */
}
#s2 {
    background-color: orange;
}
#s3 {
    background-color: yellow;
}
#s4 {
    background-color: green;
}
#s5 {
    background-color: blue;
}
.localTextBox {
    padding: 4px;
    height: fit-content;
    width: fit-content;
    background-color: rgba(255,255,255,0.85);
    border-radius: 8px;
    outline: 1px solid rgba(0,0,0,0.4);
    /* font-size: clamp(12px, 1.4vw, 16px); */
}

@keyframes flipTitle {
    0% {
        transform: skewX(0deg)
    }

    40% {
        transform: skewX(90deg)
    }
    60% {
        transform: skewX(270deg)
    }
    100% {
        transform: skewX(360deg);
    }
}

#nothingSpacer {
    display: none;
}
main {
    background-color: white;
}
#navigationContainer {
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 80px;
    right: 1%;
    width: 98%;
    min-height: 80%;
    outline: 2px solid black;
    border-radius: 4px;
    /* background-color: black; */
    color: white;
    z-index: -100;
    opacity: 0.0;
    /* background-image: linear-gradient(90deg, lightslategray,lightslategray, turquoise, turquoise,turquoise,turquoise, lightslategray); */
    background-color:#158479;
}
#navigationContainer > div {
    width: 80%;
    height: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 25px;
    /* background-color: white; */
    color: black;
    text-align: left;
    font-size: 35px;
    line-height: 35px;
    z-index: -99;
}
#navbarContainer {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    z-index: -1;
    height: 70px;
}
#firstLL {
    margin-left: 10px;
    width: 100px;
}
#hamburger {
  min-width: 100px;
  height: 100%;
  width: 100px;
  z-index: 14;
  cursor: pointer;
  transform: scale(1.0);
  transition: transform 0.375s ease-in-out;
  margin-right: 10px;
}

img {
    height: 70px;
}

.centerPart {
    font-family: 'Noto Sans JP', sans-serif;
    height: 70px;

    line-height: 70px;
    font-size: 36px;

    min-width: 318px;
    animation-duration: 1.0s;
    animation-timing-function: linear;
    animation-name: doLeftwardAnimation;
    animation-delay: 2.5s;
    animation-fill-mode: forwards;
}



</style>