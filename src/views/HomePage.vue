<template>
  <main>
    <main class="home-page">
      <article>
        <h1>Welcome to @Clinic</h1>
        <h3>Your clinic's complete practice management solution</h3>
        <p>
          <Button label="Clinician Login" severity="success" rounded />
          <Button label="Patient Login" severity="info" rounded />
        </p>
      </article>
      <figure>
        <img src="@/assets/product-screen-1.png" alt="" />
        <img src="@/assets/product-screen-2.png" alt="" />
        <img src="@/assets/product-screen-3.png" alt="" />
      </figure>
    </main>
    <AboutPageVue />
    <ProductFeaturesVue />
    <AboutClinicApplicationVue />
    <KeyFeatureOfClinicVue />
    <KBCinc />
    <BenefitsOfClinicVue />
    <MoreBenefitsVue/>

  </main>
</template>

<script setup>
import AboutPageVue from "./AboutPage.vue";
import ProductFeaturesVue from "./ProductFeatures.vue";
import AboutClinicApplicationVue from "./AboutClinicApplication.vue";
import KeyFeatureOfClinicVue from "./KeyFeatureOfClinic.vue";
import KBCinc from "./KBCinc.vue";
import BenefitsOfClinicVue from "./BenefitsOfClinic.vue";
import MoreBenefitsVue from "./MoreBenefits.vue";
</script>

<style scoped>
.home-page {
  width: 100%;
  height: 100vh;
  padding: 1rem;
  padding-bottom: 0;
  background: linear-gradient(
      45deg,
      rgba(155, 205, 244, 0.8),
      rgba(29, 200, 205, 0.8)
    ),
    url("@/assets/hero-bg1.jpg") center top no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  overflow: hidden;
  overflow: hidden;
}
.home-page article h1 {
  font-size: 50px;
  font-weight: normal;
  color: white;
}
.home-page article h3 {
  font-size: 35px;
  font-weight: normal;
  color: white;
}
.home-page article p {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.home-page article p button {
  width: 10rem;
  padding: 10px 15px;
}
.home-page figure {
  display: flex;
  justify-content: center;
  height: 35rem;
  margin: 0;
  margin-bottom: -10rem;
}
.home-page figure img {
  width: 22rem;
  height: auto;
  z-index: 3;
}
.home-page figure img:first-child {
  margin-top: 150px;
  margin-right: -50px;
  z-index: 1;
}

.home-page figure img:nth-child(2) {
  margin-top: 70px;
  z-index: 2;
  margin-right: -50px;
}
</style>
