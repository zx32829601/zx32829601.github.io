<template>
  <aside :class="`${is_expanded&&'is-expanded'}`">
    <div class="logo">
      <img src="../assets/logo.png" alt="friedchicken">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>

      <router-link class="button" to="/shopping">
        <span class="material-icons">storefront</span>
        <span class="text">Shopping</span>
      </router-link>

      

      <router-link class="button" to="/stock">
        <span class="material-icons">inventory</span>
        <span class="text">Stock</span>
      </router-link>

      <router-link class="button" to="/restock">
        <span class="material-symbols-outlined">order_approve</span>
        <span class="text">Restock</span>
      </router-link>

      <router-link class="button" to="/contact">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>

    </div>

    
    <div class="flex"></div>
    <div class="menu">
      <router-link class="button" to="/about">
        <span class="material-icons">visibility</span>
        <span class="text">About</span>
      </router-link>

      <router-link class="button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">settings</span>
      </router-link>

      
    </div>
    
  </aside>
</template>

<script setup>
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem('is_expanded')==='true')
const ToggleMenu=()=>{
  is_expanded.value=!is_expanded.value

  localStorage.setItem('is_expanded',is_expanded.value)
  
}
</script>

<style lang="scss" scoped>
aside{
  
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  background-color: var(--secondbackground);
  color: var(--light);
  transition: 0.2s ease-out;

  .logo{
    margin-bottom: 1rem;
    margin-left: -0.5rem;
    img{
      width: 3rem;
      
    }
  }
  .menu-toggle-wrap{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top:0;
    transition: 0.2s ease-out;
    
    .menu-toggle{
      transition: 0.2s ease-out;
      .material-icons, .material-symbols-outlined{
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover{
        .material-icons, .material-symbols-outlined{
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }
   h3, .button .text{
    opacity: 0;
    transition: 0.3s ease-out;
  }
  h3{
    
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    text-align: center;
  }
  .menu{
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons, .material-symbols-outlined{
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text{
        color: var(--light);
        transition: 0.2s ease-out;
        margin: 1rem;
    }

    &:hover, &.router-link-exact-active {
      background-color: var(--dark-alt);

      .material-icons, .text{
        color: var(--primary);
      }

    }

    &.router-link-exact-active{
      border-right: 5px solid var(--primary);
    }

  }
}
  &.is-expanded{
    width: var(--sidebar-width);
    
    .menu-toggle-wrap{
      top:-3rem;
      .menu-toggle{
        transform: rotate(-180deg);
      }
    }
    h3, .button .text{
    opacity: 1;
    
    
    }
    
    .button{
        .material-icons, .material-symbols-outlined{
          margin-right: 1rem;
        }
    }

  @media (max-width: 768px) {
    position: fixed ; 
    z-index: 99;
}
}
.flex{
  flex: 1 1 0;
}
}
</style>