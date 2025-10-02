<template>
  <section class="category">
    <h2>Category</h2>
    <div id="filter-div" class="filter">
      <label v-for="category in categories" :key="category.value" class="filter-btn">
        <input 
          type="checkbox" 
          :value="category.value" 
          class="filter-checkbox" 
          :checked="selectedCategories.includes(category.value)"
          @change="toggleCategory(category.value)"
        />
        <span>{{ category.label }}</span>
      </label>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { selectedCategories, toggleCategory } from "@/stores/categoryStore.js";

export default {
  name: "Category",
  setup() {
    const categories = computed(() => [
      { value: "t-shirt", label: "T-shirt" },
      { value: "hoodie", label: "Hoodie" },
      { value: "tank-top", label: "Tank-top" },
      { value: "pants", label: "Pants" },
      { value: "shorts", label: "Shorts" },
      { value: "cap", label: "Caps" },
    ]);

    return {
      categories,
      selectedCategories,
      toggleCategory,
    };
  },
  mounted() {
        const checkboxes = document.querySelectorAll('.filter-checkbox');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const label = event.target.closest('.filter-btn');
    if (event.target.checked) {
      label.classList.add('selected');
    } else {
      label.classList.remove('selected');
    }
      });
    });
  },
};
</script>

  
  <style>
  .category {
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    left: 0;
  }
  
  .home__view .filter {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  
  .home__view .filter-btn {
    background-color: black;
    padding: 14px 18px;
    font-size: 16px;
    color: rgba(189, 189, 189, 0.85);
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid rgb(61, 53, 62);
    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.5em;
    transition: 0s;


    /**TESZT *
    box-shadow: 0px 0px 10px 1px rgba(74, 68, 85, 0.188);
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 15px;
    margin-bottom: 1rem;
    /**TESZT */
  }
  .home__view .filter-btn:hover {
    color: rgb(255, 255, 255);
    text-shadow: 0px 5px 10px rgb(19, 13, 19);
    border-color: var(--clr-hover);

   /**TESZT */
    box-shadow: 0px 0px 10px 1px var(--clr-hover);
    /**TESZT */
  }
  .home__view .filter-btn:focus {
    border-color: 2px solid var(--clr-hover);
  }
  
  .home__view .filter-btn:active {
    background-color: gray;
    border-color: rgb(255, 255, 255);
  }
  
  .home__view .filter-checkbox {
    display: none;
  }
  
  .home__view .filter-checkbox:checked + span {
    color: var(--clr-primary);
  }

  .home__view .filter-btn span {
    transform: scale(1, 0.86);
    font-weight: 400;
  }

  .home__view .selected {
    border: 2px solid var(--clr-hover);
  }

  .products__view .filter {
    margin-top: 2em;
    transform: scale(1, 0.9);
}

.products__view .filter-btn {
    background-color: black;
    padding: 18px 20px;
    font-size: 14px;
    color: var(--clr-secondary);
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    border-top: 2px solid rgb(61, 53, 62);
    border-bottom: 2px solid rgb(61, 53, 62);
    border-left: none;
    border-right: none;
    user-select: none;
}
.products__view .filter-btn:hover {
    color: rgb(255, 255, 255);
    text-shadow: 0px 5px 10px rgb(19, 13, 19);
    border: 2px solid var(--clr-hover);
    border-left: none;
    border-right: none;
    transition: 0.4s;
}
.products__view .filter-btn:active {
    background-color: gray;
    border: 2px solid gold;
    border-left: none;
    border-right: none;
    transition: 0s;
}
.products__view .filter-btn:first-child {
    border-radius: 5px 0px 0px 5px;
}
.products__view .filter-btn:last-child {
    border-radius: 0px 5px 5px 0px;
}

.products__view .filter label input {
    display: none;
}

  @media (max-width: 768px) {

    .products__view .category h2 {
      font-size: 1.4rem;
    }
    .products__view .filter {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5em;
      margin-top: 0;
    }

    .products__view .filter-btn {
        font-size: 12px;
        padding: 14px 16px;
    }
    .products__view .filter-btn:first-child {
        border-radius: 0px;
    }
    .products__view .filter-btn:last-child {
        border-radius: 0px;
    }
  
    .products__view .filter-btn {
      flex: 1 1 calc(50% - 0.5em);
      max-width: calc(50% - 0.5em);
    }
  
    .products__view .filter-btn span {
      font-size: 14px;
    }
  }
  </style>