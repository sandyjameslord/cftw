<template>
    <main>
        <form class='container'>

            <div class='subContainer1'>
                <label class='label1'>First name</label>
                <div class='inputContainer'>
                    <input id="firstName" maxlength="18" class="input1" type="text" v-model="firstName" :placeholder="'First Name...min 1 character'" @keyup="checkIfValid($event, 'firstName')">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Last name</label>
                <div class='inputContainer'>
                    <input id="lastName"  maxlength="25" class="input1" type="text" v-model="lastName" :placeholder="'Last Name...min 1 character'" @keyup="checkIfValid($event, 'lastName')">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Preferred name / Nickname</label>
                <div class='inputContainer'>
                    <input id="nickName"  maxlength="18" class="input1" type="text" v-model="nickName" :placeholder="'Preferred Name / Nickname...min 1 character'" @keyup="checkIfValid($event, 'nickName')">
                    <span id="checkMark3" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Email - to be used as login</label>
                <div class='inputContainer'>
                    <input id="email" class="input1" type="email" v-model="email" :placeholder="'Email...'" @keyup="checkIfValid($event, 'email')">
                    <span id="checkMark4" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Password</label>
                <div class='inputContainer'>
                    <input id="password1" class="input1" type="password" v-model="password1" :placeholder="'Password...min 8 characters'" @keyup="checkIfValid($event, 'password1')">
                    <span id="checkMark5" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Confirm password</label>
                <div class='inputContainer'>
                    <input id="password2" class="input1" type="password" v-model="password2" :placeholder="'Confirm password...'" @keyup="checkIfValid($event, 'password2')">
                    <span id="checkMark6" class="checkMark">&#10003;</span>
                </div>
            </div>

            

            <div ontouchstart="">
                <div class="button" @click="onSignup">
                    <nuxt-link to="">Click to Sign Up</nuxt-link>
                    <!-- <span id="loginButton">Click to Sign Up</span> -->
                </div>
            </div>

            <!-- <div id='signUpButton' class="submitButton" @click="onSignup">Create your account.</div> -->

        </form>
        
    </main>
</template>

<script>
export default {
    middleware: "auth",
    auth: "guest",
    data() {
        return {
            firstName: "",
            lastName: "",
            nickName: "",
            email: "",
            password1: "",
            password2: "",
        }
    },
    
    methods: { 
        checkIfValid($event, inputType) {
        if (inputType === "firstName"){
                let checkMark = document.getElementById("checkMark1")
                this.firstName.length > 0 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "lastName"){
                let checkMark = document.getElementById("checkMark2")
                this.lastName.length > 0 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "nickName"){
                let checkMark = document.getElementById("checkMark3")
                this.nickName.length > 0 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "email") {
                let checkMark = document.getElementById("checkMark4")
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                emailPattern.test(this.email) === true ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "password1"){
                let checkMark = document.getElementById("checkMark5")
                this.password1.length > 7 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "password2"){
                let checkMark = document.getElementById("checkMark6")
                if (this.password2.length > 7) {
                    this.password1 === this.password2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                else {
                    checkMark.style.opacity = 0.0
                }
                
            }
            
            
        },
        async onSignup() {
            
            let checkMarks = document.getElementsByClassName("checkMark")
            for (let i = 0; i < checkMarks.length; i++) {
                let checkMark = checkMarks[i]
                console.log(checkMark.style)
                if (checkMark.style.opacity == "") {
                    alert("You are missing some required information. \nMake sure everything has a green ✓.")
                    return
                }
            }
            try {
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    nickName: this.nickName,
                    email: this.email,
                    password: this.password2,
                };

                let response = await this.$axios.$post("/api/auth/signup", data);
                
                if (response.success) {
                    this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password2
                        }
                    });
                }
                this.$router.push("/profile");
            } catch (err) {
                console.log(err)
            }
        }
    }, 
    // updated() {
    //     sessionStorage.setItem("currentTitle", "Sign Up")
    // },
    // beforeMount() {
    //     sessionStorage.setItem("currentTitle", "Sign Up")
    // },
    // beforeUpdate() {
    //     sessionStorage.setItem("currentTitle", "Sign Up")
    // },
    mounted() {
        sessionStorage.setItem("currentTitle", "Sign Up")

        let password2 = document.getElementById("password2")

        password2.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.onSignup();
            }
        });
        // setTimeout(() => {
        //     this.$refs.navbar.setCurrentTitle("Sign Up")
        // }, 100) 
    },    
}
</script>

<style scoped>
#signUpTitle {
    font-size: 48px;
    background-color: rgba(255,255,255,0.4);
    width: 90%;
    margin-left: 5%;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
    border-radius: 8px;
    color: black;
    /* -webkit-text-stroke: 3px white; */
  text-shadow: 1px -1px 0 rgba(255,255,255,1);
				  /* 1px 1px 0 rgba(0,0,0,1), */
				 /* 1px -1px 0 rgba(0,0,0,1); */

}

.button{
  position:relative;
  display:inline-block;
  margin:10px;
  transform: scale(1.0);
    transition: transform 0.375s ease-in-out;
}

.button:hover {
    transform: translateX(0em) translateY(0em) scale(1.03);
    transition: transform 0.625s ease-in-out;
}

/* .button nuxt-link{ */
.button span{    
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size: 1.3em;
  /* font-size:36px; */
  text-align: center;
  text-decoration:none;
  background-color:red;
  /* background-color:#FFA12B; */
  display:block;
  position:relative;
  padding:10px 20px;
  
  -webkit-tap-highlight-color: rgba(200, 0, 0, 1.0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);

  /* -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100; */
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button span:active{
  top:10px;
  /* background-color:#F78900; */
  background-color:rgba(200, 0, 0, 1.0);
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 rgba(150, 0, 0, 1.0);
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 rgba(150, 0, 0, 1.0);
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 rgba(150, 0, 0, 1.0);

  /* transform: scale(1.0); */
  transition: background-color 0.125s ease-out;
}

.button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
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