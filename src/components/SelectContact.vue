<template>
  <div>
    <div id="modal-contact" class="modal">
      <div class="modal-content">
        <h4>Contact</h4>

        <div class="input-field">
          <form ref="form" name="contact" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
            <label for="contactEmail">Email (required)</label>
            <input id="contactEmail" type="email" name="email" style="margin-bottom: 16px;" v-model="mail" />

            <label for="contactName">Name (required)</label>
            <input id="contactName" type="text" name="name" style="margin-bottom: 16px;" v-model="name" />

            <label for="contactHelp">How can we help?</label>
            <textarea id="contactHelp" class="materialize-textarea" v-model="help" name="help"></textarea>
          </form>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <a href="#!" class="modal-close waves-effect waves-primary btn-flat" :class="{ disabled: !mail || !name }" @click="handleSubmit">Submit</a>
        <a href="#!" class="modal-close waves-effect waves-primary btn-flat">Cancel</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mail: '',
      name: '',
      help: ''
    };
  },
  mounted() {
    M.Modal.init(document.querySelectorAll('#modal-contact'));
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'contact',
          contactEmail: this.mail,
          contactName: this.name,
          contactHelp: this.help
        })
      });
    }
  }
};
</script>

<style scoped>
.input-field input[type='email']:not(.browser-default):focus:not([readonly]) + label,
.input-field textarea:not(.browser-default):focus:not([readonly]) + label,
.input-field input[type='text']:not(.browser-default):focus:not([readonly]) + label {
  color: #9e9e9e;
}
.input-field input[type='text']:not(.browser-default):focus:not([readonly]),
.input-field textarea:not(.browser-default):focus:not([readonly]),
.input-field input[type='email']:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid #e0e0e0;
  /* -webkit-box-shadow: 0 1px 0 0 #26a69a; */
  box-shadow: 0 1px 0 0 var(--primary-color);
}
</style>
