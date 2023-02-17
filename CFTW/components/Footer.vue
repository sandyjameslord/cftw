<template>
    <main>
        <div id="footerContainer">
            <div id="footerInfoContainer">
                <div id="footerTitle" class="footerLine">A website for you to learn to code.</div>
                <div id="" class="footerLine">Written by <nuxt-link to="about" id="aboutLink">Sandy Lord</nuxt-link>. Updated February, 2023.</div>
            </div>
            <template v-if="$auth.$state.loggedIn">
                <div ontouchstart="" @click="onLogout">
                    <div class="button">
                        <nuxt-link to="#">
                            Logout
                        </nuxt-link>
                    </div>
                </div>
            </template>
        </div>

    </main>
</template>
<script>

export default {

  methods: {
    async onLogout() {
      await this.$auth.logout();
      this.$router.push("/mainpage");
    },
    setBottomText() {
        var isChromium = window.chrome;
        var winNav = window.navigator;
        var vendorName = winNav.vendor;
        var isOpera = typeof window.opr !== "undefined";
        var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
        var isIOSChrome = winNav.userAgent.match("CriOS");

        let footerTitle = document.getElementById("footerTitle")

        let isBrowserOptimized = false
        let isWidthOptimized = false

        let bestCase = ""
        let okCase1 = " Optimized for Google Chrome."
        let okCase2 = " Performs best with a wider window."
        let worstCase = " Optimized for Google Chrome and performs best with a wider window."


        if (isIOSChrome) {
           // is Google Chrome on IOS
        } else if(
          isChromium !== null &&
          typeof isChromium !== "undefined" &&
          vendorName === "Google Inc." &&
          isOpera === false &&
          isIEedge === false
        ) {
            isBrowserOptimized = true
        } else { 
            isBrowserOptimized = false
        }

        if (window.innerWidth > 685) {
            isWidthOptimized = true
        }
        else {
            isWidthOptimized = false
        }


        if (isBrowserOptimized && isWidthOptimized) {
            footerTitle.innerHTML = footerTitle.innerHTML + bestCase
        }
        if (!isBrowserOptimized && isWidthOptimized) {
            footerTitle.innerHTML = footerTitle.innerHTML + okCase1
        }
        if (isBrowserOptimized && !isWidthOptimized) {
            footerTitle.innerHTML = footerTitle.innerHTML + okCase2
        }
        if (!isBrowserOptimized && !isWidthOptimized) {
            footerTitle.innerHTML = footerTitle.innerHTML + worstCase
        }

    }
  },
  mounted() {
    this.setBottomText()
  }
}

</script>
<style scoped>
#aboutLink {
    text-decoration: underline;
    color: white;
}
</style>