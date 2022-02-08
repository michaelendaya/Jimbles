<template>
  <div
    class="container intro animate__animated animate__fadeIn animate__delay-1s"
  >
    <div class="heart-box mx-auto">
      <div class="heart-logo"></div>
      <div class="heart animate-topright"></div>
      <div class="heart animate-bottomright"></div>
      <div class="heart animate-topleft"></div>
      <div class="heart animate-bottomleft"></div>
      <div class="heart animate-up"></div>
      <div class="heart animate-down"></div>
      <div class="heart animate-left"></div>
      <div class="heart animate-right"></div>

      <v-card class="card mx-auto">
        <div class="lottie">
          <lottie-animation path="valentines.json" />

        </div>
      </v-card>
      <v-card class="desc mx-auto mt-5">
        <v-card-title class=" title-card"
          >Jimbles, I have fallen in love with you for</v-card-title
        >
        <div class="clock mx-auto">
          <v-card color=" time grey lighten-4">
            <div>{{ timer.days }}</div>
            <div class="time-sub">{{ timerLabel.days }}</div></v-card
          >
          <v-card color=" time grey lighten-4">
            <div>{{ timer.hours }}</div>
            <div class="time-sub">{{ timerLabel.hours }}</div></v-card
          >
          <v-card color=" time grey lighten-4">
            <div>{{ timer.minutes }}</div>
            <div class="time-sub">{{ timerLabel.minutes }}</div></v-card
          >
          <v-card color=" time grey lighten-4">
            <div>{{ timer.seconds }}</div>
            <div class="time-sub">{{ timerLabel.seconds }}</div></v-card
          >
        </div>

        <v-card-actions class="mt-1">
          <v-spacer />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
                icon
                @click="$emit('reset')"
              >
                <v-icon color="#eb615b">mdi-restart</v-icon>
              </v-btn>
            </template>
            <span>Read Again</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import countdown from "../mixins/countdown";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
    LottieAnimation,
  },
  mixins: [countdown],
};
</script>

<style lang="scss" scoped>
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
.title-card {
  font-size: 1.1rem;
  @media only screen and (max-width: 500px) {
    font-size: 0.92rem;
    font-weight: bold;
  }

}

.card {
  width: 50%;
  z-index: 3;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  @media only screen and (max-width: 500px) {
    width: 95%;
  }
}
.desc {
  width: 50%;
  min-height: 190px;
  .headline {
    @media only screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }

  .clock {
    width: 90%;
    @media only screen and (max-width: 500px) {
      width: 95%;
    }
    display: flex;
    justify-content: space-around;
    .time {
      font-family: "Orbitron", sans-serif;
      width: 20%;

      font-size: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media only screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
      &-sub {
        font-size: 0.9rem;
        @media only screen and (max-width: 500px) {
          font-size: 0.8rem;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    width: 95%;
    min-height: 0px;
  }
}

.heart {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5oZWFydDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImhlYXJ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi4wMDAwMDAsIC03LjAwMDAwMCkiIGZpbGw9IiNEMDAyMUIiPiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS41MjM4MDk1LDI1IEMxNiwyNSAxNiwyNSAxNi40NzYxOTA1LDI1IEwyNC4wOTUyMzgxLDE3IEMyNi41NDk4Njc5LDE0LjUxMzUwNDIgMjYuNTQ5ODY3OSwxMC45MDAxNDM2IDI0LjA5NTIzODEsOSBDMjIuMTUwOTIzNSw2LjQ0MjgzNjc3IDE4LjU4NDg3NSw2LjQ0MjgzNjc3IDE2LjQ3NjE5MDUsOSBDMTYsOSAxNiw5IDE1LjUyMzgwOTUsOSBDMTMuNDE1MTI1LDYuNDQyODM2NzcgOS44NDkwNzY0Niw2LjQ0MjgzNjc3IDcuOTA0NzYxOSw5IEM1LjQ1MDEzMjA3LDEwLjkwMDE0MzYgNS40NTAxMzIwNywxNC41MTM1MDQyIDcuOTA0NzYxOSwxNyBMMTUuNTIzODA5NSwyNSBaIj48L3BhdGg+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=");
  background-repeat: no-repeat;
  height: 22px;
  width: 22px;
}

@mixin animation($name, $duration, $delay, $count) {
  -webkit-animation: $name $duration $delay $count;
  -moz-animation: $name $duration $delay $count;
  -o-animation: $name $duration $delay $count;
  -ms-animation: $name $duration $delay $count;
  animation: $name $duration $delay $count;
}

.animate-topright {
  position: absolute;
  @include animation(movetopRight, 6.5s, 1s, infinite);
}

.animate-bottomright {
  position: absolute;
  @include animation(movebottomRight, 4.5s, 1.7s, infinite);
}

.animate-topleft {
  position: absolute;
  @include animation(movetopLeft, 8.5s, 5.4s, infinite);
}

.animate-bottomleft {
  position: absolute;
  @include animation(movebottomLeft, 7.5s, 4.8s, infinite);
}

.animate-up {
  position: absolute;
  @include animation(moveup, 7.5s, 2.2s, infinite);
}

.animate-down {
  position: absolute;
  @include animation(movedown, 5.5s, 5.5s, infinite);
}

.animate-left {
  position: absolute;
  @include animation(moveleft, 5.5s, 2.9s, infinite);
}

.animate-right {
  position: absolute;
  @include animation(moveright, 5.5s, 3.4s, infinite);
}

@keyframes movetopRight {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 10%;
    left: 80%;
    opacity: 0;
  }
}

@keyframes movebottomRight {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 90%;
    left: 90%;
    opacity: 0;
  }
}

@keyframes movetopLeft {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 10%;
    left: 20%;
    opacity: 0;
  }
}

@keyframes movebottomLeft {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 90%;
    left: 5%;
    opacity: 0;
  }
}

@keyframes moveup {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 0%;
    left: 45%;
    opacity: 0;
  }
}

@keyframes movedown {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 100%;
    left: 45%;
    opacity: 0;
  }
}

@keyframes moveleft {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 45%;
    left: 10%;
    opacity: 0;
  }
}

@keyframes moveright {
  0% {
    top: 50%;
    left: 50%;
    opacity: 0.9;
  }
  100% {
    top: 45%;
    left: 97%;
    opacity: 0;
  }
}
</style>