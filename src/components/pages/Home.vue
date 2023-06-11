
<template>
    <main >
        <article>
        <section class="hero" id="home" aria-label="home">
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">Hello Everyone!</p>

            <h1 class="headline headline-1 section-title">
              I’m <span class="span">Chiva Dev</span>
            </h1>

            <p class="hero-text">
              I use animation as a third dimension by which to simplify experiences and kuiding thro each and every
              interaction. I’m not adding motion just to spruce things up, but doing it in ways that. 
            </p>

            <div class="input-wrapper">

              <input type="email" name="email_address" placeholder="Type your email address" required
                class="input-field" autocomplete="off">

              <button class="btn btn-primary">
                <span class="span">Subscribe</span>

                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </button>

            </div>

          </div>

          <div class="hero-banner">

            <img src="/src/assets/images/3d-banner.png" width="327" height="490" alt="Wren Clark" class="w-100">

            <img src="/src/assets/images/pattern-2.svg" width="27" height="26" alt="shape" class="shape shape-1">

            <img src="/src/assets/images/pattern-3.svg" width="27" height="26" alt="shape" class="shape shape-2">

          </div>

          <img src="/src/assets/images/shadow-1.svg" width="500" height="800" alt="" class="hero-bg hero-bg-1">

          <img src="/src/assets/images/shadow-2.svg" width="500" height="500" alt="" class="hero-bg hero-bg-2">

        </div>
      </section>

       <!-- 
        - #Service Section
      -->

      <section class="service tags">
        <div class="container">
          <ul class="grid-list">
            <li>
              <div class="card tag-btn">
                <i class="fa-solid fa-pen"></i>
                <p>Graphic Design</p>
              </div>
            </li>
            <li>
              <div class="card tag-btn">
                <i class="fa-solid fa-bullhorn"></i>
                <p>Digital Marketing</p>
              </div>
            </li>
            <li>
              <div class="card tag-btn">
                <i class="fa-solid fa-code"></i>
                <p>Web Design</p>
              </div>
            </li>
            <li>
              <div class="card tag-btn">
                <i class="fa-solid fa-magnifying-glass-location"></i>
                <p>SEO</p>
              </div>
            </li>
          </ul>
        </div>
      </section>


        <!-- 
        - #FEATURED POST
      -->

      <section class="section feature" aria-label="feature" id="featured">
        <div class="container">

          <h2 class="headline headline-2 section-title">
            <span class="span">Editor's picked</span>
          </h2>

          <p class="section-text">
            Featured and highly rated articles
          </p>

          <ul class="feature-list"  >

            <li v-for="(post, index) in posts" :key="index">
              <div class="card feature-card">

                <figure class="card-banner img-holder" style="--width: 1602; --height: 903;">
                  <img :src="post.featured_media_src_url" width="1602" height="903" loading="lazy"
                    alt="Self-observation is the first step of inner unfolding" class="img-cover">
                </figure>

                <div class="card-content">

                  <div class="card-wrapper">
                    <div class="card-tag" >
                     
                      <a v-for="(cat,index) in post._embedded['wp:term'][index]" :key="index" :href="cat.link " class="span hover-2" target="_blank"># {{ cat.name }}</a>
                    </div>

                   
                  </div>

                  <h3 class="headline headline-3">
                    <a v-bind:href="post.link" class="card-title hover-2" target="_blank">
                     {{ post.title.rendered }}
                    </a>
                  </h3>

                  <div class="card-wrapper">

                    <div class="profile-card">
                      <img :src="post._embedded.author[0].avatar_urls['48']" width="48" height="48" alt="{{post.title.rendered}}"
                        class="profile-banner">
                        
                      <div>
                        <p class="card-title">{{ post._embedded.author[0].name }}</p>

                        <p class="card-subtitle">{{dateTime(post.date)}}</p>
                      </div>
                    </div>

                    <a v-bind:href="post.link" class="card-btn" target="_blank">Read more</a>

                  </div>

                </div>

              </div>
            </li>

          </ul>

          <a href="https://css-tricks.com/" class="btn btn-secondary" target="_blank">
            <span class="span">Show More Posts</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>

        </div>

        <img src="/src/assets/images/shadow-3.svg" width="500" height="1500" loading="lazy" alt="" class="feature-bg">

      </section>





     


    </article>
    </main>
</template>
<script>

import axios from 'axios'
import moment from 'moment'


export default {

    data(){
      return{
        postsUrl: "https://css-tricks.com/wp-json/wp/v2/posts?_embed&per_page=5&author=",
        
        queryOptions: {        
        per_page: 5, // Only retrieve the 3 most recent blog posts.
        page: 1, // Current page of the collection.
        _embed: true, //Response should include embedded resources.
        },
        posts: [],
        cats: [],

      };
    },
    methods:{
    getRecentBlogPosts(){
    axios
    .get(this.postsUrl, {params: this.queryOptions})
    .then((response) => {
        this.posts = response.data;
        console.log("post retrived !");
        console.log(this.posts)

      })
      .catch(error => {
        console.log(error);
      });
  },
  dateTime(value) {
      return moment(value).format(" MMMM Do YYYY");
    },
},
mounted(){
  this.getRecentBlogPosts();
}
};

</script>
<style scoped>

</style>