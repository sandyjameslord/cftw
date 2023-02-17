<template>
    <main>
        <br><br><br><br>
        <form class='container'>
            <div class='subContainer1'>
                <label class='label1'>Email</label>
                <div class='inputContainer'>
                    <input id="email" class="input1" type="email" v-model="email" @keyup="checkIfValid($event, 'email')">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>
            <div class='subContainer1'>
                <label class='label1'>Password</label>
                <div class='inputContainer'>
                    <input id="password" class="input1" type="password" v-model="password" @keyup="checkIfValid($event, 'password')">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>
            <div id="lowerButtonContainer">
                <div ontouchstart="">
                    <div id="lbtn" class="button" @click="onLogin">
                        <nuxt-link to="/profile">Log In</nuxt-link>          
                    </div>
                </div>
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="/signup">Create an Account</nuxt-link>
                    </div>
                </div>
            </div>
        </form>
    </main>
</template>
<script>
export default {
    layout: 'default',
    middleware: "auth",
    auth: "guest",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async onLogin() {
            try {
  

                this.$auth.loginWith("local", { data: {
                    email: this.email,
                    password: this.password
                }});

                setTimeout(() => {
                    if (!this.$auth.loggedIn) {
                        alert("Please check your username and password")
                        return
                    }
                }, 450)
                
              setTimeout(() => {
                    this.$router.push("/profile");
                }, 500);

            } catch (err) {
                
            }
        },
        checkIfValid($event, inputType) {
            if (inputType === "email") {
                let checkMark = document.getElementById("checkMark1")
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                emailPattern.test(this.email) === true ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "password"){
                let checkMark = document.getElementById("checkMark2")
                this.password.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
        },
    },
    mounted() {
        sessionStorage.setItem("currentTitle", "Log In")  

        let password = document.getElementById("password")

        password.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.onSignup();
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
</style>