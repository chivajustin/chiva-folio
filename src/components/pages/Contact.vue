<template>
   <main>
      <section class="contact">
         <div class="container">
            <h2 class="headline headline-2 section-title">
               <span class="span">Contact with Us</span>
            </h2>

            <p class="section-text">
               We would love to response your queries and help you succesed.
               Feel free to got touch with us.
            </p>
            
            <div class="contact-container">
            <form class="contact-form footer" action="" >
               <p class="section-text">
                  Sent your request
               </p>
               <div class="input-wrapper flex">
                  <input type="name" name="user_name" placeholder="Name" class="input-field" autocomplete="off">
                  <input type="phone" name="phone" placeholder="Phone" class="input-field" autocomplete="off">
               </div>
               <div class="input-wrapper flex" >
                  <input type="email" name="email_address" placeholder="Email Adress" class="input-field" autocomplete="off">
                  <input type="subject" name="subject" placeholder="Subject" class="input-field" autocomplete="off">
               </div>
               <div class="input-wrapper" >
                  <input type="message" name="message" placeholder="Your Message" class="input-field message" autocomplete="off">
               </div>
               <a href="#" class="btn btn-primary"><span class="span">SEND</span></a>
            </form>

            <div class="contact-info">
               <p class="section-text">
                  Reach Us
               </p>
               <p>Email: chivakhoeun@gmail.com</p>
               <p>Phone: +855 086 600 702</p>
               <p>Address: Phnom Penh</p>
            </div>
         </div>
         </div>
      </section>
   </main>
</template>
<style>
section.contact{
   padding-block-start:var(--section-padding);
}
.contact-container{
   /* display: flex; */
   padding-block: 2rem !important;
}
.contact-info{
   border-radius: var(--radius-6);
   padding-inline: 3rem;
    background-color: var(--text-alice-blue);
    padding-block: 2rem 10rem;
}
.contact-info p{
   line-height: 2.5;
}
.message{
   padding-bottom: 60px  !important;
}
</style>

