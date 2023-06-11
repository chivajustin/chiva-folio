<template>
     <header :class="{'srolled-nav': scrolledNav }">
      <div class="container">
        <nav>
        <div class="branding">
          <a href="/"><img src="../assets/images/full-name-logo.png" alt="chiva"></a>
        </div>
        
        <ul v-show="!mobile" class="navigation">
          <li>
            <router-link active-class="active" to="/">Home</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/about">About Us</router-link>
          </li>
          
        </ul>
        <router-link class="btn btn-primary" to="/contact">Contact Us</router-link>
        <div class="icon">
            <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active': mobileNav}"></i>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
              <div class="branding">
                <a href="/"><img src="../assets/images/full-name-logo.png" alt="chiva"></a>
              </div>
                <li>
                    <router-link active-class="active" to="/">Home</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/about">About Us</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/contact">Contact Us</router-link>
                </li>
            </ul>
        </transition>
        </nav>
      </div>
    </header>
</template>
<script>
export default{
    name: "navigation",
    data(){
        return {
          scrolledNav: null,
          mobile: null,
          mobileNav: null,
          windowWidth: null,

        };
    },
    created(){
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
    },
    mounted(){
      window.addEventListener("scroll", this.updateScroll);
    },
    methods:{
      toggleMobileNav(){
        this.mobileNav = !this.mobileNav;
      },
      updateScroll(){
        const scrollPosition = window.scrollY;
        if(scrollPosition > 50){
          this.scrolledNav = true;
          return;
        }
          this.scrolledNav = false;

      },
      checkScreen(){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 750){
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      },
    },
};
</script>
<style>
header .btn {
  display: none;
}
header{
    height: 80px;
}
header .container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    z-index: 99;
    transition: 0.5s ease all;
    color: #fff;
}
.branding {
    margin-top: 2rem;
}
@media (min-width: 1140px) {
  header .container nav{
    padding-block: 2rem;
    max-width: 1140px;
    position: relative;
    margin-inline: auto;
    padding-inline: auto ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s ease all;
}
  header .btn{
    display: block !important;
  }
  
}

ul.navigation{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
}
ul.navigation li{
    margin-inline: 1rem;
    padding: 1rem;
}
.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}
.icon i{
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}
.icon-active{
  transform: rotate(180deg);
}
.dropdown-nav{
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 250px;
  background-color: var(--bg-prussian-blue);
  top: 0;
  left: 0;
  padding: 2rem;
}
.dropdown-nav li{
  margin-left: 0;
  padding-block: 1rem;
}
.dropdown-nav li a{
  color: var(--text-white);
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-from{
  transform: translateX(-250px);
}
.mobile-nav-enter-to,
.mobile-nav-enter-to{
  transform: translateX(0);
}
.srolled-nav .branding{
  margin-block: 0;
}
.srolled-nav nav{
  padding-block: 1rem !important;
  padding-inline: 2rem;
  margin-block: 1rem;
  background-color: var(--bg-prussian-blue);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  border-radius: var(--radius-6);
  border: 1px solid var(--bg-carolina-blue);
}
</style>