<template>
    <div class="register">
    	<div class="signup">
				<form autocomplete="off" @submit.prevent>
					<label for="chk" aria-hidden="true">Register</label>
					<input type="email" name="email" v-model="email" placeholder="Email">
					<input type="password" name="password" v-model="password" placeholder="Password">
					<button @click="register">Register</button>
				</form>
        </div>
    </div>
</template>

<script>
import Authentication from '../services/Authentication';

export default {
  name: 'Register',
  data() {
	  return {
		  email: '',
		  password: ''
	  }
  },
  methods: {
	  async register() {
		  const response = await Authentication.register({
			  email: this.email,
			  password: this.password
		  })
		  console.log(response.data)
	  }
  }
}
</script>

<style>

.register {
    width: 30vw;
	height: 70vh;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 20px 50px #000;
    padding: 8px;
}

#chk{
	display: none;
}
.signup{
	position: relative;
	width:100%;
	height: 100%;
}
label{
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 20px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: rgba(207, 92, 54, 0.6);
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: #CF5C36;
}


@media (max-width: 900px) {

.register {
    width: 60vw;
}
}

@media (max-width: 500px) {
.register {
    width: 80vw;
    height: 50vh;
}

}
</style>
