<template>
    <main id="body">
        <div id="checkBackLater">These lessons are under development. Please check back in soon!</div>
        <div id="profileInformationContainer" class="informationContainer">         
            <span class='informationMember informationMember1' id='userName'>Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}</span>
            <span class='informationMember informationMember2' id='userEmail'>Email / Login: {{ $auth.$state.user.email }}</span>
            <span class='informationMember informationMember3' id='userEmail'>Nickname: {{ $auth.$state.user.nickName }}</span>
        </div>
        <div id="drewLessonCompletionContainer">
            
            <br>
            <div id="levelsContainer" class="levelsContainer">
                <div id="localTitle" class="localTitle"></div>
                <div id="levelContainer" class="levelContainer">
                    <div id="levelTitleContainer" class="levelTitleContainer">
                        <div id="levelTitle" class="levelTitle"></div>
                        <div id="levelSubTitle" class="levelSubTitle">Level A SubTitle</div>
                    </div>
                    <div id="levelStatusDisplayBox" class="levelDisplayStatusBox">
                        <div id="circleUnitContainer1" class="circleUnitContainer">
                            <div id="percentCross1" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleHTML" class="progress-ring__circle leftcircle" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleCSS" class="progress-ring__circle middlecircle" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleJS" class="progress-ring__circle rightcircle" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>
                        </div>
                        <div id="statusBoxContainer" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="hTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="hTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>
                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="cSSNumberCompleted" class="numberCompleted"></div>
                                <div id="cSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div> 
                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="jSNumberCompleted" class="numberCompleted"></div>
                                <div id="jSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
        <div id="showLessonsContainer">
            <div id="showHTMLLessons" class="showLessonContainer">
                <div id="showHTMLLessonsTitle" class="showLessonsTitle">HTML</div>
                <div id="htmlLesson01" class="htmlLesson lessonDisplay HTML01 apply-shake" @click="openLesson(`h01`)">1</div>
                <div id="htmlLesson02" class="htmlLesson lessonDisplay HTML02 apply-shake" @click="openLesson(`h02`)">2</div>
                <div id="htmlLesson03" class="htmlLesson lessonDisplay HTML03 apply-shake" @click="openLesson(`h03`)">3</div>
                <div id="htmlLesson04" class="htmlLesson lessonDisplay HTML04 apply-shake" @click="openLesson(`h04`)">4</div>
                <div id="htmlLesson05" class="htmlLesson lessonDisplay HTML05 apply-shake" @click="openLesson(`h05`)">5</div>
                <div id="htmlLesson06" class="htmlLesson lessonDisplay HTML06 apply-shake" @click="openLesson(`h06`)">6</div>
                <div id="htmlLesson07" class="htmlLesson lessonDisplay HTML07 apply-shake" @click="openLesson(`h07`)">7</div>
                <div id="htmlLesson08" class="htmlLesson lessonDisplay HTML08 apply-shake" @click="openLesson(`h08`)">8</div>
                <div id="htmlLesson09" class="htmlLesson lessonDisplay HTML09 apply-shake" @click="openLesson(`h09`)">9</div>
                <div id="htmlLesson10" class="htmlLesson lessonDisplay HTML10 apply-shake" @click="openLesson(`h10`)">10</div>
                <div id="htmlLesson11" class="htmlLesson lessonDisplay HTML11 apply-shake" @click="openLesson(`h11`)">11</div>
                <div id="htmlLesson12" class="htmlLesson lessonDisplay HTML12 apply-shake" @click="openLesson(`h12`)">12</div>
                <div id="htmlLesson13" class="htmlLesson lessonDisplay HTML13 apply-shake" @click="openLesson(`h13`)">13</div>
                <div id="htmlLesson14" class="htmlLesson lessonDisplay HTML14 apply-shake" @click="openLesson(`h14`)">14</div>
            </div>
            <div id="showCSSLessons" class="showLessonContainer">
                <div id="showCSSLessonsTitle" class="showLessonsTitle">CSS</div>
                <div id="cssLesson01" class="cssLesson lessonDisplay CSS01 apply-shake" @click="openLesson(`c01`)">1</div>
                <div id="cssLesson02" class="cssLesson lessonDisplay CSS02 apply-shake" @click="openLesson(`c02`)">2</div>
                <div id="cssLesson03" class="cssLesson lessonDisplay CSS03 apply-shake" @click="openLesson(`c03`)">3</div>
                <div id="cssLesson04" class="cssLesson lessonDisplay CSS04 apply-shake" @click="openLesson(`c04`)">4</div>
                <div id="cssLesson05" class="cssLesson lessonDisplay CSS05 apply-shake" @click="openLesson(`c05`)">5</div>
                <div id="cssLesson06" class="cssLesson lessonDisplay CSS06 apply-shake" @click="openLesson(`c06`)">6</div>
                <div id="cssLesson07" class="cssLesson lessonDisplay CSS07 apply-shake" @click="openLesson(`c07`)">7</div>
                <div id="cssLesson08" class="cssLesson lessonDisplay CSS08 apply-shake" @click="openLesson(`c08`)">8</div>
                <div id="cssLesson09" class="cssLesson lessonDisplay CSS09 apply-shake" @click="openLesson(`c09`)">9</div>
                <div id="cssLesson10" class="cssLesson lessonDisplay CSS10 apply-shake" @click="openLesson(`c10`)">10</div>
                <div id="cssLesson11" class="cssLesson lessonDisplay CSS11 apply-shake" @click="openLesson(`c11`)">11</div>
                <div id="cssLesson12" class="cssLesson lessonDisplay CSS12 apply-shake" @click="openLesson(`c12`)">12</div>
                <div id="cssLesson13" class="cssLesson lessonDisplay CSS13 apply-shake" @click="openLesson(`c13`)">13</div>
                <div id="cssLesson14" class="cssLesson lessonDisplay CSS14 apply-shake" @click="openLesson(`c14`)">14</div>
            </div>
            <div id="showJSLessons" class="showLessonContainer">
                <div id="showJSLessonsTitle" class="showLessonsTitle">JavaScript</div>
                <div id="jsLesson01" class="jsLesson lessonDisplay JS01 apply-shake" @click="openLesson(`j01`)">1</div>
                <div id="jsLesson02" class="jsLesson lessonDisplay JS02 apply-shake" @click="openLesson(`j02`)">2</div>
                <div id="jsLesson03" class="jsLesson lessonDisplay JS03 apply-shake" @click="openLesson(`j03`)">3</div>
                <div id="jsLesson04" class="jsLesson lessonDisplay JS04 apply-shake" @click="openLesson(`j04`)">4</div>
                <div id="jsLesson05" class="jsLesson lessonDisplay JS05 apply-shake" @click="openLesson(`j05`)">5</div>
                <div id="jsLesson06" class="jsLesson lessonDisplay JS06 apply-shake" @click="openLesson(`j06`)">6</div>
                <div id="jsLesson07" class="jsLesson lessonDisplay JS07 apply-shake" @click="openLesson(`j07`)">7</div>
                <div id="jsLesson08" class="jsLesson lessonDisplay JS08 apply-shake" @click="openLesson(`j08`)">8</div>
                <div id="jsLesson09" class="jsLesson lessonDisplay JS09 apply-shake" @click="openLesson(`j09`)">9</div>
                <div id="jsLesson10" class="jsLesson lessonDisplay JS10 apply-shake" @click="openLesson(`j10`)">10</div>
                <div id="jsLesson11" class="jsLesson lessonDisplay JS11 apply-shake" @click="openLesson(`j11`)">11</div>
                <div id="jsLesson12" class="jsLesson lessonDisplay JS12 apply-shake" @click="openLesson(`j12`)">12</div>
                <div id="jsLesson13" class="jsLesson lessonDisplay JS13 apply-shake" @click="openLesson(`j13`)">13</div>
                <div id="jsLesson14" class="jsLesson lessonDisplay JS14 apply-shake" @click="openLesson(`j14`)">14</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    components: {

    },
    middleware: "auth",
    data() {
        return {
            currentMatches: [],
            circleElements: ["progCircleHTML", "progCircleCSS", "progCircleJS", ],
            circleValues: [],
            circleColors: ["#b01c1c", "#b08b1c", "#1c8bb0",],
            circleNewColors: ["red", "orange", "blue",],
            completionStatuses: {
                "none": "Dive in!",
                "few": "Good start",
                "some": "On your way",
                "midPoint": "Mid way through",
                "many": "Almost there",
                "allButOne": "Just one more",
                "all": "Lesson completed"
            }
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
        highlightFinishedLessons() {
            let urlParams = new URLSearchParams(window.location.search);
            let levelInformation = urlParams.get("l")

            let userID = this.$auth.user._id
            let completedLessons = []
            for (let i = 0; i < this.drewSaveLessonStatuses.length; i++) {
                let drewSaveLessonStatus = this.drewSaveLessonStatuses[i]
                if (drewSaveLessonStatus.userWhoFinishedID == userID) {
                    let completedLessonID = drewSaveLessonStatus.lessonID
                    for (let j = 0; j < this.webDevLessons.length; j++) {
                        let webDevLesson = this.webDevLessons[j]
                        let webDevLessonID = webDevLesson._id
                        if (webDevLessonID == completedLessonID) {
                            let lessonLevel = webDevLesson.lessonLevel
                            completedLessons.push(lessonLevel)
                        }
                    }
                }
            }
            let lessonDisplays = document.getElementsByClassName("lessonDisplay")
            for (let i = 0; i < lessonDisplays.length; i++) {
                let currentDisplay = lessonDisplays[i]
                let currentLessonClass = currentDisplay.classList[2]
                for (let j = 0; j < completedLessons.length; j++) {
                    let completedLesson = completedLessons[j]
                    if (completedLesson == (levelInformation + currentLessonClass)) {

                        currentDisplay.style.outline = "4px solid lightgreen"
                        currentDisplay.style.backgroundColor = "green"
                        currentDisplay.style.color = "white"

                        currentDisplay.classList.remove("apply-shake")

                        currentDisplay.style.border = "2px solid"
                        currentDisplay.style.borderImage = "linear-gradient(45deg, turquoise, darkslategray, greenyellow) 1"
                        currentDisplay.classList.add("finished-shake")
                    }
                }
            }
        },
        initializeAllProgressCircles() {
            for (let i = 0; i < this.circleElements.length; i++) {
                this.initializeProgressCircle(i)
            }
        },
        initializeProgressCircle(circleIndex) {
            let circleElement = document.getElementById(this.circleElements[circleIndex])    

            circleElement.stroke = this.circleColors[circleIndex]

            let elementRadius = circleElement.id + "Radius"
            let elementCircumference = circleElement.id + "Circumference"
            let elementCircle = circleElement.id + "Circle"
            
            this.$data[elementRadius] = undefined 
            this.$data[elementCircumference] = undefined 
            this.$data[elementCircle] = undefined 
            
            this.$data[elementCircle] = circleElement
            this.$data[elementRadius] = this.$data[elementCircle].r.baseVal.value;
            this.$data[elementCircumference] = this.$data[elementRadius] * 2 * Math.PI;

            this.$data[elementCircle].style.strokeDasharray = `${this.$data[elementCircumference]} ${this.$data[elementCircumference]}`;
            this.$data[elementCircle].style.strokeDashoffset = this.$data[elementCircumference];
            
            let localCircumference = this.$data[elementCircumference]
            let localCircle = this.$data[elementCircle]
            function setProgress(percent) {
                const offset = localCircumference - percent / 100 * localCircumference;
                localCircle.style.strokeDashoffset = offset;
            }
            setProgress(1);
            let percent = (this.circleValues[circleIndex] / 14) * 100
            setTimeout(() => {setProgress(percent)}, 600)
        },
        displayCompletionStatus() {
            let currentUserID = this.$auth.user._id

            let urlParams = new URLSearchParams(window.location.search);
            let levelInformation = urlParams.get("l")

            let lessonStatus = levelInformation.substring(0, 1)
            let lessonLevel = levelInformation.substring(1,2)

            let allFinished = Array.apply(null, Array(42)).map(Number.prototype.valueOf,0);

            let types = ["HTML", "CSS", "JS"]

            for (let i = 0; i < this.drewSaveLessonStatuses.length; i++) {
                let drewSaveLessonStatus = this.drewSaveLessonStatuses[i]
                let userWhoFinishedID = drewSaveLessonStatus.userWhoFinishedID
                if (userWhoFinishedID == currentUserID) {

                    for (let j = 0; j < this.webDevLessons.length; j++) {
                        let webDevLesson = this.webDevLessons[j]
                        if (webDevLesson._id == drewSaveLessonStatus.lessonID) {
                            let lessonLvl = webDevLesson.lessonLevel
                            let lcl = lessonStatus + lessonLevel + types[0] + "01"

                            if (lessonLvl == lessonStatus + lessonLevel + types[0] + "01") {allFinished[0]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "02") {allFinished[1]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "03") {allFinished[2]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "04") {allFinished[3]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "05") {allFinished[4]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "06") {allFinished[5]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "07") {allFinished[6]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "08") {allFinished[7]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "09") {allFinished[8]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "10") {allFinished[9]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "11") {allFinished[10]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "12") {allFinished[11]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "13") {allFinished[12]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[0] + "14") {allFinished[13]++}
                            
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "01") {allFinished[14]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "02") {allFinished[15]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "03") {allFinished[16]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "04") {allFinished[17]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "05") {allFinished[18]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "06") {allFinished[19]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "07") {allFinished[20]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "08") {allFinished[21]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "09") {allFinished[22]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "10") {allFinished[23]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "11") {allFinished[24]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "12") {allFinished[25]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "13") {allFinished[26]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[1] + "14") {allFinished[27]++}

                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "01") {allFinished[28]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "02") {allFinished[29]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "03") {allFinished[30]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "04") {allFinished[31]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "05") {allFinished[32]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "06") {allFinished[33]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "07") {allFinished[34]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "08") {allFinished[35]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "09") {allFinished[36]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "10") {allFinished[37]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "11") {allFinished[38]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "12") {allFinished[39]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "13") {allFinished[40]++}
                            else if (lessonLvl == lessonStatus + lessonLevel + types[2] + "14") {allFinished[41]++}

                        }
                    }
                }
            }

            let htmlTotal = 0
            let cssTotal = 0
            let jsTotal = 0
            for (let i = 0; i < allFinished.length; i++) {
                if (i < 14 && allFinished[i]) {htmlTotal++}
                else if (i > 13 && i < 28 && allFinished[i]) {cssTotal++} 
                else if (i > 27 && allFinished[i]) {jsTotal++} 
            }
            let htmlCompletedDiv = document.getElementById("hTMLNumberCompleted")
            let cssCompletedDiv = document.getElementById("cSSNumberCompleted")
            let jsCompletedDiv = document.getElementById("jSNumberCompleted")

            htmlCompletedDiv.innerText = htmlTotal
            cssCompletedDiv.innerText = cssTotal
            jsCompletedDiv.innerText = jsTotal
            let number = htmlTotal + cssTotal + jsTotal
            if (this.$auth.user.nickName == "Sandy") {
                let randomNumberHTML = Math.floor(Math.random() * (14 - 0 + 1) + 0)
                let randomNumberCSS = Math.floor(Math.random() * (14 - 0 + 1) + 0)
                let randomNumberJS = Math.floor(Math.random() * (14 - 0 + 1) + 0)

                htmlCompletedDiv.innerText = randomNumberHTML
                cssCompletedDiv.innerText = randomNumberCSS
                jsCompletedDiv.innerText = randomNumberJS
                
                this.circleValues.push(randomNumberHTML)
                this.circleValues.push(randomNumberCSS)
                this.circleValues.push(randomNumberJS)
                number = randomNumberHTML + randomNumberCSS + randomNumberJS

            }
            else {
                this.circleValues.push(htmlTotal)
                this.circleValues.push(cssTotal)
                this.circleValues.push(jsTotal)
            }

            let subTitle = document.getElementById("levelSubTitle")
            
            if (number < 1) {
                subTitle.innerText = this.completionStatuses["none"]
            }
            else if (number < 8) {
                subTitle.innerText = this.completionStatuses["few"] + ` (${number}/${42})`
            }
            else if (number < 18) {
                subTitle.innerText = this.completionStatuses["some"] + ` (${number}/${42})`
            }
            else if (number < 24) {
                subTitle.innerText = this.completionStatuses["midPoint"] + ` (${number}/${42})`
            }
            else if (number < 41) {
                subTitle.innerText = this.completionStatuses["many"] + ` (${number}/${42})`
            }
            else if (number == 41) {
                subTitle.innerText = this.completionStatuses["allButOne"] + ` (${number}/${42})`
            }
            else if (number == 42) {
                subTitle.innerText = this.completionStatuses["all"] + ` (${number}/${42})`
            }

            let localTitle = document.getElementById("localTitle")
            let levelTitle = document.getElementById("levelTitle")

            if (lessonStatus == "a") {
                localTitle.innerText = "Advanced"
            }
            else if (lessonStatus == "i") {
                localTitle.innerText = "Intermediate"
            }
            else if (lessonStatus == "b") {
                localTitle.innerText = "Beginner"
            }

            if (lessonLevel == "A") {
                levelTitle.innerText = "Introduction"
            }
            else if (lessonLevel == "B") {
                levelTitle.innerText = "Practice"
            }
            else if (lessonLevel == "C") {
                levelTitle.innerText = "Proficiency"
            }
        },
        initializeProgressCircleDisplays() {
            let circles = document.getElementsByClassName("progress-ring__circle")
            let statusBoxes = document.getElementsByClassName("statusBox")
            let showLessonContainers = document.getElementsByClassName("showLessonContainer")
            for (let i = 0; i < circles.length; i++) {
                let circle = circles[i]
                let statusBox = statusBoxes[i]
                let oldColor = this.circleColors[i]
                let newColor = this.circleNewColors[i]
                let showLessonContainer = showLessonContainers[i]
                
                circle.style.display = "none"
                setTimeout(() => {
                    circle.style.display = "initial"
                }, 600)

                statusBox.addEventListener("mouseenter", () => {
                    circle.style.stroke = newColor
                    circle.style.strokeWidth = "5"
                    statusBox.style.backgroundColor = newColor
                    showLessonContainer.style.backgroundColor = newColor
                })

                statusBox.addEventListener("mouseleave", () => {
                    circle.style.stroke = oldColor
                    circle.style.strokeWidth = "4"
                    statusBox.style.backgroundColor = oldColor
                    showLessonContainer.style.backgroundColor = oldColor
                })

                showLessonContainer.addEventListener("mouseenter", () => {
                    circle.style.stroke = newColor
                    circle.style.strokeWidth = "5"
                    statusBox.style.backgroundColor = newColor
                    showLessonContainer.style.backgroundColor = newColor
                })

                showLessonContainer.addEventListener("mouseleave", () => {
                    circle.style.stroke = oldColor
                    circle.style.strokeWidth = "4"
                    statusBox.style.backgroundColor = oldColor
                    showLessonContainer.style.backgroundColor = oldColor
                })


            }
            setTimeout(() => {
                this.initializeAllProgressCircles()
            }, 600)
        },
        openLesson(lessonInfo) {
            let urlParams = new URLSearchParams(window.location.search);
            let levelInformation = urlParams.get("l")

            let lessonStatus = levelInformation.substring(0, 1)
            let lessonLevel = levelInformation.substring(1,2)

            let lessonTitle = `${lessonStatus}${lessonLevel}`

            if (lessonInfo.includes("j")) {lessonInfo = lessonInfo.replace("j", "JS")}
            if (lessonInfo.includes("c")) {lessonInfo = lessonInfo.replace("c", "CSS")}
            if (lessonInfo.includes("h")) {lessonInfo = lessonInfo.replace("h", "HTML")}
            let completeLessonTitle = lessonTitle + lessonInfo

            let id = ""

            for (let i = 0; i < this.webDevLessons.length; i++) {
                let webDevLesson = this.webDevLessons[i]
                let localLessonLevel = webDevLesson.lessonLevel
                if (localLessonLevel == completeLessonTitle) {
                    let id = webDevLesson._id
                    let lessonLevel = webDevLesson.lessonLevel
                    let lessonTitle = webDevLesson.nameOfLesson
                    let keywords = webDevLesson.keyWords
                    sessionStorage.setItem("lessonLevel", lessonLevel)
                    sessionStorage.setItem("lessonTitle", lessonTitle)
                    sessionStorage.setItem("keywords", keywords)

                    sessionStorage.setItem("lessonID", id)

                    let htmlValue = webDevLesson.htmlContent
                    let cssValue = webDevLesson.cssContent
                    let jsValue = webDevLesson.javaScriptContent

                    sessionStorage.setItem(`drewCodeForDisplayHTML`, htmlValue)
                    sessionStorage.setItem(`drewCodeForDisplayCSS`, cssValue)
                    sessionStorage.setItem(`drewCodeForDisplayJavaScript`, jsValue)


                    this.$router.push(`introduction`);
                }
            }
        },
        displayLessonNames() {
            let urlParams = new URLSearchParams(window.location.search);
            let levelInformation = urlParams.get("l")

            let lessonStatus = levelInformation.substring(0, 1)
            let lessonLevel = levelInformation.substring(1,2)

            let lessonTitle = `${lessonStatus}${lessonLevel}`

            let id = ""
            let lessonNames = []
            for (let i = 0; i < this.webDevLessons.length; i++) {
                let webDevLesson = this.webDevLessons[i]
                let localLessonLevel = webDevLesson.lessonLevel
                let localLessonTitle = webDevLesson.nameOfLesson
                if (localLessonLevel.startsWith(lessonTitle)) {
                    lessonNames.push([localLessonTitle, localLessonLevel])
                }
            }
            let lessonDisplays = document.getElementsByClassName("lessonDisplay")
            for (let i = 0; i < lessonDisplays.length; i++) {
                let lessonDisplay = lessonDisplays[i]
                let lessonClass = lessonDisplay.classList[2]
                for (let j = 0; j < lessonNames.length; j++) {
                    let lessonName = lessonNames[j]
                    if (lessonName[1].endsWith(lessonClass)) {
                        lessonDisplay.innerText = lessonDisplay.innerText + ": " + lessonName[0]
                    }
                    // console.log(lessonName[1], lessonClass)
                }
            }
            console.log(lessonNames)
            if (lessonNames.length == 0) {
                let checkBackLater = document.getElementById("checkBackLater")
                checkBackLater.style.opacity = "1"
                checkBackLater.style.zIndex = "1000000"
            }
        },
    },
    updated() {
        sessionStorage.setItem("currentTitle", "Level")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "Level")
    },
    beforeUpdate() {
        sessionStorage.setItem("currentTitle", "Level")
    },
    mounted() {
        this.displayCompletionStatus()
        setTimeout(() => {
            this.initializeProgressCircleDisplays()
        }, 100)

        setTimeout(() => {
            this.highlightFinishedLessons()
        }, 150)

        setTimeout(() => {
            this.displayLessonNames()
        }, 160)

    }
}
</script>

<style scoped>
#checkBackLater {
    height: fit-content;
    font-size: clamp(16px, 3.5vw, 24px);
    width: 22.5%;
    /* margin-left: 10%; */
    position: absolute;
    top: 300px;
    right: 10px;
    background-color: white;
    animation: flickerSlowly 3s ease-in-out 0s 2 alternate;
    opacity: 0;
    z-index: -1;
}
@keyframes flickerSlowly {
    0% {
        background-color: white;
        color: black;
    }
    100% {
        background-color: rgba(60,60,60,1);
        color: rgba(170,170,170,1);
    }
    /* 100% {
        background-color: white;
        color: black;
    } */
}
.finished-shake:hover {
    animation: finishedShake 1000ms cubic-bezier(.36,.07,.19,.97) both;
    /* border-image: linear-gradient(45deg, greenyellow, turquoise) 1; */
}
.finished-shake {
    transition: linear-gradient 375ms;
}
@keyframes finishedShake {
    10%, 90% {
    border-image: linear-gradient(45deg, greenyellow, darkslategray, turquoise) 1;
  }

  20%, 80% {
    transform: linear-gradient(135deg, greenyellow, darkslategray, turquoise) 1;
  }

  30%, 50%, 70% {
    border-image: linear-gradient(315deg, greenyellow, darkslategray, turquoise) 1;
  }

  40%, 60% {
    border-image: linear-gradient(585deg, greenyellow,darkslategray,  turquoise) 1;
  }
}


@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, -1px, 0) scale(1.05);
  }

  20%, 80% {
    transform: translate3d(1px, 1px, 0) scale(1.1);
  }

  30%, 70% {
    transform: translate3d(-1px, -2px, 0) scale(1.15);
  }

  40%, 60% {
    transform: translate3d(1px, 2px, 0) scale(1.2);
  }
}

.apply-shake:hover {
    animation: shake 1.82s cubic-bezier(.36,.07,.19,.97) both;
}




.progress-ring {
    z-index: 90209;
}
#showHTMLLessons {
    background-color: #b01c1c;
    border-top-right-radius: 8px;
}
#showCSSLessons {
    background-color: #b08b1c;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
#showJSLessons {
    background-color: #1c8bb0;
    border-top-left-radius: 8px;

}
.lessonDisplay {
    background-color: white;
    font-size: 18px;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 250ms, color 250ms;
    margin-left: 10px;
    width: 85%;
}
.lessonDisplay:hover {
    background-color: black;
    color: white;
}
.showLessonsTitle {
    background-color: white;
    padding: 4px;
    font-size: 36px;
    margin-top: 4px;
    margin-bottom: 10px;
    border-radius: 4px;
    align-self: center;
}
.showLessonContainer {
    width: 30%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:flex-start;
    transition: background-color 125ms;
}
#showLessonsContainer {
    width: 100%;
    height: 600px;
    background-color: azure;
    display: flex;
    flex-direction: row;
    align-content: stretch;
    align-items: center;
    justify-content: space-between;

}
.statusBoxJS {
    background-color: #1c8bb0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.statusBoxCSS {
    background-color: #b08b1c;
}
.statusBoxHTML {
    background-color: #b01c1c;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.statusBoxContainer {
    display: flex;
    flex-direction: row;
    width: 95%;
}
.verticalCrossLine {
    height: 150px;
    width: 2px;
    background-color: rgba(0,0,0,0.2);
    transform: translate(64px, -12px);
    font-size: 10px;
    transition: background-color;
}
.verticalCrossLine::before {
    content: "25%";
    position: relative;
    top: 146px;
    left: -11px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
}
.verticalCrossLine::after {
    content: "75%";
    position: relative;
    top: -6px;
    left: -35px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
}

.horizontalCrossLine {
    height: 2px;
    width: 150px;
    background-color: rgba(0,0,0,0.2);
    transform: translate(-10px, 64px);
    font-size: 10px;
}
.horizontalCrossLine::before {
    content: "50%";
    position: relative;
    top: -4px;
    left: -18px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
}
.horizontalCrossLine::after {
    content: "100%";
    position: relative;
    top: -4px;
    left: 120px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
}
.percentCross {
    position: relative;
    background-color: white;
    height: 130px;
    width: 130px;
    z-index: -1;
    top: 0px;
    border-radius: 65px;
    outline: 2px solid rgba(0,0,0,0.4);
    z-index: 90209;
}
.showColor {
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    display: inline;
}
.circleUnitContainer {
    background-color: transparent;
    height: 130px;
    width: 130px;
}
svg {
    position:relative;
}
.progress-ring__circle {
    transition: stroke-dashoffset 667ms;
    stroke-dasharray: 10 20;
}
.leftmost {
    left: 5px;
    top: -125px;
}
.leftcircle {
    transition-delay: 0ms;
}
.middlemost {
    left: 15px;
    top: -238px;
}
.middlecircle {
    transition-delay: 250ms;
}
.rightmost {
    left: 25px;
    top: -350px;
}
.rightcircle {
    transition-delay: 500ms;
}
#drewLessonCompletionTitle {
    font-size: min(6vw, 50px);
    line-height: 100px;
    text-align: center;
}
.statusTitle {
    font-size: 20px;
    background-color: white;
    padding: 2px;
    border-radius: 4px;
    margin-top: 2px;
    margin-bottom: 2px;
}
.localTitle {
    height: 340px;
    background-color:lightslategray;
    color: black;
    -webkit-text-stroke: 1px rgba(75,75,75,1);
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-align: center;
    font-size: 24px;
    margin-top: auto;
    margin-bottom: auto;
    justify-self: flex-start;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-left: 2%;
    width: 3%;
    min-width: 24px;
    margin-right: 20%;
}
.totalNumberOfLessons {
    font-size: 30px;
    height: 30px;
    width: 80%;
    background-color: white;
    border-top: 5px solid black;
    line-height: 30px;
    text-align: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.numberCompleted {
    font-size: 30px;
    height: 30px;
    width: 80%;
    background-color: white;
    border-bottom: 5px solid black;
    line-height: 30px;
    text-align: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.statusBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 90%;
    padding-bottom: 4px;
    padding-top: 3px;
    transition: background-color 125ms;
}
.levelDisplayStatusBox {
    height: 300px;
    width: 95%;
    margin-left: 2.5%;
    margin-top: 10px;
    background-color: #189a8d;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    outline: 2px solid black;
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: -1;
}
.levelSubTitle {
    font-size: 18px;
    line-height: 20px;
    width: 90%;
    height: 20px;
    background-color:white;
}
.levelTitle {
    font-size: 34px;
    line-height: 40px;
    width: 90%;
    height: 40px;
    background-color: white;
}
.levelTitleContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    height: 60px;
    background-color:white;
    text-align: center;
    outline: 2px solid black;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
.levelContainer {
    width: 50%;
    height: 380px;
    margin-top: 10px;
    background-color: slategray;
    outline: 2px solid black;
    border-radius: 4px;
}
.levelsContainer {
    height: 400px;
    background-color:rgba(230,230,230,1);
    display: flex;
    flex-direction: row;
}
#drewLessonCompletionContainerTitleContainer {
    width: 90%;
    margin-left: 5%;
    height: 100px;
    background-color: white;
    display: flex;
    flex-direction: row;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
#drewLessonCompletionContainer {
    width: 100%;
    flex-direction: row;
    background-color: gray;
}
#sectionBreak {
    width: 100%;
    height: 20px;
    background-color: black;
    margin-top: 20px;
    margin-bottom: 20px;
}
#drewCodeTitle {
    font-size: 24px;
    color: white;
    background-color: black;
}
#interactionContainer {
    display: flex;
}
#search {
    width: 60%;
    text-size-adjust: 25px;
}
</style>