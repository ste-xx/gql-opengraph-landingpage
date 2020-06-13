<template>
  <div>
    <a class="waves-effect waves-light btn-large light-blue lighten-4 grey-text text-darken-2 modal-trigger" href="#modal-contact">Contact</a>
    <div id="modal-contact" class="modal">
      <div class="modal-content">
        <h4>Contact</h4>

        <div class="input-field">
          <form>
            <label for="contactEmail">Email</label>
            <input id="contactEmail" type="email" name="email" style="margin-bottom: 16px;" v-model="mail" />

            <label for="contactName">Name</label>
            <input id="contactName" type="text" name="name" style="margin-bottom: 16px;" v-model="name" />

            <label for="contactHelp">How can we help?</label>
            <textarea id="contactHelp" class="materialize-textarea" v-model="help"></textarea>
          </form>
        </div>
      </div>
      <div class="modal-footer" style="display: flex;">
        <a href="#!" class="modal-close waves-effect waves-primary btn-flat">Submit</a>
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
