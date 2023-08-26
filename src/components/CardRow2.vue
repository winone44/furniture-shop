<template>
  <b-container>
    <b-row style="margin-top: 100px">
      <b-col md="4" class="py-3 py-md-0">
        <b-card
            overlay
            title="Best Chair"
            img-src="/image/ch.png"
            class="tpc"
        >
          <b-card-text>Lorem ipsum dolor.</b-card-text>
          <div id="btn2"><button>View More</button></div>
        </b-card>
      </b-col>
      <b-col md="4" class="py-3 py-md-0">
        <b-card
            overlay
            title="Sofa"
            img-src="/image/sf.png"
            class="tpc"
        >
          <b-card-text>Lorem ipsum dolor.</b-card-text>
          <div id="btn2"><button>View More</button></div>
        </b-card>
      </b-col>
      <b-col md="4" class="py-3 py-md-0">
        <b-card
            overlay
            title="Work Desk"
            img-src="/image/work desk.png"
            class="tpc"
        >
          <b-card-text>Lorem ipsum dolor.</b-card-text>
          <div id="btn2"><button>View More</button></div>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: "CardRow2"
}
</script>

<style scoped>
.tpc {
  box-shadow: 0 0 5px black;
  transition: .5s ease;
  cursor: pointer;
}
.tpc:hover {
  transform: translateY(-10px);
}

#btn2 button {
  width: 100px;
  height: 30px;
  background: transparent;
  border: 1px solid black;
  transition: 0.5s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

#btn2 button:hover {
  background-color: rgba(238,224,208);
}
</style>