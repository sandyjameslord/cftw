<template>
    <!-- <main id="body"> -->
        <main>
        <br>
        <div id="title"></div>
        <div id="headerInfo"></div>
        <div id="outerContainer">
            <div class="side titleSide" >
                <div class="sideLocal htmlTitle">HTML</div>
                <div class="sideLocal cssTitle">CSS</div>
                <div class="sideLocal jsTitle">JS</div>
                <div class="sideLocal outputTitle">Output</div>
            </div>
            <div id="dadSide" class="side">
                <textarea readonly id="dadCodeHTML" class="localCode local dadsmall"></textarea>
                <textarea readonly id="dadCodeCSS" class="localCode local dadsmall"></textarea>
                <textarea readonly id="dadCodeJavaScript" class="localCode local dadsmall"></textarea>
                <iframe id="dadDisplay" src="" class="localDisplay local"></iframe>
            </div>
            <div class="side titleSide">
                <div class="sideLocal htmlTitle">HTML</div>
                <div class="sideLocal cssTitle">CSS</div>
                <div class="sideLocal jsTitle">JS</div>
                <div class="sideLocal outputTitle">Output</div>
            </div>
            <div id="drewSide" class="side">
                <textarea id="drewCodeHTML" class="localCode local drewsmall"></textarea>
                <textarea id="drewCodeCSS" class="localCode local drewsmall"></textarea>
                <textarea id="drewCodeJavaScript" class="localCode local drewsmall"></textarea>
                <iframe id="drewDisplay" src="" class="localDisplay local"></iframe>
            </div>
        </div>
        <div id="drewSubmit" @click="this.displayDrewCode">Process your code</div>
        <div id="localConsole"></div>
        <br>
    </main>
</template>

<script>


export default {
    data() {
        return {
            id: "",
            drewCurrentCode: "",
            lessonHasReachedCompletion: false,
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
        
        async finishAndSave() {
            let urlParams = new URLSearchParams(window.location.search);
            let webDevLessonID = urlParams.get("webDevLessonID")
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
            
            if (this.lessonHasReachedCompletion == true) {
                try {
                    let data = {
                        lessonID: webDevLessonID,
                        userWhoFinishedID: userID,
                        dateCompleted: Date.now()
                    };

                    let response = await this.$axios.$post("/api/drewSaveLessonStatuses", data);
                } catch (err) {
                    console.log(err)
                }
            }
            else {
                return
            }
        },
        
        determineIfFinishedAndSave() {
            let dadHTML = sessionStorage.getItem(`dadCodeForDisplayHTML`) || "no entry for now"
            let dadCSS = sessionStorage.getItem(`dadCodeForDisplayCSS`) || "no entry for now"
            let dadJS = sessionStorage.getItem(`dadCodeForDisplayJavaScript`) || "no entry for now"

            let drewHTML = sessionStorage.getItem(`drewCodeForDisplayHTML`) || "no entry for now"
            let drewCSS = sessionStorage.getItem(`drewCodeForDisplayCSS`) || "no entry for now"
            let drewJS = sessionStorage.getItem(`drewCodeForDisplayJavaScript`) || "no entry for now"

            // console.log(dadHTML, "=?", drewHTML, "\n", dadCSS, "=?", drewCSS, "\n",dadJS,"=?", drewJS)

            if (dadHTML.trim() == drewHTML.trim() && dadCSS.trim() == drewCSS.trim() && dadJS.trim() == drewJS.trim()) {
                this.lessonHasReachedCompletion = true
            }

            if (this.lessonHasReachedCompletion == true) {
                alert("great job, lesson completed")
                this.finishAndSave()
            }
            else {
                alert("keep trying")
                return
            }
        },
        displayLesson(){
            let dadCodeHTML = document.getElementById("dadCodeHTML")
            let dadCodeCSS = document.getElementById("dadCodeCSS")
            let dadCodeJavaScript = document.getElementById("dadCodeJavaScript")
            let dadDisplay = document.getElementById("dadDisplay")

            let urlParams = new URLSearchParams(window.location.search);
            let webDevLessonID = urlParams.get("webDevLessonID")
            for (let i = 0; i < this.webDevLessons.length; i++) {
                let lesson = this.webDevLessons[i]
                if (lesson._id == webDevLessonID) {
                    // console.log(lesson.htmlContent)
                    sessionStorage.setItem(`dadCodeForDisplayHTML`, lesson.htmlContent)
                    if (lesson.cssContent == "") {
                        sessionStorage.setItem(`dadCodeForDisplayCSS`, "* {}")
                    }
                    else {
                        sessionStorage.setItem(`dadCodeForDisplayCSS`, lesson.cssContent)
                    }
                    
                    sessionStorage.setItem(`dadCodeForDisplayJavaScript`, lesson.javaScriptContent)
                    dadDisplay["src"] = ""
                    setTimeout(()=> {
                        dadDisplay["src"] = "dadCode"    
                    }, 100)
                    
                    dadCodeHTML.value = lesson.htmlContent
                    dadCodeCSS.value = lesson.cssContent
                    dadCodeJavaScript.value = lesson.javaScriptContent
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
            this.determineIfFinishedAndSave()
        },
        allowTabbing() {

        },
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
    mounted() {
        this.displayLesson()
        let areas = document.getElementsByClassName("drewsmall")
        this.lessonHasReachedCompletion = false
    }
}
</script>

<style scoped>
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