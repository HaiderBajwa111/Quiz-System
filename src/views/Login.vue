<template>
  <div class="d-flex flex-column fill-height">
    <mainheader></mainheader>
    <div class="d-flex align-center justify-center fill-height">
      <v-card width="40%" elevation="5" class="pa-3 rounded-xl">
        <v-form width="100" @submit.prevent="authenticate">
          <div>
            <h1 class="primary--text">Log in</h1>
          </div>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="E-mail"
                required
                prepend-inner-icon="mdi-email-outline"
                v-model="loginData.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                required
                prepend-inner-icon="mdi-account-lock-outline "
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                v-model="loginData.password"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn class="ma-auto primary" type="submit" rounded block
                >Log in
                <v-icon> mdi-account </v-icon>
              </v-btn>
              <span>{{error}}</span>
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

export default {
  components: {
    mainheader,
    mainfooter,
  },
  data() {
    return {
      showPassword: false,
      error: '',
      loginData: {
        email: '',
        password: ''
      },
    };
  },

  methods: {
    authenticate() {
      return new Promise( (resolve, reject) => {
        if ( this.$store.state.User.some((user) => { return user.email == this.loginData.email}) && this.$store.state.User.some((user) => { return user.password == this.loginData.password}))
        {
          resolve();
        } else {
          reject("email or password is incorrect");
        }
      }).then(() => {
          this.$router.replace('/quiz')
        }).catch((msg) => {
          this.error= msg
        });
    },
  },

};
</script>
