<template>
  <div class="container intro">
    <div class="art">
      <v-img
        :src="imgs[currentImg]"
        contain
        width="50%"
        :class="[
          cycle
            ? ` animate__animated animate__fadeIn`
            : 'animate__animated hide',
        ]"
      />
    </div>

    <v-card class="card mx-auto ">
      <v-card-title class="title-card"
        >Hello Jimby! <br />Happy Valentines &#128152;</v-card-title
      >
      <label class="heart-switch">
        <input type="checkbox"  v-model="heart"/>
        <svg viewBox="0 0 33 23" fill="white">
          <path
            d="M23.5,0.5 C28.4705627,0.5 32.5,4.52943725 32.5,9.5 C32.5,16.9484448 21.46672,22.5 16.5,22.5 C11.53328,22.5 0.5,16.9484448 0.5,9.5 C0.5,4.52952206 4.52943725,0.5 9.5,0.5 C12.3277083,0.5 14.8508336,1.80407476 16.5007741,3.84362242 C18.1491664,1.80407476 20.6722917,0.5 23.5,0.5 Z"
          ></path>
        </svg>
      </label>
    </v-card>
  </div>
</template>

<script>
import "animate.css";
export default {
  data: () => ({
    heart:false,
    currentImg: 0,
    cycle: true,
    imgs: [
      require("@/assets/celebration-of-success.png"),
      require("@/assets/talk-with-family-and-friends.png"),
      require("@/assets/Bonding-Moments-health-&-welness.png"),
      require("@/assets/bonding-moments.png"),
      require("@/assets/cart.png"),
    ],
  }),
  watch:{
    heart(val){
      if(val==true){
        setTimeout(()=>{
          this.$emit('start')
        },1000)
      }
    }
  },
  methods: {

    cycleSponsor() {
      setTimeout(() => {
        this.cycle = false;
        setTimeout(() => {
          this.cycle = true;
        }, 100);
        if (this.currentImg < 4) {
          this.currentImg++;
        } else {
          this.currentImg = 0;
        }
        this.cycleSponsor();
      }, 2000);
    },
  },
  mounted() {
    this.cycleSponsor();
  },
};
</script>

<style lang="scss" scoped>
.hide {
  opacity: 0;
}
.container {
 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
}
.art {
  width: 50%;
  display: flex;
  height: 50%;

  justify-content: center;
  @media only screen and (max-width: 500px) {
    width: 80%;
    height: 40%;
  }
}
.card {
  font-family: "Ubuntu Mono", monospace;
  width: 45%;
  height: 45%;
  @media only screen and (max-width: 500px) {
    width: 80%;
    height: 23%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title-card {
    font-size: 2rem;
      @media only screen and (max-width: 500px) {
        font-size: 1.3rem;
      }
  }
}

.heart-switch {
  --duration: 0.45s;
  --stroke: #d1d6ee;
  --stroke-active: #ec4472;
  --fill: #fff;
  --fill-active: #eb615b;
  --shadow: #{rgba(#00093d, 0.25)};
  cursor: pointer;
  position: relative;
  transform: scale(var(--s, 1)) translateZ(0);
  transition: transform 0.2s;
  -webkit-tap-highlight-color: transparent;
  &:active {
    --s: 0.95;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: absolute;
    outline: none;
    border: none;
    pointer-events: none;
    z-index: 1;
    margin: 0;
    padding: 0;
    left: 1px;
    top: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px 0 var(--shadow);
    & + svg {
      width: 36px;
      height: 25px;
      fill: var(--fill);
      stroke: var(--stroke);
      stroke-width: 1px;
      stroke-linejoin: round;
      display: block;
      transition: stroke var(--duration), fill var(--duration);
    }
    &:not(:checked) {
      animation: uncheck var(--duration) linear forwards;
    }
    &:checked {
      animation: check var(--duration) linear forwards;
      & + svg {
        --fill: var(--fill-active);
        --stroke: var(--stroke-active);
      }
    }
  }
}

@keyframes uncheck {
  0% {
    transform: rotate(-30deg) translateX(13.5px) translateY(8px);
  }
  50% {
    transform: rotate(30deg) translateX(9px);
  }
  75% {
    transform: rotate(30deg) translateX(4.5px) scaleX(1.1);
  }
  100% {
    transform: rotate(30deg);
  }
}

@keyframes check {
  0% {
    transform: rotate(30deg);
  }
  25% {
    transform: rotate(30deg) translateX(4.5px) scaleX(1.1);
  }
  50% {
    transform: rotate(30deg) translateX(9px);
  }
  100% {
    transform: rotate(-30deg) translateX(13.5px) translateY(8px);
  }
}
</style>