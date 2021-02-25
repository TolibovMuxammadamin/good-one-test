<template>
  <div class="wrapper">
    <div class="content">
      <div class="calc">
        <div class="calc__sidebar">
          <div class="calc__detail">
            <div class="calc__detail--label">Общая сумма</div>
            <div class="calc__detail--price">100 000 000 сум</div>
          </div>
          <div class="calc__detail">
            <div class="calc__detail--label">Cумма</div>
            <div class="calc__detail--price">100 000 000 сум</div>
          </div>
          <div class="calc__detail">
            <div class="calc__detail--label">Скидка (Cумма)</div>
            <div class="calc__detail--price">100 000 000 сум</div>
          </div>

        </div>
        <div class="calc__main">
          <input type="text" class="calc__input">
          <div class="calc__btns">
            <button class="calc__btn">1</button>
            <button class="calc__btn">2</button>
            <button class="calc__btn">3</button>
            <button class="calc__btn">4</button>
            <button class="calc__btn">5</button>
            <button class="calc__btn">6</button>
            <button class="calc__btn">7</button>
            <button class="calc__btn">8</button>
            <button class="calc__btn">9</button>
            <button class="calc__btn">
              <v-icon>mdi-circle-medium</v-icon>
            </button>
            <button class="calc__btn">0</button>
            <button class="calc__btn">
              <v-icon>mdi-backspace-outline</v-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <v-btn color="light-blue darken-1" dark depressed large>Наличный</v-btn>
        <v-btn color="light-blue darken-1" dark depressed large>Карта</v-btn>
        <v-btn color="error" depressed large>Комбинация</v-btn>
        <v-btn color="light-blue darken-1" dark depressed large>Валюта</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Order"
}
</script>

<style scoped lang="scss">
  .wrapper {
    padding-top: 40px;
    padding-left: 60px;
  }

  .content {
    width: 800px;
    //height: 600px;
  }

  .calc {
    display: flex;
    width: 100%;
    margin-bottom: 10px;

    &__sidebar {
      padding: 12px;
      width: 30%;
      margin-right: 18px;
      background-color: #fff;
    }

    &__main {
      width: 70%;
      height: 100%;
    }

    &__detail {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      &--label {
        color: grey;
        font-size: 18px;
      }

      &--price {
        color: #000;
        font-weight: bold;
      }
    }
    &__input {
      width: 100%;
      text-align: right;
      background-color: #fff;
      padding: 0 14px;
      height: 70px;
      font-size: 24px;

      &:focus {
        outline: none;
      }
    }

    &__btns {
      display: flex;
      flex-wrap: wrap;
    }

    &__btn {
      width: 33.333333%;
      height: 70px;
      font-size: 18px;
      font-weight: bold;
      color: blue;
      background-color: #E0E0E0;
      border-top: 2px solid #BDBDBD;
      border-right: 2px solid #BDBDBD;

      &:focus {
        outline: none;
      }
      i {
        color: blue;
      }
    }
  }

  .buttons {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    button {
      width: calc((100% - 30px) / 4);

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
</style>