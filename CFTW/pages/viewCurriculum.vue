<template>
    <main id="body">
        <!-- <div id="">Search </div> -->
        <div id="interactionContainer">
            <input type="text" name="" id="search" placeholder="Search for a Lesson" @keyup="performSearch()">
        </div>
        <div id="webDevLessonsContainer"></div>

    </main>
</template>

<script>
export default {
    data() {
        return {
            currentMatches: [],
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
        getParameters() {
            let search = document.getElementById("search")

            let urlParams = new URLSearchParams(window.location.search);
            // if (urlParams.keys.length == 0) {return}

            let currentLessonStatus = ""
            let currentLessonLevel = ""
            let currentLessonType = ""

            let statuses = ["beginner", "intermediate", "advanced"]
            let levels = ["A", "B", "C"]
            let types = ["JS", "HTML", "CSS"]

            for (const [key, value] of urlParams.entries()) {
                if (key == "lessonStatus") {
                    if (value == statuses[0]) {currentLessonStatus = statuses[0]}
                    else if (value == statuses[1]) {currentLessonStatus = statuses[1]}
                    else if (value == statuses[2]) {currentLessonStatus = statuses[2]}
                }
                
            }
            search.value = currentLessonStatus
            this.performSearch()
            // console.log(currentLessonStatus)
            // if (urlParams.entries.length == 0) {return}
            // else {
            //     let paramaters = urlParams.entries
            //     console.log(paramaters)
            // }
            // let webDevLessonID = urlParams.get("webDevLessonID")
            // 
        },        
        displayWebDevLessons() {
            let displayContainer = document.getElementById("webDevLessonsContainer")
            displayContainer.style.border = "2px solid black"

            let webDevLessonTitleContainer = document.createElement("div")
            
            let nameOfLesson = document.createElement("div")
            let lessonLevel = document.createElement("div")
            let creator = document.createElement("div")
            let keyWords = document.createElement("div")
            
            webDevLessonTitleContainer.style.display = "flex"
            webDevLessonTitleContainer.style.flexDirection = "row"
            webDevLessonTitleContainer.style.justifyContent = "space-between"
            webDevLessonTitleContainer.style.height = "40px"
            webDevLessonTitleContainer.style.lineHeight = "40px"
            webDevLessonTitleContainer.style.backgroundColor = "white"

            nameOfLesson.style.width = "13%"
            lessonLevel.style.width = "28%"
            creator.style.width = "16%"
            keyWords.style.width = "18%"
            
            nameOfLesson.innerText = "Lesson Name"
            lessonLevel.innerText = "Lesson Level"
            creator.innerText = "Creator"
            keyWords.innerText = "Key Words"
           
            nameOfLesson.style.textAlign = "center"
            lessonLevel.style.textAlign = "center"
            creator.style.textAlign = "center"
            keyWords.style.textAlign = "center"
            
            webDevLessonTitleContainer.appendChild(nameOfLesson)
            webDevLessonTitleContainer.appendChild(lessonLevel)
            webDevLessonTitleContainer.appendChild(creator)
            webDevLessonTitleContainer.appendChild(keyWords)
            
            displayContainer.append(webDevLessonTitleContainer)

            for (let i = 0; i < this.currentMatches.length; i++) {
                let webDevLesson = this.currentMatches[i][0] || this.currentMatches[i];
                let webDevLessonContainer = document.createElement("div")
                webDevLessonContainer.id = "kbic" + webDevLesson._id

                let nameOfLesson = document.createElement("div")
                let creator = document.createElement("div")
                let keyWords = document.createElement("div")
                let lessonLevel = document.createElement("div")

                webDevLessonContainer.style.display = "flex"
                webDevLessonContainer.style.flexDirection = "row"
                webDevLessonContainer.style.justifyContent = "space-between"
                webDevLessonContainer.style.height = "40px"
                webDevLessonContainer.style.lineHeight = "40px"
                webDevLessonContainer.style.border = "2px solid black"

                nameOfLesson.style.width = "13%"
                lessonLevel.style.width = "28%"
                creator.style.width = "16%"
                keyWords.style.width = "18%"

                nameOfLesson.innerText = webDevLesson.nameOfLesson || "no match"
                lessonLevel.innerText = this.parseLessonLevel(webDevLesson.lessonLevel) || "no match"
                creator.innerText = webDevLesson.creator || "no match"
                keyWords.innerText = webDevLesson.keyWords || "no match"

                nameOfLesson.style.cursor = "pointer"
                lessonLevel.style.cursor = "pointer"
                creator.style.cursor = "pointer"
                keyWords.style.cursor = "pointer"

                nameOfLesson.style.textAlign = "center"
                nameOfLesson.style.backgroundColor = "rgba(200,200,200, 1.0)"
                lessonLevel.style.textAlign = "center"
                lessonLevel.style.backgroundColor = "rgba(200,200,200, 1.0)"
                creator.style.textAlign = "center"
                creator.style.backgroundColor = "rgba(200,200,200, 1.0)"
                keyWords.style.textAlign = "center"
                keyWords.style.backgroundColor = "rgba(200,200,200, 1.0)"

                webDevLessonContainer.appendChild(nameOfLesson)
                webDevLessonContainer.appendChild(lessonLevel)
                webDevLessonContainer.appendChild(creator)
                webDevLessonContainer.appendChild(keyWords)

                webDevLessonContainer.addEventListener("mouseenter", () => {
                    nameOfLesson.style.backgroundColor = "rgba(50,50,50, 1.0)"
                    nameOfLesson.style.color = "white"
                    lessonLevel.style.backgroundColor = "rgba(50,50,50, 1.0)"
                    lessonLevel.style.color = "white"
                    creator.style.backgroundColor = "rgba(50,50,50, 1.0)"
                    creator.style.color = "white"
                    keyWords.style.backgroundColor = "rgba(50,50,50, 1.0)"
                    keyWords.style.color = "white"
                })

                webDevLessonContainer.addEventListener("mouseleave", () => {
                    nameOfLesson.style.backgroundColor = "rgba(200,200,200, 1.0)"
                    nameOfLesson.style.color = "black"
                    lessonLevel.style.backgroundColor = "rgba(200,200,200, 1.0)"
                    lessonLevel.style.color = "black"
                    creator.style.backgroundColor = "rgba(200,200,200, 1.0)"
                    creator.style.color = "black"
                    keyWords.style.backgroundColor = "rgba(200,200,200, 1.0)"
                    keyWords.style.color = "black"
                })
                let id = webDevLesson._id

                nameOfLesson.addEventListener("click", () => {
                    this.$router.push(`/newViewLesson01?webDevLessonID=${id}`);
                })
                lessonLevel.addEventListener("click", () => {
                    this.$router.push(`/newViewLesson01?webDevLessonID=${id}`);
                })
                creator.addEventListener("click", () => {
                    this.$router.push(`/newViewLesson01?webDevLessonID=${id}`);
                })
                keyWords.addEventListener("click", () => {
                    this.$router.push(`/newViewLesson01?webDevLessonID=${id}`);
                })
                
                let link = document.createElement("a")
                link.appendChild(webDevLessonContainer)
                displayContainer.appendChild(link)
            }
        },
        parseLessonLevel(lessonLevel) {
            let parsedLessonLevel = ""
            let stage = lessonLevel.substring(0, 1)
            let level = lessonLevel.substring(8, 9)
            let codingLanguage = lessonLevel.substring(9, 10)
            console.log(stage, level, codingLanguage)

            let stages = ["Beginner", "Intermediate", "Advanced"]
            // let levels = ["A", "B", "C"]
            let codingLanguages = ["HTML", "CSS", "JavaScript"]
            
            if (stage == "b") {parsedLessonLevel += stages[0]}
            else if (stage == "i") {parsedLessonLevel += stages[1]}
            else if (stage == "a") {parsedLessonLevel += stages[2]}

            parsedLessonLevel += ` Level-${level} `

            if (codingLanguage == "H") {parsedLessonLevel += codingLanguages[0]}
            else if (codingLanguage == "C") {parsedLessonLevel += codingLanguages[1]}
            else if (codingLanguage == "J") {parsedLessonLevel += codingLanguages[2]}


            return parsedLessonLevel
        },
        performSearch() {
            // let searchTerm = ""
            // if (optionalLessonStatus) {
            //     console.log("performing search with optional lessonStatus", optionalLessonStatus)
            //     searchTerm = optionalLessonStatus
            // }
            // else {
            let searchTerm = document.getElementById("search").value
                
            // }
            this.performLogicAndScreenReset()
            this.createListOfWebDevLessons(searchTerm)
            this.displayWebDevLessons()
            
        },
        performLogicAndScreenReset(){
            this.currentMatches = []
            let webDevLessonsContainer = document.getElementById("webDevLessonsContainer")
            while (webDevLessonsContainer.childElementCount > 0) {
                let currentNode = webDevLessonsContainer.firstElementChild
                currentNode.remove()
            }
        },
        createListOfWebDevLessons(searchTerm) {
            if (searchTerm == undefined) {searchTerm = ""}
            for (let i = 0; i < this.webDevLessons.length; i++) {
                let webDevLesson = this.webDevLessons[i]
                let lclLevel = this.parseLessonLevel(webDevLesson.lessonLevel)
                if (webDevLesson.nameOfLesson.toLowerCase().includes(searchTerm.toLowerCase())) {
                    this.currentMatches.push(webDevLesson)
                }
                else if (webDevLesson.keyWords.toLowerCase().includes(searchTerm.toLowerCase())) {
                    this.currentMatches.push(webDevLesson)
                }
                else if (lclLevel.toLowerCase().includes(searchTerm.toLowerCase())) {
                    this.currentMatches.push(webDevLesson)
                }
            }
        },
        
    },
    updated() {
        sessionStorage.setItem("currentTitle", "Curriculum")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "Curriculum")
    },
    beforeUpdate() {
        sessionStorage.setItem("currentTitle", "Curriculum")
    },

    mounted() {
        this.currentMatches = []
        this.performSearch()
        this.getParameters()
    }
}
</script>

<style >
#webDevLessonsContainer {
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 15px;
    background-color: white;
}

#interactionContainer {
    display: flex;
    flex-direction: row;
}

#search {
    width: 60%;
    text-size-adjust: 25px;
    border-radius: 12px;
    background-color: rgba(215,215,215,1);
    font-size: 25px;
    animation-duration: 3.0s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-name: blink;
    animation-delay: 0.0s;
}
#search:focus {
    background-color: rgba(255,255,255,1);
    animation-name: none;
}
@keyframes blink {
    0% {
        background-color: rgba(215,215,215,1)
    }
    50% {
        background-color: rgba(240,240,240,1)
    }
    100% {
        background-color: rgba(215,215,215,1)
    }
}

</style>