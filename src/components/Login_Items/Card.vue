<template>
  <div
    class="
      absolute
      top-72
      z-10
      w-1/4
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
      bg-white
      border border-solid
      rounded-lg
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <small class="mt-6 text-center ml-36 text-gray-900">تسجيل الدخول</small>
      </div>
      <form class="rtl mt-8 space-y-4" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="flex w-full">
            <label for="username" class="sr-only">أسم المستخدم</label>
            <input
              id="username"
              name="username"
              type="username"
              autocomplete="username"
              v-model="input.username"
              required=""
              class="
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-400
                text-gray-900
                rounded-r-md
                placeholder:text-right
              "
              placeholder="أسم المستخدم"
            />
          </div>
          <div class="pt-3">
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="input.password"
              autocomplete="current-password"
              required=""
              class="
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-400
                text-gray-900
                rounded-r-md
                placeholder:text-right
              "
              placeholder="كلمة المرور"
            />
          </div>
        </div>

        <div class="flex items-center justify-between float-right">
          <div class="flex items-center mb-6">
            <label
              for="remember-me"
              class="ml-2 block text-sm text-gray-900 px-2"
            >
              تذكر
            </label>

            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="
                w-5
                h-5
                text-blue-600
                bg-gray-100
                rounded
                border-gray-300
                focus:ring-blue-500
                dark:focus:ring-blue-600 dark:ring-offset-gray-800
                focus:ring-2
                dark:bg-gray-700 dark:border-gray-600
              "
            />
          </div>
        </div>

        <div class="hover:mb-2 flex items-center justify-center">

          <router-link
            type="button"
            to="/screen"
            class="
              group
              relative
              
              mt-20
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            دخول
          </router-link>  
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      authenticated: false,
      input: {
        username: "",
        password: "",
      },
      mockAccount: {
        username: "Admin",
        password: "123456-+",
      },
    };
  },
  mounted() {
    if(!this.authenticated) {
        this.$router.push('/');
    }
},
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ component: Dashboard });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style></style>
