<template>
  <vue-upload-multiple-image
    @upload-success="uploadImageSuccess"
    @edit-image="editImage"
    @mark-is-primary="markIsPrimary"
    @limit-exceeded="limitExceeded"
    @before-remove="beforeRemove"
    id-upload="myIdUpload"
    id-edit="myIdEdit"
    :max-image="20"
    primary-text="Default"
    browse-text="Browse picture(s)"
    drag-text="Drag pictures"
    mark-is-primary-text="Set as default"
    popup-text="This image will be displayed as default"
    :multiple="true"
    :show-edit="true"
    :show-delete="true"
    :show-add="true"
  >
  </vue-upload-multiple-image>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
// import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      images: [],
    };
  },
  components: {
    VueUploadMultipleImage,
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, removeCallBack) {
      console.log("index", index);
      var r = confirm("remove image");
      if (r == true) {
        removeCallBack();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    markIsPrimary(index, fileList) {
      console.log("markIsPrimary data", index, fileList);
    },
    limitExceeded(amount) {
      console.log("limitExceeded data", amount);
    },
  },
};
</script>

<style>
#my-strictly-unique-vue-upload-multiple-image {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
