<template>
  <div
    id="my-strictly-unique-vue-upload-multiple-image"
    style="text-align: center"
  >
    <vue-upload-multiple-image
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      @data-change="dataChange"
      v-model="imagePass"
    ></vue-upload-multiple-image>
  </div>
</template>

<script>
export default {
  props: ["image"],
  data() {
    return {
      formData: "",
      index: "",
      fileList: [],
    };
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://unpkg.com/vue-upload-multiple-image@1.1.6/dist/vue-upload-multiple-image.js"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log(formData, index, fileList)
    }
  },
};
</script>
