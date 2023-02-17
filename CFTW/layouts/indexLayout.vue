<template>
    <main id="main">
        <div id="squareContainer">
            <div id="htmlContainer" class="smallContainer">
                <div id="htmlH" class="letterContainer">H</div>
                <div id="htmlT" class="letterContainer">T</div>
                <div id="htmlM" class="letterContainer">M</div>
                <div id="htmlL" class="letterContainer">L</div>
            </div>
            <div id="cssContainer" class="smallContainer">
                <div id="cssC" class="letterContainer">C</div>
                <div id="cssS1" class="letterContainer">S</div>
                <div id="cssS2" class="letterContainer">S</div>
            </div>
            <div id="jsContainer" class="smallContainer">
                <div id="javaScriptJ" class="letterContainer">J</div>
                <div id="javaScriptA1" class="letterContainer">A</div>
                <div id="javaScriptV" class="letterContainer">V</div>
                <div id="javaScriptA2" class="letterContainer">A</div>
                <div id="javaScriptS" class="letterContainer">S</div>
                <div id="javaScriptC" class="letterContainer">C</div>
                <div id="javaScriptR" class="letterContainer">R</div>
                <div id="javaScriptI" class="letterContainer">I</div>
                <div id="javaScriptP" class="letterContainer">P</div>
                <div id="javaScriptT" class="letterContainer">T</div>
            </div>
        </div>
        <div id="squareContainerCover">
            <div class="htmlContainerCover smallContainerCover">
                <div id="htmlHCover" class="letterContainerCover"></div>
                <div id="htmlTCover" class="letterContainerCover"></div>
                <div id="htmlMCover" class="letterContainerCover"></div>
                <div id="htmlLCover" class="letterContainerCover"></div>
            </div>
            <div id="cssContainerCover" class="smallContainerCover">
                <div id="cssCCover" class="letterContainerCover"></div>
                <div id="cssS1Cover" class="letterContainerCover"></div>
                <div id="cssS2Cover" class="letterContainerCover"></div>
            </div>
            <div id="jsContainerCover" class="smallContainerCover">
                <div id="javaScriptJCover" class="letterContainerCover"></div>
                <div id="javaScriptA1Cover" class="letterContainerCover"></div>
                <div id="javaScriptVCover" class="letterContainerCover"></div>
                <div id="javaScriptA2Cover" class="letterContainerCover"></div>
                <div id="javaScriptSCover" class="letterContainerCover"></div>
                <div id="javaScriptCCover" class="letterContainerCover"></div>
                <div id="javaScriptRCover" class="letterContainerCover"></div>
                <div id="javaScriptICover" class="letterContainerCover"></div>
                <div id="javaScriptPCover" class="letterContainerCover"></div>
                <div id="javaScriptTCover" class="letterContainerCover"></div>
            </div>
        </div>
        <div id="onTopContainer"></div>
    </main>
</template>

<script>

export default {
    methods: {
        setUpBoxes() {
            let boxes = document.getElementsByClassName("letterContainer")
            for (let i = 0; i < boxes.length; i++) {
                let box = boxes[i]
                box.style.animationDelay = `3565ms`
            }
        },
        setUpCoverBoxes() {
            let coverBoxes = document.getElementsByClassName("letterContainerCover")
            for (let i = 0; i < coverBoxes.length; i++) {
                let coverBox = coverBoxes[i]
                let randomDelay = Math.floor(Math.random() * (500 - 50 + 1) + 50)
               
                if (i == 1) {
                    coverBox.style.animationDelay = `1765ms`
                }
                else {
                    coverBox.style.animationDelay = `${randomDelay * (i/8) + 1000}ms`
                }
            }
        },
        changeTextOver() {
            let newLetters = ["C", "O", "D", "E", "F", "O", "R", "T", "H", "E", " ", "W", "O", "R", "L", "D", "!"]
            let letterContainers = document.getElementsByClassName("letterContainer")
            for (let i = 0; i < letterContainers.length; i++) {
                let newLetter = newLetters[i]
                let letterContainer = letterContainers[i]
                setTimeout(() => {
                    letterContainer.innerHTML = newLetter
                }, (i * 50))
            }

        },
        

    },
    mounted() {
        this.setUpBoxes()
        this.setUpCoverBoxes()

        setTimeout(() => {
            this.changeTextOver()
        }, 6000)



        setTimeout(() => {
            this.$router.push("/mainpage");
        }, 8700)
    }
}
</script>

<style scoped>
@keyframes roundLCorner {
    0% {
        border-top-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    100% {
        border-top-left-radius: 80px;
        border-bottom-right-radius: 80px;
    }
}
@keyframes moveToCorner {
    0% {
        transform: translate(0), scale(1);
    }
    50% {
        transform: scale(0.3);
    }
    90% {
        transform: scale(0.3), translateX(-120%);
    }
    100% {
        transform: scale(0.3)
    }
}


#totalCoverContainer {
    background-color: aqua;
    animation: totalCoverContainerShrinks 1s;
}
@keyframes totalCoverContainerShrinks {
    0% {

    }
    100% {

    }
}
#codeWithDrew {
    position: absolute;
    height: 100px;
    width: 80%;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4em;
    background-color: aqua;
    text-align: center;
    line-height: 100px;
}
* {
    overflow: hidden;
}
#htmlContainer {
    animation: roundHTML 500ms 5000ms linear forwards;
}
#cssContainer {

}
#jsContainer {
    animation: roundJS 500ms 5000ms linear forwards;
}
#htmlH {
    background-color: red;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#htmlT {
    background-color: red;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#htmlM {
    background-color: red;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#htmlL {
    background-color: red;
    animation: squeezeAndGrowHTMLL 2s ease-out forwards;
    padding-right: 12px;
}
#cssC {
    background-color: orange;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#cssS1 {
    background-color: orange;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#cssS2 {
    background-color: orange;
    animation: squeezeAndGrow 2s ease-out forwards;
    padding-right: 14px;
}
#javaScriptJ {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptA1 {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptV {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptA2 {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptS {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptC {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptR {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptI {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptP {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}
#javaScriptT {
    background-color: blue;
    animation: squeezeAndGrow 2s ease-out forwards;
}

#htmlHCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#htmlTCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#htmlMCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#htmlLCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#cssCCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#cssS1Cover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#cssS2Cover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptJCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptA1Cover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptVCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptA2Cover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptSCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptCCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptRCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptICover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptPCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#javaScriptTCover {
    background-color: white;
    animation: shakeAndFall 2s ease-out forwards;
}
#htmlContainerCover {
    background-color: white;
}
#squareContainer {
    height: 400px;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 36px;
    text-align: center;
    line-height: 133.3px;
    z-index: 1;
}
#squareContainerCover {
    height: 400px;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 36px;
    text-align: center;
    line-height: 133.3px;
    z-index: 2;
}

#onTopContainer {
    height: 400px;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 3;
    animation: onTopContainerDropsFromSight 1s forwards;
}
@keyframes onTopContainerDropsFromSight {
    0% {
        background-color: white;
    }
    90% {
        background-color: white;
    }
    100% {
        background-color: transparent;
    }
}

.letterContainerCover {
    min-width: 40px;
    height: 100%;
    background-color: black;
    border-radius: 20px;
    margin: 10px;
    background-color: transparent;

}
.letterContainer {
    width: 40px;
    height: 100%;
    border-radius: 20px;
    margin: 10px;
    background-color: transparent;
}

.smallContainer {
    width: fit-content;
    height: 133.3px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.smallContainerCover {
    width: fit-content;
    height: 133.3px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
}

@keyframes roundHTML {
    0% {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    100% {
        border-top-left-radius: 80px;
        border-top-right-radius: 80px;
        border-bottom-right-radius: 80px;
    }
}
@keyframes roundJS {
    0% {
        
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    100% {
        border-top-right-radius: 80px;
        border-bottom-right-radius: 80px;
        border-bottom-left-radius: 80px;
    }
}

@keyframes squeezeAndGrow {
    0% {
        border-radius: 10px;
        
    }
    50% {
        border-radius: 10px;
        color: white;
        margin: 0px;
    }
    75% {
        border-radius: 10px;
        transform: translate(20%, 0) scale(1.3);
        color: white;
    }
    100% {
        border-radius: 20px;
        transform: translate(30%, 0) scale(1.7);
        color: white;
    }
}
@keyframes squeezeAndGrowHTMLL {
    0% {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        
    }
    50% {
        color: white;
        margin: 0px;
    }
    75% {
        transform: translate(20%, 0) scale(1.3);
        color: white;
    }
    100% {
        transform: translate(30%, 0) scale(1.7);
        color: white;
        border-top-right-radius: 80px;
        border-bottom-right-radius: 80px;
    }
}

@keyframes shakeAndFall {
    0% {
        background-color: black;
        transform: rotate(0deg);
    }
    16.67% {
        transform: rotate(-20deg);
    }
    33.33% {
        background-color: rgba(255,255,255,0.9);
        transform: rotate(20deg)
    }
    50% {
        transform: rotate(-30deg);
    }
    66.67% {
        transform: rotate(30deg)
    }
    83.33% {
        transform: translateY(80px);
    }
    88% {
        transform: translateY(160px);
    }
    94% {
        transform: translateY(320px);
    }
    100% {
        transform: translateY(620px);
    }
}
</style>            