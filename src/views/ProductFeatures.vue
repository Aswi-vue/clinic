<template>
  <main class="product-features">
    <img src="@/assets/product-features.png" alt="product-features" />

    <section>
      <h1 class="header-blue">Product Features</h1>

      <aside>
        <article>
          <i class="pi pi-sun" style="color: slateblue"></i>
          <p>Appointment Scheduler</p>
        </article>
        <article>
          <i class="pi pi-receipt"></i>
          <p>Billing and Invoicing</p>
        </article>
        <article>
          <i class="pi pi-briefcase"></i>
          <p>Client Record Manager</p>
        </article>
        <article>
          <i class="pi pi-list-check"></i>
          <p>Clinical Assessment Template</p>
        </article>
        <article>
          <i class="pi pi-file"></i>
          <p>Client Feedback and Reports</p>
        </article>
        <article>
          <i class="pi pi-sun"></i>
          <p>Progress Monitor</p>
        </article>
        <article>
          <i class="pi pi-file"></i>
          <p>Therapy Planning</p>
        </article>
        <article>
          <i class="pi pi-file"></i>
          <p>Referral Manager</p>
        </article>
      </aside>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-features {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.product-features > img {
  padding: 2rem 0;
}
.product-features section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: normal;
  font-size: 25px;
  width: 60%;
}
.product-features section aside {
  display: grid;
  grid-template-columns: auto auto;
}
.product-features section article i {
  font-size: 30px;
  color: slateblue;
}
</style>
