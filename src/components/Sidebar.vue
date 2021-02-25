<template>
  <div class="sidebar">
    <div>
      <div class="tabs">
        <div class="tab">
          <v-icon class="tab__icon">mdi-cart</v-icon>
          <div class="tab__text">Корзинка</div>
        </div>
        <div class="tab active">
          <v-icon class="tab__icon">mdi-clipboard-text-outline</v-icon>
          <div class="tab__text">Заявки</div>
        </div>
      </div>
      <v-simple-table>
        <thead>
        <tr class="grey lighten-4">
          <th>Наименование</th>
          <th>Кол</th>
          <th>Цена</th>
          <th>Сумма</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="n in 2">
          <td>Bill Gates</td>
          <td>2</td>
          <td>100 000 сум</td>
          <td>400 000 сум</td>
        </tr>
        <tr class="blue white--text">
          <td>Bill Gates</td>
          <td>2</td>
          <td>100 000 сум</td>
          <td>400 000 сум</td>
        </tr>
        </tbody>
      </v-simple-table>
      <div class="actions-wrapper">
        <v-btn fab depressed small color="primary" class="mr-3">
          <v-icon small>mdi-lead-pencil</v-icon>
        </v-btn>
        <v-btn fab depressed small color="success" class="mr-3">
          <v-icon small>mdi-tag-outline</v-icon>
        </v-btn>
        <div class="actions-input">
          <button>
            <v-icon>mdi-minus</v-icon>
          </button>
          <input type="text">
          <button>
            <v-icon>mdi-plus</v-icon>
          </button>
        </div>
        <v-btn fab depressed small color="error" class="mr-3">
          <v-icon small>mdi-trash-can-outline</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="pa-2">
      <div class="pb-4">
        <div class="detail detail-main">
          <div class="detail__label">Общая сумма</div>
          <div class="detail__value">100 000 000 сумма</div>
        </div>
        <div class="detail">
          <div class="detail__label">Скидка (Сумм)</div>
          <div class="detail__value">100 000 000 сумма</div>
        </div>
        <div class="detail">
          <div class="detail__label">Элементы</div>
          <div class="detail__value">100 000 000 сумма</div>
        </div>
        <div class="detail">
          <div class="detail__label">Клиент</div>
          <div class="detail__value">Азимов А</div>
        </div>
      </div>
      <div class="d-flex align-center mb-2">
        <button class="btn-sidebar">
          <v-icon>mdi-account-outline</v-icon>
          <span>Клиент</span>
        </button>
        <button class="btn-sidebar">
          <v-icon>mdi-printer</v-icon>
          <span>Печать</span>
        </button>
      </div>
      <div class="d-flex align-center justify-space-around">
        <v-btn large color="error">
          Очистить
        </v-btn>
        <v-btn large color="primary">
          Отсрочка
        </v-btn>
        <v-btn large color="success">
          Оплатить
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped lang="scss">
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .tabs {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #E0E0E0;
    width: 50%;
    height: 67px;
    color: #757575;
    border-bottom: 3px solid #BBDEFB;

    &__icon {
      color: #757575;
    }
  }

  .tab.active {
    background-color: #eee;
  }

  .actions-wrapper {
    display: flex;
    //align-items: center;
    padding: 8px 16px;
    background-color: #2196F3;
    border-top: thin solid rgba(255, 255, 255, 0.4)
  }

  .actions-input {
    display: flex;
    align-items: center;
    margin-right: 12px;
    border: 1px solid transparent;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      height: 40px;
      background-color: #eee;
      transition: all 0.2s;
      &:first-child {
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      }

      &:last-child {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:focus {
        outline: none;
      }


      &:hover {
        background-color: #fff;
      }
    }
    input {
      width: 100%;
      height: 100%;
      background-color: #fff;
      text-align: center;
      padding: 0 8px;

      &:focus {
        outline: none;
      }
    }
  }

  .detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    &-main {
      font-size: 18px;
    }

    &__label {
      color: grey;
    }

    &__value {
      color: #000;
      font-weight: bold;
    }
  }
  .btn-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 0.8;
    width: 50%;
    padding: 12px 0;
    background-color: #E0E0E0;
    border: 2px solid #BDBDBD;
    border-radius: 6px;
    color: grey;
    transition: all 0.2s;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      outline: none;
      border-color: transparent;
      background-color: #000;
      color: #fff;

      i {
        color: #fff;
      }
    }

    &:focus {
      outline: none;
    }
  }
</style>