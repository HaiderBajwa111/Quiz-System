<template>
  <div class="d-flex flex-column fill-height">
    <mainheader></mainheader>
    <div class="d-flex align-center justify-center fill-height">
      <v-card width="40%" elevation="5" class="pa-3 rounded-xl">
        <v-form width="100" @submit.prevent="validate">
          <div>
            <h1 class="primary--text">Sign up</h1>
          </div>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="First name"
                prepend-inner-icon="mdi-pencil-outline"
                v-model="newUser.firstName"
                :rules="[rules.required]"
                error
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Last name"
                v-model="newUser.lastName"
                prepend-inner-icon="mdi-pencil-outline"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="E-mail"
                prepend-inner-icon="mdi-email-outline"
                v-model="newUser.email"
                :rules="[rules.required, rules.email, rules.takenEmail]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Password"
                prepend-inner-icon="mdi-account-lock-outline "
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                v-model="newUser.password"
                counter
                maxlength="16"
                :rules="[rules.passwordcheck]"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Address"
                v-model="newUser.address"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn 
              class="ma-auto primary" 
              type="submit" 
              rounded 
              block
              >Sign up
                <v-icon> mdi-account </v-icon>
              </v-btn>
              <span>{{ error }}</span>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </div>
    <mainfooter></mainfooter>
  </div>
</template>

<script>
import mainheader from "../components/mainheader";
import mainfooter from "../components/mainfooter";
import { mapActions, mapState } from "vuex";
export default {
  name: "Signup",
  components: {
    mainheader,
    mainfooter,
  },
  data() {
    return {
      ...mapState(["User"]),
      error: "",
      showPassword: false,
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
      },
      rules: {
        required: (value) => !!value ||  "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        takenEmail: (value) => {
          return (
            this.$store.state.User.every((user) => {
              return user.email !== value;
            }) || "This email is already taken"
          );
        },
        passwordcheck: (value) =>
          value.match(/^[A-Za-z]\w{7,14}$/) ? true : "password should between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter",
      },
    };
  },
  methods: {
    ...mapActions(["addUser"]),
     validate() {
        if (
          this.rules.required(this.newUser.firstName) === true &&
          this.rules.required(this.newUser.lastName) === true &&
          this.rules.email(this.newUser.email) === true &&
          this.rules.takenEmail(this.newUser.email) === true &&
          this.rules.passwordcheck(this.newUser.password) === true &&
          this.rules.required(this.newUser.lastName) === true &&
          this.rules.required(this.newUser.address) === true
        ){
          this.submitUser();
        } else {
           this.rejectUser("your form invalid");
        }
      },
    submitUser(){
        const payload = this.newUser;
        this.addUser(payload);
      console.log("then");
      this.newUser = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",} 
        },
        rejectUser(error){
            this.error = error
        }
  },
};
</script>
