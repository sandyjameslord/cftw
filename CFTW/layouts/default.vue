<template>
  <div id="background">
    <div id="background2">
      <div id="mainContainer">
        <Navbar ref="navbar" id="navbar" />
        <Nuxt id="mainContent" />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
    components: {
      Navbar,
      Footer
    },
    methods: {
      dismissNavigationContainer() {
        let navbar = document.getElementById("navbar")
        for (let i = 0; i < navbar.children.length; i++) {
          let child = navbar.children[i]
          if (child.id == "number") {
            if (child.innerHTML == 1) {
              this.dismissNavigationContainer()
            }
          }
        }        
      },
    },
    mounted() {
      let mainContent = document.getElementById("mainContent")
      mainContent.addEventListener("click", () => {
        this.dismissNavigationContainer()
      })
      window.onresize = function(){ location.reload(); }
    },
}
</script>

<style scoped>
#background {
  background-size: 150vh;
  background-blend-mode: lighten;
  background-image: linear-gradient(45deg, lightslategray, turquoise, turquoise, turquoise, turquoise);
}

#background2 {
  background: rgba(50,10,10,0.3) repeat fixed center;
  background-size: 200vh;
}

#mainContent {
  flex-grow: 1;
  z-index: 10;
}

#mainContainer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(50, 10, 10, 0.01);
  z-index: -5;
}
* {
  font-family: 'Poppins', sans-serif;
}

</style>