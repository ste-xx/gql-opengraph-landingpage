<template>
  <div>
    <a class="waves-effect waves-light btn-large light-blue lighten-4 grey-text text-darken-2 modal-trigger" href="#modal-contact-sales">Contact</a>
    <div id="modal-contact-sales" class="modal">
      <div class="modal-content">
        <h4>Contact Sales</h4>

        <div class="input-field">
          <form ref="form" name="contactSales" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
            <label for="contactSalesEmail">Email (required)</label>
            <input id="contactSalesEmail" type="email" name="email" style="margin-bottom: 16px;" v-model="mail" />

            <label for="contactSalesName">Name (required)</label>
            <input id="contactSalesName" type="text" name="name" style="margin-bottom: 16px;" v-model="name" />

            <label for="contactSalesHelp">How can we help?</label>
            <textarea id="contactSalesHelp" class="materialize-textarea" v-model="help"></textarea>
          </form>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <a href="#!" class="modal-close waves-effect waves-primary btn-flat" :class="{ disabled: !mail || !name }" @click="handleSubmit">Get in touch</a>
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
    M.Modal.init(document.querySelectorAll('#modal-contact-sales'));
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
          'form-name': 'contactSales',
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
