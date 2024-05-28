<template>
  <main class="more-benefits">
    <h1>More Benefits</h1>

    <em>What are the benefits Psychologists can get</em>

    <section>
      <article>
        <span class="pi pi-list-check"></span>
        <div>
          <h3>Dedicated Proforma</h3>
          <p>
            Dedicated performa based on CIP or NIMHANS to document & organize
            client details.
          </p>
        </div>
      </article>
      <article>
        <span class="pi pi-list-check"></span>
        <div>
          <h3>Dedicated Proforma</h3>
          <p>
            Dedicated performa based on CIP or NIMHANS to document & organize
            client details.
          </p>
        </div>
      </article>
      <article>
        <span class="pi pi-list-check"></span>
        <div>
          <h3>Dedicated Proforma</h3>
          <p>
            Dedicated performa based on CIP or NIMHANS to document & organize
            client details.
          </p>
        </div>
      </article>
      <article>
        <span class="pi pi-list-check"></span>
        <div>
          <h3>Dedicated Proforma</h3>
          <p>
            Dedicated performa based on CIP or NIMHANS to document & organize
            client details.
          </p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.more-benefits {
}
*{
    border: 1px solid red;
}
.more-benefits section {
    width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}
.more-benefits section article {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 80%;
  height: 10rem;
  padding: 1rem;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
}
.more-benefits section article div {
  width: 70%;
}
.more-benefits section article span{
    font-size: 40px;
    color: slateblue;
}
</style>
