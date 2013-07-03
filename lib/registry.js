
exports = module.exports = Register;

function Register (name) {
  if (!(this instanceof Register)) return new Register(name);
  this.name = name || "default";
}

