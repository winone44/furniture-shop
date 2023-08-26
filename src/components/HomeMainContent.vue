<template>
    <div class="content">
      <h1>Make Your Home
        <br>Modern Design
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et exercitationem id iste quidem, veniam?</p>
      <div id="btn1"><button>Shop Now</button></div>
    </div>
</template>

<script>
export default {
  name: "HomeMainContent"
}
</script>

<style scoped>
/* content */
.content {
  margin-top: 150px;
  margin-left: 60px;
}
.content h1 {
  font-size: 50px;
}

#btn1 button {
  width: 150px;
  height: 32px;
  background: transparent;
  border: 1px solid black;
  letter-spacing: 3px;
  font-weight: bold;
  transition: .5s ease;
  cursor: pointer;
}

#btn1 button:hover{
  background-color: green;
}

@media screen and (max-width: 768px){
  .content {
    margin-top: 80px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .content h1 {
    font-size: 40px;
  }
}
/* content */
</style>