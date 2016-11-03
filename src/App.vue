<template>
  <div id="vigenere">
    <img src="http://vuejs.org/images/logo.png">
    <h1>Our vigenere Code en & decoder</h1>

    <vk-button-radio :value="radio" @change="radio = arguments[0]">
    <vk-button value="encode">Encode</vk-button>
    <vk-button value="decode">Decode</vk-button>
    </vk-button-radio>

    <div id="inputarea">
      <input v-model="key" placeholder="Enter your Key"></input><br>
      <textarea v-model="message" @keyup="vigenere" placeholder="Enter your Message"></textarea>
      <br>
      <h4>Output:</h4>
      <p style="white-space: pre; text-transform: uppercase">{{ output }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vigenere',
  data () {
    return {
      message: '',
      key: '',
      radio: '',
      output: ''
    }
  },
  methods: {
    vigenere: function () {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz';
      var keyindex = 0;
      var output = '';
      for (var i = 0; i < this.message.length; i++) {
        var num = alphabet.indexOf(this.message[i]);
        if (num !== -1) {
          console.log(keyindex);
          num += alphabet.indexOf(keyindex);
          num %= alphabet.length+1;
          keyindex += 1;
          if (keyindex === this.key.length) {
            keyindex = 0;
          }
          output += alphabet[num];
        }
      }
      this.output = output;
    }
  }
}
</script>

<style scoped>
#vigenere {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#inputarea {
  margin-top: 25px;
}

input {
  width: 30%;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  border: 1px solid #c3c3c3;
  text-transform: uppercase;
}

textarea {
  width: 29.836%;
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 3px;
  margin-top: 25px;
  padding: 5px 0 0 5px;
  height: 100px;
  border: 1px solid #c3c3c3;
}

img {
  width: 100px;
  height: 100px;
}

h1, h2 {
  font-weight: normal;
}

</style>
