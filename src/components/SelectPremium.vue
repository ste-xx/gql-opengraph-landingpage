<template>
  <div>
    <a class="waves-effect waves-light btn-large light-blue lighten-4 grey-text text-darken-2 modal-trigger" href="#modal-premium">Choose Premium</a>
    <div id="modal-premium" class="modal">
      <div class="modal-content">
        <h4>Sorry, we are not ready yet :(</h4>
        <div style="line-height: 1.8;">
          <div>We are currently working on the premium plan.</div>
          <div style="width: 100%;">&nbsp;</div>
          <div>If are interested, you can stay informed and get notified if something new happens:</div>
        </div>

        <h4 style="margin-top: 30px; margin-bottom: 15px; font-size: var(--font-xl);">Contact permission</h4>

        <div class="input-field">
          <form ref="form" name="selectPremium" method="POST" data-netlify="true">
            <label for="premiumEmail">Email</label>
            <input id="premiumEmail" type="email" name="email" style="margin-bottom: 16px;" v-model="mail" />

            <label>
              <input id="premiumConfirm" type="checkbox" name="confirm" v-model="checked" />
              <span>I agree to receive product information and offers from openGQL</span>
            </label>
          </form>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <a href="#!" class="modal-close waves-effect waves-primary btn-flat" :class="{ disabled: !checked || !mail }" @click="handleSubmit">Submit</a>
        <a href="#!" class="modal-close waves-effect waves-primary btn-flat">Cancel</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      mail: ''
    };
  },
  mounted() {
    M.Modal.init(document.querySelectorAll('#modal-premium'));
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
                  'form-name': 'selectPremium',
                  premiumEmail: this.mail,
                  premiumConfirm: this.checked
              })
          });
      }
  }
};
</script>

<style scoped>
.input-field input[type='checkbox']:not(.browser-default):focus:not([readonly]) + label,
.input-field input[type='email']:not(.browser-default):focus:not([readonly]) + label {
  color: #9e9e9e;
}
.input-field input[type='checkbox']:not(.browser-default):focus:not([readonly]),
.input-field input[type='email']:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid #e0e0e0;
  /* -webkit-box-shadow: 0 1px 0 0 #26a69a; */
  box-shadow: 0 1px 0 0 var(--primary-color);
}
</style>
