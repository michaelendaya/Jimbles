<template>
  <div class="contents">
    <intro v-if="!storyTell" @start="story" />
    <div
      id="foo"
 
      class="container animate__animated animate__fadeIn animate__delay-1s"
      v-if="storyTell && !completed"
    >
      <div class="card"      ref="theRef">
        <v-card class="pa-5">
          <v-card-title class="pl-0 py-1">Dear Jimbles,</v-card-title>
          <vue-typer
            v-if="startTypers"
            @completed="onComplete"
            :key="current"
            :text="[formatText(message[current], 'theRef', font)]"
            :repeat="0"
            :erase-on-complete="true"
            caret-animation="blink"
          ></vue-typer>
        </v-card>
      </div>
      <div class="lottie">
        <lottie-animation path="lotlot.json" />
      </div>
    </div>
    <end v-if="storyTell && completed" @reset="restart" />
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import { VueTyper } from "vue-typer";
import End from "../components/End.vue";
import Intro from "../components/Intro.vue";
export default {
  name: "Home",
  components: {
    LottieAnimation,
    VueTyper,
    Intro,
    End,
  },
  data: () => ({
    current: 0,
    font: null,
    storyTell: false,
    startTypers: false,
    completed: false,
    message: [
      // `I never knew how joyous life could be until I saw your face.My heart leaps like a hummingbird in flight every time I see you. This is something I have never felt before, and it is you that inspires it.`,
      // `When I think about you and our rich conversations, I feel a warmness inside. I cannot hide my smiles, even when we are apart. This connection is special, amazing, and I dare say, destiny.`,
      "Ever since na naging bingol kita. Alam ko na super unique ka. Siguro gift ka ni Lord sakin. Minahal mo ko at tinuruan mo ko ng maraming bagay di lang gumastos(hehe). ",
      "Mas naging colorful yung life ko ever since nakilala kita kahit na once a month lang tayo nagkikita.Yung Love ko naman hindi lang about sa kiss and hugs, pati din po sa nafeeel ko sayo.",
      "Loving is hard pero pag sayo super dali. Super appericated ko yung gestures mo wheter big or small. Yung companionship mo and yung love mo.",
      "Di ko mapicture out yung future ko ng wala ka. Sa lahat ng future plans ko kasama ka. Siguro 5-8 years from now nagbabaliwan pa din tayo and mas mature na siguro(no more corndog arguments).",
      "Jimbles, you really mean my world to me. Love na love po kita and I promise na magiging bingles kita FOREVER",
      // "b",
      // "c",
    ],
  }),
  methods: {
    formatText(text, ref, textSize = 5) {
      console.log(this.$refs[ref].clientWidth);
      let maxChars = Math.floor(this.$refs[ref].clientWidth / textSize);
      let words = text.split(" ");
      let breaked = "";
      let currentCount = 0;
      words.forEach((word) => {
        currentCount += word.length;
        currentCount += 1;
        if (currentCount >= maxChars) {
          currentCount = word.length;
          breaked = `${breaked}\n${word} `;
        } else {
          breaked = `${breaked}${word} `;
        }
      });
      return breaked;
    },
    restart() {
      this.storyTell = false;
      this.completed = false;
      this.startTypers = false;
      this.current = 0;
    },
    onComplete: function () {
      console.log(this.current);
      if (this.current >= 4) {
        this.completed = true;
      } else {
        this.current++;
        console.log(this.current);
      }
      // this.storyTell = false;
      // handle event when VueTyper has finished all typing/erasing
    },
    story() {
      this.storyTell = true;
      setTimeout(() => {
        this.startTypers = true;
      }, 3000);
    },
    getRef() {
      var el = document.getElementById("foo");
      var style = window
        .getComputedStyle(el, null)
        .getPropertyValue("font-size");
      this.font = Math.floor(parseInt(style) / 3);
      console.log(this.font);
    },
  },
  mounted() {
    setTimeout(() => {

      this.getRef();
    }, 4500);
  },
  created() {
    window.addEventListener("resize", this.getRef);
  },
};
</script>
<style lang="scss">
#foo {
  font-size: 2rem;
  @media only screen and (max-width: 414px) {
    .vue-typer {
      font-size: 1rem;
    }
  }
}
.vue-typer {
  font-size: 2rem;
}
</style>
<style lang="scss" scoped>
.contents {
  height: 100%;
  background: #FFC0CB;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  @media only screen and (max-width: 414px) {
    flex-direction: column;
  }
}

.card {
  width: 30%;
}
.lottie {
  width: 50%;
}
.art {
  width: 40%;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 414px) {
  .vue-typer {
    font-size: 1rem;
  }
  .card {
    width: 100%;
    min-height: 30%;
  }
  .lottie {
    width: 100%;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter {
  transform: translateX(+100%);
}
</style>
