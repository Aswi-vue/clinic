<template>
  <main class="key-features-clinic">
    <img src="@/assets/advanced-feature-2.jpg" alt="advance-feature" />
    <section>
      <h1>Key features of @Clinic</h1>

      <ul>
        <li>
          <img src="@/assets/window-dock.svg" alt="" /> Accessibility to your
          documents from anywhere at the click.
        </li>
        <li>
          <img src="@/assets/mouse2.svg" alt="" /> Digitize your workspace and
          scale up productivity.
        </li>
        <li>
          <img src="@/assets/bar-chart.svg" alt="" />
          Expedite the assessments with automated scores & interpretation.
        </li>
        <li>
          <img src="@/assets/calendar-week-fill.svg" alt="" /> Efficiently track
          the appointment records which helps you to schedule and manage time
          productively.
        </li>
        <li>
        <img src="@/assets/stickies-fill.svg" alt="" />
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
.key-features-clinic ul li img {
  width: 35px;
}
</style>
