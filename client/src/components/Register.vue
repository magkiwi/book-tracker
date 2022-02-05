<template>
	<div class="body">
		<div class="register">
			<input type="checkbox" id="chk">
			<div class="signup">
					<form autocomplete="off" @submit.prevent>
						<label for="chk" aria-hidden="true">Register</label>
						<input autocomplete="off" name="email_register" v-model="email_register" placeholder="Email">
						<input type="password" name="password_register" v-model="password_register" placeholder="Password">
						<div class="error" v-if="error_register"> {{error_register}} </div>
						<button @click="register">Register</button>
					</form>
			</div>

				<div class="login">
					<form autocomplete="off" @submit.prevent>
						<label for="chk" aria-hidden="true">Login</label>
						<input autocomplete="off" name="email_login" v-model="email_login" placeholder="Email">
						<input type="password" name="password_login" v-model="password_login" placeholder="Password">
						<div class="error" v-if="error_login"> {{error_login}} </div>
						<button @click="login">Login</button>
					</form>
			</div>
		</div>
	</div>
</template>

<script>
import Authentication from '../services/Authentication';

export default {
  name: 'Register',
  data() {
	  return {
		  email_register: '',
		  password_register: '',
		  error_register: null,
		  email_login: '',
		  password_login: '',
		  error_login: null
	  }
  },
  methods: {
	  async register() {
		  try {		
			const response = await Authentication.register({
				email: this.email_register,
				password: this.password_register
		
		  		})
			this.error_register = ''
			console.log('All good with register')
			console.log(response.data)
			this.$store.dispatch('setToken', response.data.token)
			this.$store.dispatch('setUser', response.data.user)
		  } catch (error) {
			  this.error_register = error.response.data.error
		  }
	  },
		async login() {
		  try {		
			const response = await Authentication.login({
				email: this.email_login,
				password: this.password_login
				})
			this.error = ''
			this.$store.dispatch('setToken', response.data.token)
			this.$store.dispatch('setUser', response.data.user)

		  } catch (error) {
			  this.error_login = error.response.data.error
			  console.log(this.error_login)
		  }
	  }
  }
}
</script>

<style scoped>

.body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

.register {
	width: 350px;
	height: 500px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 5px 20px 50px #000;

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
	background: #CF5C36;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}


.error {
	color: #BA0000;
	font-weight: bold;
	font-size: 1em;
	justify-content: center;
	text-align: center;
	display: flex;
}

.login{
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}

.login label{
	color: #CF5C36;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}



</style>
