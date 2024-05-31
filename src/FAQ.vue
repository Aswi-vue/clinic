<template>
  <main class="main-faq">
    <h1 class="header-blue">Frequently Asked Questions</h1>
    <section>
      <Accordion :activeIndex="0">
        <AccordionTab
          header="Who owns all the data I enter and what do you do with it?"
        >
          <p class="m-0">
            While we own the intellectual rights to our software, you own all
            your data and can request it at anytime. We will never sell, or use
            your data in any way beyond helping you with client care. We may use
            your email, phone and address to contact you to better deliver our
            services.
          </p>
        </AccordionTab>
        <AccordionTab
          header="Who owns all the data I enter and what do you do with it?"
        >
          <p class="m-0">
            While we own the intellectual rights to our software, you own all
            your data and can request it at anytime. We will never sell, or use
            your data in any way beyond helping you with client care. We may use
            your email, phone and address to contact you to better deliver our
            services.
          </p>
        </AccordionTab>
        <AccordionTab
          header="Who owns all the data I enter and what do you do with it?"
        >
          <p class="m-0">
            While we own the intellectual rights to our software, you own all
            your data and can request it at anytime. We will never sell, or use
            your data in any way beyond helping you with client care. We may use
            your email, phone and address to contact you to better deliver our
            services.
          </p>
        </AccordionTab>
        <AccordionTab
          header="Who owns all the data I enter and what do you do with it?"
        >
          <p class="m-0">
            While we own the intellectual rights to our software, you own all
            your data and can request it at anytime. We will never sell, or use
            your data in any way beyond helping you with client care. We may use
            your email, phone and address to contact you to better deliver our
            services.
          </p>
        </AccordionTab>
      </Accordion>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss">
.main-faq {
  text-align: start;
  padding: 2rem 5rem;
}
.main-faq section h1,
.main-faq section p {
  padding: 0;
  margin: 0;
}
.main-faq>h1{
    margin-bottom: 30px;
}
.main-faq .p-accordion-header-text {
//   border: 1px solid red;
  font-size: 25px;
  margin:6px;
}
.main-faq .p-accordion .p-accordion-tab {
  box-shadow: none;
  border-bottom: 1px solid #eee;
  padding: 0;
  margin-bottom: 1rem;
  
}
.main-faq .p-accordion .p-accordion-header .p-accordion-header-link {
  padding: 1rem;

}
.main-faq .p-component{
    font-size: 20px;
}
</style>
