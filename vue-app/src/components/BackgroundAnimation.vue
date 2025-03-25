<template>
    <div class="background-animation">
      <span class="saint" v-for="n in 10" :key="n"></span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundAnimation'
  }
  </script>
  
  <style scoped>
.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
    z-index: 0;
  }
  
  .saint {
    position: fixed;
    top: -120px;
    height: 50px;
    width: 50px;
    background-image: url('@/assets/saints-logo.ico');
    background-size: cover;
    background-position: center;
    animation: background-animation 10s linear infinite;
  }
  
  .saint:nth-child(1) { left: 60px; animation-delay: 0.6s; }
  .saint:nth-child(2) { left: 60%; animation-delay: 3s; width: 60px; height: 60px; }
  .saint:nth-child(3) { left: 20%; animation-delay: 2s; }
  .saint:nth-child(4) { left: 30%; animation-delay: 5s; width: 80px; height: 80px; }
  .saint:nth-child(5) { left: 40%; animation-delay: 1s; }
  .saint:nth-child(6) { left: 50%; animation-delay: 7s; }
  .saint:nth-child(7) { left: 60%; animation-delay: 6s; width: 100px; height: 100px; }
  .saint:nth-child(8) { left: 70%; animation-delay: 8s; }
  .saint:nth-child(9) { left: 10%; animation-delay: 10s; width: 90px; height: 90px; }
  .saint:nth-child(10) { left: 90%; animation-delay: 4s; }
  
  @keyframes background-animation {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      filter: blur(0);
    }
    100% {
      transform: translateY(1000px) rotate(720deg);
      opacity: 0;
      filter: blur(4px);
    }
  }
  </style>
  