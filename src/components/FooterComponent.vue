<template>
  <footer id="footer">
    <h1 class="text-center">Furniture</h1>
    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nisi!</p>
    <div class="icons text-center">
      <b-icon class="icon" id="twitter" icon="twitter"></b-icon>
      <b-icon class="icon" id="facebook" icon="facebook"></b-icon>
      <b-icon class="icon" id="google" icon="google"></b-icon>
      <b-icon class="icon" id="skype" icon="skype"></b-icon>
      <b-icon class="icon" id="instagram" icon="instagram"></b-icon>
    </div>
    <div class="copyright text-center">
      &copy; Copyright <strong><span>Furniture</span></strong>. All Rights Reserved
    </div>
    <div class="credit text-center">
      Designed By <a href="https://www.youtube.com/watch?v=GotX1nz-Y2I&ab_channel=SACoding">SA Coding</a> & <a href="https://mdbootstrap.com/docs/standard/extended/shopping-carts/">mdbootstrap.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
#footer {
  width: 100%;
  background-color: black;
  margin-top: 100px;
}

#footer h1 {
  color: white;
  padding-top: 30px;
}

#footer p {
  color: white;
}

.icons {
  color: rgba(238,224,208);
  font-size: 30px;
  cursor: pointer;
}

.icons .icon {
  margin: 0 5px 0 5px
}

#twitter:hover {
  color: #00acee;
}

#facebook:hover {
  color: #3b5998;
}

#google:hover {
  color: #db4a39;
}

#skype:hover {
  color: #00aff0;
}

#instagram:hover {
  color: #bc2a8d;
}

.copyright {
  color: white;
  margin-top: 20px;
}

.credit {
  color: white;
}

</style>