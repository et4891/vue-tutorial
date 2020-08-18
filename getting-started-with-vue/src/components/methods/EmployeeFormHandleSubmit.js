export default function () {
  this.submitting = true;
  this.clearStatus();

  if (this.invalidName || this.invalidEmail) {
    this.error = true;
    return;
  }

  this.$emit("add:employee", this.employee);
  this.$refs.first.focus();
  this.employee = {
    name: "",
    email: ""
  };
  this.error = false;
  this.success = true;
  this.submitting = false;
}