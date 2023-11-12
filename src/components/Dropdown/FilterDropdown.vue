<template>
  <div class="collections-header__dropdown">
    <div v-for="(item, index) in dropdownItems" :key="index" class="collections-header__dropdown-item">
      <div type="button" class="collections-header__dropdown-toggle">
        {{ item.title }}
      </div>
      <ul class="collections-header__dropdown-list">
        <li v-for="(option, index) in item.options" :key="index" class="collections-header__dropdown-checkbox">
          <input type="checkbox" :name="item.name" />
          <label :for="type">{{ type }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dropdownItems: [
        {
          title: 'Classification',
          name: 'classification',
          type: ['']
        },
        {
          title: 'Department',
          name: 'department',
          type: ['']
        },

      ]
    };
  }
};
</script>