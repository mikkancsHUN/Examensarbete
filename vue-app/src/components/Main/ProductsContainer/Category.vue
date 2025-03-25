<template>
    <section class="category">
      <h2>Category</h2>
      <div id="filter-div" class="filter">
        <label for="tshirt-checkbox" class="filter-btn">
          <input type="checkbox" id="tshirt-checkbox" value="t-shirt" class="filter-checkbox" />
          <span>T-shirt</span>
        </label>
        <label for="hoodie-checkbox" class="filter-btn">
          <input type="checkbox" id="hoodie-checkbox" value="hoodie" class="filter-checkbox" />
          <span>Hoodie</span>
        </label>
        <label for="tank-top-checkbox" class="filter-btn">
          <input type="checkbox" id="tank-top-checkbox" value="tank-top" class="filter-checkbox" />
          <span>Tank-top</span>
        </label>
        <label for="pants-checkbox" class="filter-btn">
          <input type="checkbox" id="pants-checkbox" value="pants" class="filter-checkbox" />
          <span>Pants</span>
        </label>
        <label for="shorts-checkbox" class="filter-btn">
          <input type="checkbox" id="shorts-checkbox" value="shorts" class="filter-checkbox" />
          <span>Shorts</span>
        </label>
        <label for="caps-checkbox" class="filter-btn">
          <input type="checkbox" id="caps-checkbox" value="caps" class="filter-checkbox" />
          <span>Caps</span>
        </label>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Category',
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
  </style>
  