<template>
  <main class="key-features-clinic">
    <img src="@/assets/advanced-feature-2.jpg" alt="advance-feature" />
    <section>
      <h1>Key features of @Clinic</h1>

      <ul>
        <li>
          <i class="pi pi-desktop"></i>
          Accessibility to your documents from anywhere at the click.
        </li>
        <li>
          <i class="pi pi-desktop"></i>
          Digitize your workspace and scale up productivity.
        </li>
        <li>
          <i class="pi pi-desktop"></i>

          Expedite the assessments with automated scores & interpretation.
        </li>
        <li>
          <i class="pi pi-desktop"></i>
          Efficiently track the appointment records which helps you to schedule
          and manage time productively.
        </li>
        <li>
          <i class="pi pi-desktop"></i>
          Send a reports and reminder message.
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.key-features-clinic {
  display: flex;
  justify-content: center;
  gap: 2rem;
  text-align: start;
  font-size: 18px;
  padding: 2rem;
}
.key-features-clinic section {
  width: 40%;
}
.key-features-clinic ul {
  padding: 0;
}
.key-features-clinic ul li {
  list-style: none;
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
