<template>
   <div class="not-foundpage">
       <div class="alert-area">
          <div class="logo text-center bg-dark py-3">
              <img src="../assets/logo/dinopark.png" alt="dinoparkLogo">
          </div>
          <div class="title text-white p-3 text-center">
              <h1 >404</h1>
              <p class="fs-4">噢~ 您造訪的園區施工中</p>
              <p class="fs-4">快回首頁看看吧</p>
              <router-link to="/dino-park/home"
                           class="btn btn-success mb-3 fw-bold fs-5">
                  回首頁
              </router-link>
          </div>
       </div>
   </div>
</template>
