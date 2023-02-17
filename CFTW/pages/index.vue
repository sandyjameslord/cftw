<template>
    <main id="hey">

    </main>
</template>

<script>
export default {
    layout: 'indexLayout',
    mounted() {
        console.log("iun index layout")
        // setTimeout(() => {  
        //     this.$router.push("/mainpage");
        // },
        // 200);
    }
}
</script>

<style scoped>
ol {
    font-size: 96px;
}
body {
    height: 100%;
    width: 100%;
    background-color: purple;
}
#hey {
    height: 100%;
    width: 100%;
    background-color: purple;
}
</style>