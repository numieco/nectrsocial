<template>
  <div>
    <Menu />
    <div class="scroller">
      <Header />

      <div class="l-section hero-section">
        <div class="l-container">
          <div class="hero-block__wrapper">
            <div class="hero-block__double"></div>
            <div class="hero-block">
              <div class="hero-img__wrapper">
                <div class="hero-img__block">
                  <img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-1.jpg"/><img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-2.jpg"/><img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-3.jpg"/><img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-4.jpg"/>
                </div>
                <div class="down-arrow desktop-hide"></div>
              </div>
              <div class="hero-text__wrapper">
                <h1 v-textReveal class="hero-text">
                  The digital marketing agency you didn’t know you needed.
                </h1>
                <h3 v-textReveal class="hero-subtext">
                  We are Nectr - a fast, next-generation,<br />
                  social media-first digital marketing agency built to
                  <span class="medium-text">hit the sweet spot.</span>
                </h3>

                <div class="hero-block__cta">
                  <div class="down-arrow mobile-hide"></div>
                  <a class="cta-btn large w-inline-block" href="#">
                    <div class="cta-btn__block large">
                      <div>Book a kick-off call!</div>
                    </div>
                    <div class="cta-btn__double"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="l-section banner-section">
        <div class="c-scrolling-tape">
          <div class="c-scrolling-tape__item">
            <div class="logo-icon"></div>
            <div class="banner-text">Hit the sweet spot</div>
            <div class="logo-icon"></div>
            <div class="banner-text outline-text white">Nectr</div>
            <div class="logo-icon"></div>
            <div class="banner-text">Hit the sweet spot</div>
            <div class="logo-icon"></div>
            <div class="banner-text outline-text white">Nectr</div>
          </div>
          <div class="c-scrolling-tape__item orange-banner">
            <div class="logo-icon black"></div>
            <div class="banner-text">Nectr</div>
            <div class="logo-icon black"></div>
            <div class="banner-text outline-text">Hit the sweet spot</div>
            <div class="logo-icon black"></div>
            <div class="banner-text">Nectr</div>
            <div class="logo-icon black"></div>
            <div class="banner-text outline-text">Hit the sweet spot</div>
          </div>
        </div>
      </div>

      <div class="l-section">
        <div class="l-container flex-container">
          <div>
            <h2 v-textReveal>Client Showcase</h2>
            <h4 v-textReveal class="neutral-text">
              50+ businesses have trusted us, US!
            </h4>
          </div>
          <div class="c-showcase-grid">
            <div class="c-showcase-grid__item">
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/ably-logo.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/ssrta.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/skin-perfect.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/birch-road.png"/>
              </div>
            </div>
            <div class="c-showcase-grid__item invert">
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/frost.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/sdc.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/bricksneed.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
              </div>
              <div class="c-showcase__block mobile-hide">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
              </div>
              <div class="c-showcase__block mobile-hide">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
              </div>
              <div class="c-showcase__block mobile-hide">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
              </div>
              <div class="c-showcase__block mobile-hide">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
              </div>
            </div>
            <div class="c-showcase-grid__item">
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/salish.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/ombraz.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/lens.png"/>
              </div>
              <div class="c-showcase__block">
                <img
                  alt=""
                  class="c-showcase-logo"
                  loading="lazy"
                  src="/assets/images/shroomy.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {}
</script>
