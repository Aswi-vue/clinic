<template>
  <main class="about-page">
    <h1 class="header-blue">ABOUT US</h1>

    <section>
      <img src="@/assets/about-img.jpg" alt="" />
      <aside>
        <h1>
          @Clinic is a comprehensive practice management solution designed for
          mental health professionals.
        </h1>
        <p>It is designed to</p>
        <ul>
          <li>
            <i
              class="pi pi-check-circle"
              style="font-size: 1.5rem; color: slateblue"
            ></i>
            Deliver more effective and efficient patient-centred treatment.
          </li>
          <li>
            <i
              class="pi pi-check-circle"
              style="font-size: 1.5rem; color: slateblue"
            ></i>
            Provide cooperative treatment planning with patients and others as
            needed.
          </li>
          <li>
            <i
              class="pi pi-check-circle"
              style="font-size: 1.5rem; color: slateblue"
            ></i>
            Routinely monitor the therapy process and clinical outcomes.
          </li>
          <li>
            <i
              class="pi pi-check-circle"
              style="font-size: 1.5rem; color: slateblue"
            ></i>
            Encourage the adaptation of clinical approaches to patient features
            and culture.
          </li>
          <li>
            <i
              class="pi pi-check-circle"
              style="font-size: 1.5rem; color: slateblue"
            ></i>
            Promote overall patient well-being, functionality, and health.
          </li>
        </ul>
      </aside>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
.about-page {
  padding: 2rem;
  padding-bottom: 4rem;
  background-color: #eff5f5;
}
.about-page section {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 20px;
  padding: 10px;
}
.about-page section img {
  width: 45%;
}
.about-page section aside {
  width: 40%;
  text-align: start;
}
.about-page h1 {
  font-size: 30px;
  font-weight: normal;
}
.about-page ul {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0;
}
.about-page ul li {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
