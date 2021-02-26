<template>
  <teleport to="body">
    <div v-if="open" id="backdrop" @click="$emit('close')"></div>
    <transition name="modal">
      <dialog open v-if="open" :class="classStyles">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu v-if="footered">
          <slot name="actions">
            <base-button @click="$emit('close')" color="danger">
              Close
            </base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>
<script>
export default {
  emits: ["close"],
  props: {
    title: {
      type: String,
      required: false,
    },
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: "medium",
      validator: (val) => {
        const values = ["tiny", "small", "medium", "large"];
        return values.find((v) => v !== val);
      },
    },
    footered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classStyles() {
      return {
        [this.type]: !!this.type,
      };
    },
  },
};
</script>
<style scoped>
#backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  width: 80%;
  z-index: 100;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0 auto;
  overflow: hidden;
}

menu {
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.tiny {
  max-width: 300px;
}

.small {
  max-width: 576px;
}

.medium {
  max-width: 768px;
}

.large {
  max-width: 1200px;
}
</style>
