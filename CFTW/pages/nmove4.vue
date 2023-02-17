<template>
    <main>
        <div id="mainContainerOutside">
            <div id="leftSide"></div>
            <div id="rightSide"></div>
            <div id="top" class="sidePart"></div>
            <div id="middle" class="sidePart"></div>
            <div id="bottom" class="sidePart"></div>
            
            
            <div id="horizontalSlider"></div> 
            <div id="vSlider1" class="vslider"></div> 
            <div id="vSlider2" class="vslider"></div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            id: "",
            minimumHeight: 220,
            horizontalSliderOriginalPosition: 0,
            horizontalSliderNewPosition: 0,
            upperVerticalSliderOriginalPosition: 100,
            lowerVerticalSliderOriginalPosition: 100,
            upperVerticalSliderNewPosition: 200,
            lowerVerticalSliderNewPosition: 200,
            horizontalSliderSetInInitialPositionOnHover: false,
            upperVerticalSliderSetInInitialPositionOnHover: false,
            lowerVerticalSliderSetInInitialPositionOnHover: false,
        }
    },
    components: {

    },
    async asyncData({ $axios }) {
      try {
        let drewSaveContentsResponse = await $axios.$get("/api/drewSaveContents");
        return {
          drewSaveContents: drewSaveContentsResponse.drewSaveContents
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        
        dragHorizontalSlider() {
            let elmnt = document.getElementById("horizontalSlider")
            elmnt.onmousedown = dragMouseDown;
   
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                this.horizontalSliderNewPosition = e.clientX;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
    
                if (e.clientX < 30) {return}
                if (e.clientX > window.innerWidth - 30) {return}
                this.horizontalSliderOriginalPosition = this.horizontalSliderNewPosition - e.clientX;
                this.horizontalSliderNewPosition = e.clientX;
    
                elmnt.style.left = (elmnt.offsetLeft - this.horizontalSliderOriginalPosition) + "px";

                let leftSide = document.getElementById("leftSide")
                let rightSide = document.getElementById("rightSide")

                let windowWidth = window.innerWidth
                let leftSideWidth = (this.horizontalSliderNewPosition / windowWidth * 100)
                // console.log(windowWidth, leftSideWidth)
                let leftSideWidthPercent = `${leftSideWidth}%`

                let rightSideWidth = 100 - leftSideWidth
                let rightSideWidthPercent = `${rightSideWidth}%`

                leftSide.style.width = leftSideWidthPercent
                rightSide.style.width = rightSideWidthPercent
                rightSide.style.left = leftSideWidthPercent

                let upperVerticalSlider = document.getElementById("vSlider1")
                let lowerVerticalSlider = document.getElementById("vSlider2")
                let top = document.getElementById("top")
                let middle = document.getElementById("middle")
                let bottom = document.getElementById("bottom")


                upperVerticalSlider.style.width = leftSideWidthPercent
                lowerVerticalSlider.style.width = leftSideWidthPercent
                top.style.width = leftSideWidthPercent
                middle.style.width = leftSideWidthPercent
                bottom.style.width = leftSideWidthPercent
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        dragVSlider1() {

            let slider1 = document.getElementById("vSlider1")
            let slider2 = document.getElementById("vSlider2")
            
            slider1.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.upperVerticalSliderNewPosition = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                if (e.clientY < 70 + 30) {return}

                let slider2Top = slider2.offsetTop
                if (e.clientY > slider2Top + 30) {return}

                e = e || window.event;
                e.preventDefault();

                let top = document.getElementById("top")
                let topHeight = e.clientY - 70
                let topHeightPx = topHeight + "px"

                this.upperVerticalSliderOriginalPosition = this.upperVerticalSliderNewPosition - e.clientY;
                this.upperVerticalSliderNewPosition = e.clientY;

                slider1.style.top = (slider1.offsetTop - this.upperVerticalSliderOriginalPosition) + "px";

                top.style.height = topHeightPx

                let middle = document.getElementById("middle")
                    
                let bottom = document.getElementById("bottom")
                let bottomHeight = bottom.clientHeight

                let middleHeight = window.innerHeight - 220 - topHeight - bottomHeight
                let middleHeightPx = middleHeight + "px"
                middle.style.height = middleHeightPx
                middle.style.top = topHeightPx
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        dragVSlider2() {

            let slider1 = document.getElementById("vSlider1")
            let slider2 = document.getElementById("vSlider2")
            
            slider2.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();

                this.lowerVerticalSliderNewPosition = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();

                let mainContainerOutside = document.getElementById("mainContainerOutside")

                if (e.clientY - 30 > mainContainerOutside.clientHeight) {return}
                if (e.clientY < slider1.offsetTop + 130) {return}

                this.lowerVerticalSliderOriginalPosition = this.lowerVerticalSliderNewPosition - e.clientY;
                this.lowerVerticalSliderNewPosition = e.clientY;
                let slider2Top = slider2.offsetTop - this.lowerVerticalSliderOriginalPosition
                slider2.style.top = (slider2Top) + "px";

                let top = document.getElementById("top")
                let topHeight = top.clientHeight

                let middle = document.getElementById("middle")

                let middleTop = topHeight
                let middleTopPx = middleTop + "px" 

                middle.style.top = middleTopPx

                let middleHeight = slider2Top - topHeight
                let middleHeightPx = middleHeight + "px"
                middle.style.height = middleHeightPx

                let bottom = document.getElementById("bottom")
                let bottomTop = slider2Top
                let bottomTopPx = bottomTop + "px"
                bottom.style.top = bottomTopPx
                let bottomHeight = mainContainerOutside.clientHeight - topHeight - middleHeight
                let bottomHeightPx = bottomHeight + "px"
                bottom.style.height = bottomHeightPx
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
        preselectAllContainers() {
            let children = document.getElementsByClassName("addToPrintButton")
            for (let i = 0; i < children.length; i++) {
                let child = children[i]
                console.log(child)
                child.click()
            }
        },

        


    },

    mounted() {
        let horizontalSlider = document.getElementById("horizontalSlider")

        horizontalSlider.addEventListener("mouseenter", (e) => {
            if (this.horizontalSliderSetInInitialPositionOnHover == false) {
                e = e || window.event;
                e.preventDefault();
                this.dragHorizontalSlider()
                
                
                this.horizontalSliderSetInInitialPositionOnHover = true
            }
            else {
                return
            }
        })

        horizontalSlider.addEventListener("mousedown", (e) => {
            this.dragHorizontalSlider()
        })

        let vSlider1 = document.getElementById("vSlider1")
        let vSlider2 = document.getElementById("vSlider2")

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




        vSlider1.addEventListener("mousedown", (e) => {
            this.dragVSlider1()
        })
        vSlider2.addEventListener("mousedown", (e) => {
            this.dragVSlider2()
        })

        // horizontalSlider.
        // vSlider1.click()
        // vSlider2.click()
    }
}
</script>

<style scoped>

#mainContainerOutside {
    position: absolute;
    top: 70px;
    left: 0;
    background-color: white;
    height: calc(100% - 220px);
    width: 100%;
}

#leftSide {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    height: 100%;
    width: 50%;
}
#rightSide {
    position: absolute;
    top: 0;
    left: 50%;
    background-color: red;
    height: 100%;
    width: 50%;
}
#horizontalSlider {
    position: absolute;
    top: 0px;
    left: 50%;
    height: 100%;
    width: 15px;
    background-color: rgba(50, 50, 50, 1);
    outline: 2px dashed white;
    cursor: pointer;

}
.vslider {
    position: absolute;
    /* top: 33.334%; */
    left: 0;
    width: 50%;
    height: 15px;
    
    cursor: pointer;
    outline: 2px dashed white;
    background-color: rgba(50, 50, 50, 1);
}
#vSlider1 {
    top: 33.334%;
    /* background-color: rgba(100, 200, 221, 0.5); */
    background-color: rgba(50, 50, 50, 1);

}

#vSlider2 {
    top: 66.6667%;
    /* background-color: rgba(250, 50, 221, 0.5); */
    /* background-color: rgba(50, 50, 50, 0.5); */
}

#top {
    background-color:slateblue;
    top: 0;
}
#middle {
    background-color:lightcoral;
    top: 33.333%;
}
#bottom {
    background-color:teal;
    top: 66.667%;
}
.sidePart {
    position: absolute;
    left: 0;
    width: 50%;
    height: calc(33.334%);
    /* border: 3px dashed black; */
}
</style>