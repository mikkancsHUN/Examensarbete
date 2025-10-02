<template>
  <div class="modal">
    <div class="modal-content">
      <!-- Dekorációk -->
      <div class="decoration decoration-1">⚜</div>
      <div class="decoration decoration-2">⚜</div>
      
      <!-- Fejléc -->
      <div class="modal-header">
        <h2>PREMIUM <strong>ACCESS</strong></h2>
        <p>Exclusive benefits for Saints members</p>
      </div>
      
      <!-- Űrlap -->
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Membership ID</label>
          <input 
            type="text" 
            id="username" 
            class="form-control" 
            placeholder="Enter your membership code" 
            required
            v-model="username"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Verification Key</label>
          <input 
            type="password" 
            id="password" 
            class="form-control" 
            placeholder="●●●●●●●●" 
            required
            v-model="password"
          >
        </div>
        
        <button type="submit" class="btn btn-primary">UNLOCK BENEFITS</button>
        <button 
          type="button" 
          class="btn btn-secondary" 
          @click="$emit('close')"
        >
          CLOSE
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaintsLoginModal',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      alert(`ACCESS GRANTED\nWelcome back, ${this.username || 'Boss'} 💜`);
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  width: 100%;
  max-width: 500px;
  background: linear-gradient(135deg, #1a0a2a 0%, #0d0515 100%);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 50px rgba(138, 43, 226, 0.2);
  position: relative;
  overflow: hidden;
}

.modal-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0) 70%);
  animation: rotate 15s linear infinite;
  z-index: -1;
}

.modal-header {
  margin-bottom: 30px;
  text-align: center;
}

.modal-header h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.modal-header h2 strong {
  color: #ffd700;
}

.modal-header p {
  color: rgba(255,255,255,0.6);
  font-size: 14px;
  letter-spacing: 1px;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

.form-group label {
  display: block;
  color: rgba(255,255,255,0.8);
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.form-control {
  width: 100%;
  padding: 15px 20px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.1);
}

.form-control::placeholder {
  color: rgba(255,255,255,0.3);
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
}

.btn-primary {
  background: linear-gradient(to right, #ffd700, #daa520);
  color: #1a0a2a;
  margin-bottom: 15px;
}

.btn-primary:hover {
  background: linear-gradient(to right, #daa520, #ffd700);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(218, 165, 32, 0.4);
}

.btn-secondary {
  background: transparent;
  color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255,255,255,0.1);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.9);
}

.decoration {
  position: absolute;
  opacity: 0.1;
}

.decoration-1 {
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: #ffd700;
}

.decoration-2 {
  bottom: 20px;
  left: 20px;
  font-size: 24px;
  color: #8a2be2;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>