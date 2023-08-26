<template>
  <div>
    <b-container>
      <h3 class="text-center" style="padding-top: 30px">SERVICES WE OFFER</h3>
      <b-row style="margin-top: 50px">
        <b-col md="4" class="py-3 py-md-0">
          <b-card
              title="CUSTOM MENUS"
              img-src="/image/c1.png"
              img-class="my-image-class"
              img-height="200px"
              img-width="10px"
          >
            <b-card-body>
              <b-card-text class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dicta dolorem explicabo facere illum impedit incidunt magni minima nesciunt quas quis quisquam repellat repellendus sequi vero, voluptatibus? Eveniet, officiis.</b-card-text>
              <div id="btn2" class="text-center"><button>View More</button></div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="4" class="py-3 py-md-0">
          <b-card
              title="SMARTEST WAY"
              img-src="/image/c2.png"
              img-class="my-image-class"
              img-height="200px"
          >
            <b-card-body>
              <b-card-text class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dicta dolorem explicabo facere illum impedit incidunt magni minima nesciunt quas quis quisquam repellat repellendus sequi vero, voluptatibus? Eveniet, officiis.</b-card-text>
              <div id="btn2" class="text-center"><button>View More</button></div>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="4" class="py-3 py-md-0">
          <b-card
              title="USER FRIENDLY"
              img-src="/image/c3.png"
              img-height="200px"
          >
            <b-card-body>
              <b-card-text class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dicta dolorem explicabo facere illum impedit incidunt magni minima nesciunt quas quis quisquam repellat repellendus sequi vero, voluptatibus? Eveniet, officiis.</b-card-text>
              <div id="btn2" class="text-center"><button>View More</button></div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row >
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CardRow1"
}
</script>

<style scoped>
#btn2 button {
  width: 100px;
  height: 30px;
  background: transparent;
  border: 1px solid black;
  transition: 0.5s ease;
  cursor: pointer;
}
#btn2 button:hover {
  background-color: rgba(238,224,208);
}
</style>