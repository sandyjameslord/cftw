<template>
    <main>
        <br><br><br><br>
        <form class='container'>
            
            <div class='subContainer1'>
                <label class='label1'>Name</label>
                <div class='inputContainer'>
                    <input id="name" class="input1" type="name" v-model="name" @keyup="checkIfValid($event, 'name')">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>
            <div class='subContainer1'>
                <label class='label1'>Email</label>
                <div class='inputContainer'>
                    <input id="email" class="input1" type="email" v-model="email" @keyup="checkIfValid($event, 'email')">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>
            <div class='subContainer1' id="localSubcontainer">
                <label class='label1'>My comment or question</label>
                <div class='inputContainer'>
                    <textarea placeholder="Minimum 10 characters..." name="" id="comment" cols="100" rows="10" v-model="comment" @keyup="checkIfValid($event, 'comment')"></textarea>
                    <!-- <input id="comment" class="input1" type="comment" v-model="comment" @keyup="checkIfValid($event, 'comment')"> -->
                    <span id="checkMark3" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div id="lowerButtonContainer">
                <div ontouchstart="">
                    <div id="lbtn" class="button" @click="verifyComment">
                        <nuxt-link to="#">Send Comment</nuxt-link>          
                    </div>
                </div>
            </div>
        </form>
    </main>
</template>
<script>
export default {
    layout: 'default',
    data() {
        return {
            email: "",
            name: "",
            comment: "",
        };
    },
    methods: {
        verifyComment() {
            let checkMarks = document.getElementsByClassName("checkMark")
                // let allCheckMarksReady = true
            for (let i = 0; i < checkMarks.length; i++) {
                let checkMark = checkMarks[i]
                let opacity = checkMark.style.opacity
                if (opacity != "1") {
                    alert("Missing required information")
                    return
                }
            }
            this.onSendComment()
        },
        async onSendComment () {
            try {
                let data = {
                    email: this.email,
                    name: this.name,
                    comment: this.comment,
                };
                alert("Comment sent.")
                let result = await this.$axios.$post("/api/comments", data);
                setTimeout(
                    () => {
                        this.$router.push("/mainpage")
                    },
                    200
                )
            } catch (err) {
                console.log(err)
            }
        },
        checkIfValid($event, inputType) {
            if (inputType === "name"){
                let checkMark = document.getElementById("checkMark1")
                this.name.length > 0 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            if (inputType === "email") {
                let checkMark = document.getElementById("checkMark2")
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                emailPattern.test(this.email) === true ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            if (inputType === "comment"){
                let checkMark = document.getElementById("checkMark3")
                this.comment.length > 10 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
        },
    },
    mounted() {
        sessionStorage.setItem("currentTitle", "Contact")  

        let comment = document.getElementById("comment")

        comment.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.verifyComment();
            }
        });
    },
}
</script>
<style scoped>
#lbtn {
    align-self: flex-start;
    margin-right: 200px;
}
#lowerButtonContainer {
    display: flex;
    flex-direction: row;
    justify-content:flex-start
}
.submitButton {
    background-color: transparent;
    width: 60%;
    font-size: 1.3em;
    text-align: center;
    padding: 10px 5px;
    margin-left: 20%;
    border: 2px solid red;
    border-radius: 10px;
    transition: background-color 0.375s ease-in-out;
}

.submitButton:hover {
    background-color: red;
    transition: background-color 0.625s ease-in-out;
}
#localSubcontainer {
    height: 200px !important;
}
#comment {
    height: 200px !important;
    min-width: 95%;
    max-width: 800px;
}
</style>