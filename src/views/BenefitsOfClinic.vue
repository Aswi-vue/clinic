<template>
  <main class="benefits-of-clinic">
    <h1>Benefits of @Clinic</h1>
    <h3>
      @Clinic is a comprehensive practice management solution designed for
      mental health professionals.
    </h3>
    <h4>It is designed to</h4>
    <section>
      <ul>
        <li>
          Provide patient centered care with improved efficacy and efficiency.
        </li>
        <li>
          Provide collaborative treatment planning with patients and others when
          appropriate.
        </li>
        <li>Monitor the treatment process and clinical outcomes routinely.</li>
        <li>
          Support adaptation of clinical approach to patient characteristics and
          culture.
        </li>
        <li>Promote overall patient health, functioning, and well-being.</li>
      </ul>

      <ul>
        <li>
          It helps clinicians take care of and treat their patients from
          anywhere.
        </li>
        <li>Time - Saving</li>
        <li>Cost Effective</li>
        <li>Easy referrals for clinicians</li>
        <li>Application is available on any Android or iOS mobile device</li>
        <li>Features are easy to use.</li>
      </ul>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.benefits-of-clinic {
  background-image: url("@/assets/call-to-action-bg.jpg");
  width: 100%;
  height: 80vh;
  background-attachment: fixed;
  background-size: 100% 110%;
  color: white;
  text-align: start;
  padding: 4rem 6rem;
  font-size: 20px;
}
.benefits-of-clinic h1 {
  font-weight: normal;
}
.benefits-of-clinic h3 {
  font-weight: normal;
  margin-bottom: 2rem;
}
.benefits-of-clinic section{
    display: flex;
    font-size: 18px;
    justify-content: space-evenly;
    gap: 2rem;
}
.benefits-of-clinic ul {
  padding: 0;
}
.benefits-of-clinic ul li {
  list-style: disc;
  margin: 10px 0;
}
</style>
