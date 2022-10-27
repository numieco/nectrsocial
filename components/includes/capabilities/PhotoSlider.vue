<template>
  <div class="l-section no-padding">
    <div class="l-section__header">
      <div class="l-container">
        <div class="c-section-header">
          <div class="header-text">
            <h4 class="neutral-text" data-paragraph>Photo work by Nectr:</h4>
          </div>
          <div class="c-slider-controls mobile-hide">
            <div
              class="c-slider-control__btn slider-prev"
              :class="hasScrolled ? '' : 'is-disabled'"
              @click="scrollLeft">
              <div class="btn-dot"></div>
              <div>Previous</div>
            </div>
            <div
              class="c-slider-control__btn slider-next"
              :class="doneScrolling ? 'is-disabled' : ''"
              @click="scrollRight">
              <div>Next</div>
              <div class="btn-dot next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="pictureSlider"
      class="c-slider photo-slider dragscroll"
      @scroll="checkScroll">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="picture-img__block">
        <img alt="" :src="image.img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasScrolled: false,
      doneScrolling: false,
      images: [
        {
          img: '/assets/images/SliderSamara.jpg'
        },
        {
          img: '/assets/images/SliderSamara-2.jpg'
        },
        {
          img: '/assets/images/SliderDonPancho.jpg'
        },
        {
          img: '/assets/images/SliderAstraHotel.jpg'
        },
        {
          img: '/assets/images/SliderAstraHotel-2.jpg'
        },
        {
          img: '/assets/images/SliderAlkiBody.jpg'
        },
        {
          img: '/assets/images/SliderAbly.jpg'
        },
        {
          img: '/assets/images/SliderSalishLodgeAndSpA.jpg'
        },
        {
          img: '/assets/images/SliderSalishLodgeAndSpa-2.jpg'
        },
        {
          img: '/assets/images/SliderDonPancho-2.jpg'
        },
        {
          img: '/assets/images/SliderAlkiBody-2.jpg'
        },
        {
          img: '/assets/images/SliderTatu.jpg'
        },
        {
          img: '/assets/images/SliderBirchRoadClub.jpg'
        },
        {
          img: '/assets/images/SliderAstraHotel-3.jpg'
        },
        {
          img: '/assets/images/SliderAstraHotel-4.jpg'
        },
        {
          img: '/assets/images/SliderAstraHotel-5.jpg'
        },
        {
          img: '/assets/images/SliderAstraHotel-6.jpg'
        },
        {
          img: '/assets/images/SliderAbly-2.jpg'
        },
        {
          img: '/assets/images/Slider10trails.jpg'
        },
        {
          img: '/assets/images/Slider10trails-2.jpg'
        },
        {
          img: '/assets/images/SliderTatu-2.jpg'
        },
        {
          img: '/assets/images/SliderVaPiano.jpg'
        },
        {
          img: '/assets/images/SliderDowntownSpirits.jpg'
        },
        {
          img: '/assets/images/SliderVaPiano-2.jpg'
        },
        {
          img: '/assets/images/SliderGC.jpg'
        },
        {
          img: '/assets/images/SliderGC-2.jpg'
        },
        {
          img: '/assets/images/SliderDueCucina.jpg'
        },
        {
          img: '/assets/images/SliderBirchRoadClub-2.jpg'
        },
        {
          img: '/assets/images/SliderDowntownSpiritS-2.jpg'
        },
        {
          img: '/assets/images/SliderDueCucina-2.jpg'
        }
      ]
    }
  },

  mounted() {
    this.$autoScrollSlow(this.$refs.pictureSlider)
  },

  methods: {
    checkScroll() {
      if (this.$refs.pictureSlider.scrollLeft > 0) {
        this.hasScrolled = true
      } else this.hasScrolled = false

      if (
        this.$refs.pictureSlider.offsetWidth +
          this.$refs.pictureSlider.scrollLeft >=
        this.$refs.pictureSlider.scrollWidth
      ) {
        this.doneScrolling = true
      } else this.doneScrolling = false
    },

    scrollRight() {
      const picture = document.querySelector('.picture-img__block')
      const pictureWidth = picture.clientWidth
      this.$slideRight(this.$refs.pictureSlider, pictureWidth)
    },

    scrollLeft() {
      const picture = document.querySelector('.picture-img__block')
      const pictureWidth = picture.clientWidth
      this.$slideLeft(this.$refs.pictureSlider, pictureWidth)
    }
  }
}
</script>

<style scoped>
.picture-img__block {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 350px;
  height: 350px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-color: rgba(52, 76, 99, 0.83);
}
.picture-img__block > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.l-section.no-padding {
  margin-top: 64px;
  padding-bottom: 0px;
}
@media screen and (max-width: 767px) {
  .picture-img__block {
    width: 250px;
    height: 250px;
  }
  .l-section.no-padding {
    padding-bottom: 64px;
  }
}
.header-text {
  max-width: 900px;
}
.photo-slider {
  pointer-events: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 1550px;
  margin-left: auto;
  margin-right: auto;
}
.c-team {
  pointer-events: auto;
}
.photo-slider::-webkit-scrollbar {
  display: none;
}
.c-slider-control__btn {
  pointer-events: auto;
}
.c-slider-control__btn.is-disabled {
  pointer-events: none;
}
</style>
