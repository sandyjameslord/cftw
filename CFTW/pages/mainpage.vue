<template>
    <main id="main">
        
        <div id="codeForTheWorld">
            <span class="titleLetter">E</span>
            <span class="titleLetter">n</span>
            <span class="titleLetter">g</span>
            <span class="titleLetter">a</span>
            <span class="titleLetter">g</span>
            <span class="titleLetter">e</span>
            <span class="spacer">i</span>
            <span class="titleLetter">Y</span>
            <span class="titleLetter">o</span>
            <span class="titleLetter">u</span>
            <span class="titleLetter">r</span>
            <span class="spacer">i</span>
            <span class="titleLetter">C</span>
            <span class="titleLetter">r</span>
            <span class="titleLetter">e</span>
            <span class="titleLetter">a</span>
            <span class="titleLetter">t</span>
            <span class="titleLetter">i</span>
            <span class="titleLetter">v</span>
            <span class="titleLetter">i</span>
            <span class="titleLetter">t</span>
            <span class="titleLetter">y</span>
            <span class="spacer">i</span>
            <span class="titleLetter">T</span>
            <span class="titleLetter">h</span>
            <span class="titleLetter">r</span>
            <span class="titleLetter">o</span>
            <span class="titleLetter">u</span>
            <span class="titleLetter">g</span>
            <span class="titleLetter">h</span>
            <span class="spacer">i</span>
            <span class="titleLetter">C</span>
            <span class="titleLetter">o</span>
            <span class="titleLetter">d</span>
            <span class="titleLetter">e</span>
        </div>

        <div id="" class="titleArea1 first">
            <span class="localLetter" id="f1">H</span>
            <span class="localLetter" id="f2">T</span>
            <span class="localLetter" id="f3">M</span>
            <span class="localLetter" id="f4">L</span>
        </div>
        <div id="" class="titleArea1 second">
            <span class="localLetter" id="s1">C</span>
            <span class="localLetter" id="s2">S</span>
            <span class="localLetter" id="s3">S</span>
        </div>
        <div id="" class="titleArea1 third">
            <span class="localLetter" id="t1">J</span>
            <span class="localLetter" id="t2">A</span>
            <span class="localLetter" id="t3">V</span>
            <span class="localLetter" id="t4">A</span>
            <span class="localLetter" id="t5">S</span>
            <span class="localLetter" id="t6">C</span>
            <span class="localLetter" id="t7">R</span>
            <span class="localLetter" id="t8">I</span>
            <span class="localLetter" id="t9">P</span>
            <span class="localLetter" id="t10">T</span>
        </div>

        <div id="presentationBox">
            <div id="presentationTitle">HTML</div>
            <div id="presentationInfo">
                <div id="presentationText1" class="presentationText">The 'Things' that make up a web page, such as text boxes, images, buttons and lists, put in an order you prefer.</div>
                <div id="presentationText2" class="presentationText">With names like &#60;div&#62;, &#60;span&#62;, &#60;button&#62; and &#60;img&#62;, you can control the content of a website.</div>
            </div>
        </div>
        <template v-if="!$auth.$state.loggedIn">
            <div id="optionsBox1">
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="login">Log<br>In</nuxt-link>
                    </div>
                </div>
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="signup">Sign<br>Up</nuxt-link>
                    </div>
                </div>
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="practice">Get<br>Creative</nuxt-link>
                    </div>
                </div>
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="about">About<br>CFTW</nuxt-link>
                    </div>
                </div>
                
            </div>
        </template>
        <template v-else>
            <div id="optionsBox2">
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="profile#drewLessonCompletionContainer">My<br>Path</nuxt-link>
                    </div>
                </div>
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="practice">Get<br>Creative</nuxt-link>
                    </div>
                </div>
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="about">About<br>CFTW</nuxt-link>
                    </div>
                </div>
            </div>
        </template>

    </main>
</template>

<script>
export default {
    data() {
        return {
            colorWhite: true,
            htmlText1: "The 'Things' that make up a web page, such as text boxes, images, buttons and lists, put in an order you prefer.",
            htmlText2: "With names like &#60;div&#62;, &#60;span&#62;, &#60;button&#62; and &#60;img&#62;, you can control the content of a website.",
            cssText1: "The 'Descriptors' for HTML 'Things', such as text color, box height, image opacity, and list icons.",
            cssText2: "With names like background-color, height, opacity and flex, the style of a site is up to you.",
            jsText1: "The 'Actions' for HTML 'Things', such as changing text and color depending on if you 'hover' on a box, like you just did.",
            jsText2: "With notation such as 'console.log(`hello world!`)', JavaScript makes the web putty in your hands."
        }
    },               
    methods: {
        addAnimationsToLocalLetters() {
            let titleLetters = document.getElementsByClassName("titleLetter")
            
            for (let i = 0; i < titleLetters.length; i++) {
                let titleLetter = titleLetters[i]
                titleLetter.addEventListener('mouseenter', () => {
                    // console.log("enterign")
                    while (document.styleSheets[0].length > 0) {
                        document.styleSheets[0].removeRule(0);
                    }
                    let p1 = `0% {  transform:  translateX(0px)  translateY(0px)  rotateZ(0deg);}`
                    let p2 = `12.5% {transform: translateX(2px)  translateY(0px)  rotateZ(45deg);}`
                    let p3 = `25% {  transform: translateX(2px)  translateY(2px)  rotateZ(90deg);}`
                    let p4 = `37.5% {transform: translateX(-2px) translateY(2px)  rotateZ(135deg);}`
                    let p5 = `50% {  transform: translateX(-2px) translateY(0px)  rotateZ(180deg);}`
                    let p6 = `62.5% {transform: translateX(-2px) translateY(-2px) rotateZ(225deg);}`
                    let p7 = `75% {  transform: translateX(2px)  translateY(-2px) rotateZ(270deg);}`
                    let p8 = `87.5% {transform: translateX(2px)  translateY(0px)  rotateZ(315deg);}`
                    let p9 = `100% { transform: translateX(0px)  translateY(0px)  rotateZ(360deg);}`
                    let titleLetterAnimation = `@keyframes titleLetterAnimation {${p1} ${p2} ${p3} ${p4} ${p5} ${p6} ${p7} ${p8} ${p9}}`

                    document.styleSheets[0].insertRule(titleLetterAnimation, i);
                    titleLetter.style.animation = `titleLetterAnimation 1375ms linear`;
                    while (document.styleSheets[0].length > 0) {
                            document.styleSheets[0].removeRule(0);
                    }
                })
            }           
        },
        openPage(page) {
            this.$router.push(`/${page}`);
        },
        addShowContentToTitleAreas() {
            let presentationBox = document.getElementById("presentationBox")
            let presentationTitle = document.getElementById("presentationTitle")
            let presentationText1 = document.getElementById("presentationText1")
            let presentationText2 = document.getElementById("presentationText2")

            let html = document.getElementsByClassName("titleArea1")[0]
            let css = document.getElementsByClassName("titleArea1")[1]
            let javascript = document.getElementsByClassName("titleArea1")[2]

            html.addEventListener("mouseenter", () => {
                presentationBox.style.border = "4px solid red"
                presentationTitle.innerText = "HTML"
                presentationText1.innerHTML = this.htmlText1
                presentationText2.innerHTML = this.htmlText2
                html.style.outline = "3px solid black"
                html.style.zIndex = "1001"
                html.style.backgroundColor = "red"

                css.style.outline = "3px solid transparent"
                css.style.zIndex = "999"
                css.style.backgroundColor = "#b08b1c"

                javascript.style.outline = "3px solid transparent"
                javascript.style.zIndex = "999"
                javascript.style.backgroundColor = "#1c8bb0"
                // javascript.style = "initial"
                
            })
            css.addEventListener("mouseenter", () => {
                presentationBox.style.border = "4px solid orange"
                presentationTitle.innerText = "CSS"
                presentationText1.innerHTML = this.cssText1
                presentationText2.innerHTML = this.cssText2
                css.style.outline = "3px solid black"
                css.style.zIndex = "1001"
                css.style.backgroundColor = "orange"

                // html.style = "initial"
                // javascript.style = "initial"

                html.style.outline = "3px solid transparent"
                html.style.zIndex = "999"
                html.style.backgroundColor = "#b01c1c"

                javascript.style.outline = "3px solid transparent"
                javascript.style.zIndex = "999"
                javascript.style.backgroundColor = "#1c8bb0"

            })
            javascript.addEventListener("mouseenter", () => {
                presentationBox.style.border = "4px solid blue"
                presentationTitle.innerText = "JavaScript"
                presentationText1.innerHTML = this.jsText1
                presentationText2.innerHTML = this.jsText2

                javascript.style.outline = "3px solid black"
                javascript.style.zIndex = "1001"
                javascript.style.backgroundColor = "blue"



                // html.style = "initial"
                // css.style = "initial"                


                css.style.outline = "3px solid transparent"
                css.style.zIndex = "999"
                css.style.backgroundColor = "#b08b1c"
                
                html.style.outline = "3px solid transparent"
                html.style.zIndex = "999"
                html.style.backgroundColor = "#b01c1c"

            })
        },
        assignColorsToLetters() {
            let colors = ["red", "orange", "blue"]
            let letters = document.getElementsByClassName("titleLetter")
            for (let i = 0; i < letters.length; i++) {
                let letter = letters[i]
                    letter.addEventListener("mouseenter", () => {
                        let color = colors[i%3]
                        this.colorWhite = false
                        letter.style.color = color    
                    })
                    letter.addEventListener("mouseleave", () => {
                        if (this.colorWhite) {
                            letter.style.color = "black"

                        }   
                        else  {
                            letter.style.color = "white"
                            this.colorWhite = true
                        } 
                    }
                )
            }
        },
        checkForSizeOfLetters() {
            let letters = document.getElementsByClassName("titleLetter")
            let spacers = document.getElementsByClassName("spacer")
            let presentationTitle = document.getElementById("presentationTitle")
            let presentationTexts = document.getElementsByClassName("presentationTitle")

            let firstSection = document.getElementsByClassName("first")[0]
            let secondSection = document.getElementsByClassName("second")[0]
            let thirdSection = document.getElementsByClassName("third")[0]

            if (window.innerWidth < 739) {
                for (let i = 0; i < letters.length; i++) {
                    let letter = letters[i]
                    letter.style.fontSize = "23px"
                }
                for (let i = 0; i < spacers.length; i++) {
                    let spacer = spacers[i]
                    spacer.style.fontSize = "23px"
                }

                for (let i = 0; i < presentationTexts.length; i++) {
                    let presentationText = presentationTexts[i]
                    // presentationText.style.fontSize = "20px"
                }
                presentationTitle.style.fontSize = "32px"


                
            }
            
            if (window.innerWidth < 536){
                
                for (let i = 0; i < letters.length; i++) {
                    let letter = letters[i]
                    letter.style.fontSize = "14px"
                }
                for (let i = 0; i < spacers.length; i++) {
                    let spacer = spacers[i]
                    spacer.style.fontSize = "14px"
                }
                for (let i = 0; i < presentationTexts.length; i++) {
                    let presentationText = presentationTexts[i]
                    // presentationText.style.fontSize = "14px"
                }
                presentationTitle.style.fontSize = "26px"
                
            }
            if (window.innerWidth > 1023) {
                firstSection.style.transform = "translate(62px, -34px) scale(1.5)"
                secondSection.style.transform = "translate(50px, 0px) scale(1.5)"
                thirdSection.style.transform = "translate(99px, 36px) scale(1.5)"
            }
            
        }
    },
    updated() {
        sessionStorage.setItem("currentTitle", "Welcome")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "Welcome")
    },
    beforeUpdate() {
        sessionStorage.setItem("currentTitle", "Welcome")
    },
    mounted() {
        sessionStorage.setItem("currentTitle", "Welcome")
        this.assignColorsToLetters()
        this.checkForSizeOfLetters()
        this.addShowContentToTitleAreas()

        let first = document.getElementsByClassName("first")[0]
        first.style.outline = "3px solid black"
        first.style.backgroundColor = "red"
    },
    beforeUpdate() {
        this.checkForSizeOfLetters()
    },
    updated() {
        this.checkForSizeOfLetters()
    }

}
</script>

<style>

.presentationText {
    width: 80%;
    border-bottom: 1px dotted black;
    margin-left: 10%;
    margin-bottom: 5%;
    font-size: clamp(12px, 2.1vw, 24px);
    padding-bottom: 15px;
    height: 100px;

}
#presentationTitle {
    width: 90%;
    font-size: 32px;
    border-bottom: 1px solid black;
    padding: 5px;
    height: 32px;
}
#presentationBox {
    position: absolute;
    top: 160px;
    right: 5%;
    width: 40%;
    height: 380px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 4px solid red;
    border-radius: 8px;
    transition: all 375ms;
    
}

#codeForTheWorld {
    height: 3.1rem;
    width: 95%;
    margin-left: 2.5%;
    margin-top: 20px;
    font-size: clamp(1rem, 2.4rem, 2.8rem);
    line-height: 2.2rem;
    text-align: center;
    font-weight: 600;
    background-color: rgba(255,255,255, 0.3);
    line-height: 50px;
    border-radius: 8px;
    color: white;
    -webkit-text-stroke: 0px black;
    display: flex;
    justify-content: center;
    flex-wrap:nowrap;
    
}
.titleLetter {
    color: white;
    transition: all 125ms;
    height: 20px;
    margin-bottom: 14px;
}

.titleArea1 {
    position: absolute;
    height: 70px;
    line-height: 70px;
    font-size: 36px;
    color: white;
    left: 15px;
    text-align:center;
    padding-right: 10px;
    transition: all 375ms;
    outline: 3px solid transparent;
    outline-offset: -3px;
}

.first {
    top: 240px;
    background-color: #b01c1c;
    width: 170px;
    border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;
    border-top-left-radius: 70px;
    
}

.second {
    top: 310px;
    width: 125px;
    background-color: #b08b1c;
}
.third {
    top: 380px;
    background-color: #1c8bb0;
    width: 320px;
    border-top-right-radius: 70px;
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 70px;
}
#optionsBox1 {
    position: absolute;
    /* top: 580px; */
    bottom: 100px;
    height: 100px;
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    /* background-color: aqua; */
}
#optionsBox2 {
    position: absolute;
    /* top: 580px; */
    bottom: 100px;
    height: 100px;
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* background-color: aqua; */
}

.spacer {
    color: transparent;
}
.or {
    cursor:default;
    margin-top: 45px;
    animation: none;
}
#createANewPageOrLogIn {
    display: flex;
    justify-content: center;
}
</style>