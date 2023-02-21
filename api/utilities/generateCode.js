const generateCode = (length) => {
  let code = "";
  for (let i = 0; i < length; i++) {
    code += parseInt((Math.random() * 1e16) % 10);
  }
  return code;
};

module.exports = generateCode;
