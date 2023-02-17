<template>
    <main>
        <div id="codeForTheWorld">
            <span class="titleLetter">C</span>
            <span class="titleLetter">o</span>
            <span class="titleLetter">d</span>
            <span class="titleLetter">e</span>
            <span class="spacer">i</span>
            <span class="titleLetter">F</span>
            <span class="titleLetter">o</span>
            <span class="titleLetter">r</span>
            <span class="spacer">i</span>
            <span class="titleLetter">T</span>
            <span class="titleLetter">h</span>
            <span class="titleLetter">e</span>
            <span class="spacer">i</span>
            <span class="titleLetter">W</span>
            <span class="titleLetter">o</span>
            <span class="titleLetter">r</span>
            <span class="titleLetter">l</span>
            <span class="titleLetter">d</span>
        </div>
        <div id="localSubtitle">A website for developing skills in<br> HTML, CSS and JavaScript</div>
        <div id="storyContainer">
            <div id="headline">You too can become a developer. It takes time, dedication, and a way to practice.</div>
            <div id="firstP" class="para">Step by step, learn the parts of a website, how to style them, and most importantly, how to get them to behave the way you want.</div>
            <div id="secondP" class="para">Four years ago I started teaching myself to code. Since then I've gone from being overwhelmed by writing two lines of code to programming this entire website from scratch.<br><br>I've wanted to teach my younger son to code. As a beginner, it can be easy to get lost in finding ways to practice. Code for the World provides two paths: </div>
            <div id="thirdP" class="para">1: Learn HTML, CSS and JavaScript from the <nuxt-link id="curriculumLink" to="/profile#nicknamesCurriculum">Curriculum</nuxt-link>, at your own pace. <br>2: Practice what you've learned in the <nuxt-link to="/practice" id="getCreativeLink">Get Creative</nuxt-link> area. Later, go to <nuxt-link to="/profile#nicknamesSavedCode" id="savedCodeLink">your Saved Code</nuxt-link>. </div>
            <div id="fourthP" class="para">You can do it! Code along with me and my son and develop proficiency at any age. <nuxt-link to="contact" id="contactLink">Please reach out with any questions or comments.</nuxt-link></div>
            <img id="sandy" src="/img/sandyHeadShot.jpg" alt="" @mouseenter="toggleSandy()" @mouseleave="toggleSandy()">
            <img id="sandy2" src="/img/sandy_2023_3.jpg" alt="" @mouseenter="toggleSandy()" @mouseleave="toggleSandy()">
            <div id="sandyCaption" @mouseenter="toggleSandy()" @mouseleave="toggleSandy()">Sandy Lord in 2019, just as he began learning to code.</div>
            

        </div>
    </main>
</template>
<script>
export default {
    layout: 'default',
    data() {
        return {
            
        };
    },
    methods: {
        toggleSandy() {
            let sandy = document.getElementById("sandy")
            let sandy2 = document.getElementById("sandy2")
            let sandyCaption = document.getElementById("sandyCaption")

            let sandyOpacity = sandy.style.opacity
        
            if (sandyOpacity == "0") {
                sandy2.style.opacity = "0"
                sandy.style.opacity = "1"
                sandyCaption.innerHTML = "Sandy Lord in 2019, just as he began learning to code."
            }
            else {
                sandy.style.opacity = "0"
                sandy2.style.opacity = "1"
                sandyCaption.innerHTML = "Sandy with his FSU Comp Sci diploma, Feb. 2023"
            }
        },
        checkForSizeOfLetters() {
            let letters = document.getElementsByClassName("titleLetter")
            let spacers = document.getElementsByClassName("spacer")

            if (window.innerWidth < 739) {
                for (let i = 0; i < letters.length; i++) {
                    let letter = letters[i]
                    letter.style.fontSize = "23px"
                }
                for (let i = 0; i < spacers.length; i++) {
                    let spacer = spacers[i]
                    spacer.style.fontSize = "23px"
                }
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
            }
            if (window.innerWidth > 1000) {
                for (let i = 0; i < letters.length; i++) {
                    let letter = letters[i]
                    letter.style.fontSize = "42px"
                }
                for (let i = 0; i < spacers.length; i++) {
                    let spacer = spacers[i]
                    spacer.style.fontSize = "42px"
                }
            }
            if (window.innerWidth < 842) {
                let thirdP = document.getElementById("thirdP")
                let fourthP = document.getElementById("fourthP")
                thirdP.style.width = "90vw"
                fourthP.style.width = "90vw"
            }
            else {
                let sandy = document.getElementById("sandy")
                let sandy2 = document.getElementById("sandy2")
                sandy.style.width = "27vw"
                sandy.style.height = "32vw"
                sandy2.style.width = "27vw"
                sandy2.style.height = "32vw"

                let headline = document.getElementById("headline")
                headline.style.width = "60vw"

                let caption = document.getElementById("sandyCaption")
                caption.style.width = "calc(27vw - 12px)"
                caption.style.top = "calc(32vw + 10px)"
                caption.style.backgroundColor = "rgba(200,200,200,0.95)"
            }
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
    },
    mounted() {
        sessionStorage.setItem("currentTitle", "About")  
        this.assignColorsToLetters()
        this.checkForSizeOfLetters()
    },
}
</script>
<style scoped>

.titleLetter {
    color: white;
    transition: all 125ms;
    height: 20px;
    margin-bottom: 14px;
}
.spacer {
    color: transparent;
}
#localSubtitle {
        background-color: rgba(255,255,255,0.3);
        border: 2px solid rgba(255,255,255,0.2);
        outline: 1px rgba(255,255,255,0.1);
        height: 7vw;
        width: 60%;
        margin-left: 20%;
        text-align: center;
        font-size: 3.1vw;
        margin-top: 30px;
        padding-top: 14px;
        padding-bottom: 10px;

        padding-left: 10px;
        padding-right: 10px;
        border-radius: 8px;
        color: white;
}
#storyContainer {
    /* height: 450px; */
    height: fit-content;
    width: 95%;
    margin-left: 2.5%;
    background-color: rgba(255,255,255,0.3);    
    margin-top: 30px;
    position: relative;
    padding: 4px;
    border-radius: 8px;

}
#sandy {
    height: 26.4vw;
    width: 21.6vw;
    position: absolute;
    top: 10px;
    right: 10px;
    transition: opacity 375ms;
}
#sandy2 {
    height: 26.4vw;
    width: 21.6vw;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 375ms;
}
#sandyCaption {
    height: 20px;
    width: calc(21.6vw - 12px);
    position: absolute;
    top: calc(26.4vw + 10px);
    right: 10px;
    font-size: 10px;
    background-color: rgba(200,200,200,0.6);
    padding: 6px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
#headline {
    font-size: 20px;
    width: 62vw;
    margin-bottom: 20px;
}
.para {
    font-size: 18px;
    width: 65vw;
    margin-top: 10px;
    padding-left: 5px;
}
#curriculumLink {
    text-decoration: underline;
}
#getCreativeLink {
    text-decoration: underline;
}
#contactLink {
    text-decoration: underline;
}
#savedCodeLink {
    text-decoration: underline;
}

</style>