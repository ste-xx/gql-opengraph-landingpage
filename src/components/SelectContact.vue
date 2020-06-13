<template>
  <div>
    <a class="waves-effect waves-light btn-large light-blue lighten-4 grey-text text-darken-2 modal-trigger" href="#modal-contact">Contact</a>
    <div id="modal-contact" class="modal">
      <div class="modal-content">
        <h4>Contact Sales</h4>
        <input type="email" name="mail" />
        <input type="text" name="name" />
        <!--how can we help?-->
        <input type="text" name="help" />
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    M.Modal.init(document.querySelectorAll('#modal-contact'));
  }
};
</script>
