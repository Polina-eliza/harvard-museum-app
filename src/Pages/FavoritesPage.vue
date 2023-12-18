<template>
  <div class="container-midi dark-bg favorites">
    <div class="favorites-saved">
      <h3 class="favorites-saved__header">Saved Exhibitions</h3>
      <table class="favorites-saved__table">
        <thead>
          <tr class="favorites-saved__table-header-row">
            <th class="favorites-saved__table-header">Exhibition Name</th>
            <th class="favorites-saved__table-header">Exhibition Date</th>
            <th class="favorites-saved__table-header">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr class="favorites-saved__table-row">
            <td class="favorites-saved__table-data">Ancient Art Exhibition</td>
            <td class="favorites-saved__table-data">12.09.2010</td>
            <td class="favorites-saved__table-data">
              <span class="mdi mdi-plus delete-icon"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/variables";

.favorites {
  color: $font-color-body-white;
  min-height: 900px;

  &-saved {
    &__header {
      padding-top: 100px;
      text-align: center;
    }

    &__table {
      margin-top: 40px;
      width: 100%;
      border-collapse: collapse;

      &-header,
      &-data {
        text-align: center;
        width: 33.3333%;
      }

      &-header-row {
        color: $color-background-yellow;
        th {
          padding: 15px 0;
        }
      }

      &-row {
        td {
          padding: 15px 0;
        }
      }
    }
  }
}

.delete-icon {
  display: inline-block;
  transform: rotate(45deg);
  font-size: 35px;
  cursor: pointer;
}
</style>
