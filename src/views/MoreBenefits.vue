<template>
  <main class="more-benefits">
    <h1 class="header-blue">{{ jsonData.headerText }}</h1>

    <em>{{ jsonData.subheaderText }}</em>

    <section>
      <article v-for="(item, index) in jsonData.benefits" :key="index">
        <img :src="getImageUrl(item.imageSrc)" alt="" />
        <div>
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.description }}
          </p>
        </div>
      </article>
    </section>
    <p class="header-blue">
      {{ jsonData.footerText }}
    </p>
  </main>
</template>

<script setup>
import { ref } from "vue";
import data from "./moreBenefits.json";
import cardChecklist from "@/assets/card-checklist.svg";
import personBoundingBox from "@/assets/person-bounding-box.svg";
import diagram from "@/assets/diagram.svg";
import grid from "@/assets/grid.svg";

const jsonData = ref(data);
const getImageUrl = (imageName) => {
  switch (imageName) {
    case "card-checklist":
      return cardChecklist;
    case "person-bounding-box":
      return personBoundingBox;
    case "diagram":
      return diagram;
    case "grid":
      return grid;
    default:
      return "";
  }
};
</script>

<style lang="scss" scoped>
.more-benefits {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eff5f5;
}
.more-benefits section {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  padding: 2rem;
  gap: 1rem;
}
.more-benefits section article {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 10rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
}
.more-benefits section article div {
  width: 70%;
}
.more-benefits section article img {
  font-size: 40px;
  color: slateblue;
  width: 100px;
}
.more-benefits > p {
  margin-top: 4rem;
  font-size: 28px;
}
</style>
