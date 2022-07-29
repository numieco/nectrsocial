<template>
  <div>
    <Header blue-bg />

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
                We are Nectr - a fast, next- generation, social media-first
                digital marketing agency built to
                <span class="medium-text">hit the sweet spot.</span>
              </h3>

              <div class="hero-block__cta">
                <div class="down-arrow mobile-hide"></div>
                <c-button btn-text="Book a Kick-Off Call!" large link="/" />
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
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ably-logo.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ssrta.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/skin-perfect.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/birch-road.png"/>
            </div>
          </div>
          <div class="c-showcase-grid__item invert">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/frost.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/sdc.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/bricksneed.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
            <div class="c-showcase__block mobile-hide">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
            <div class="c-showcase__block mobile-hide">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
            <div class="c-showcase__block mobile-hide">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
            <div class="c-showcase__block mobile-hide">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
          </div>
          <div class="c-showcase-grid__item">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/salish.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ombraz.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/lens.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/shroomy.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="l-section no-padding">
      <div class="l-section__header">
        <div class="l-container">
          <div class="c-section-header">
            <div>
              <h2>Our Portfolio</h2>
              <h4 class="neutral-text">
                Here are some selected case studies from our favorite projects.
              </h4>
            </div>
            <div class="c-slider-controls mobile-hide">
              <div class="c-slider-control__btn slider-prev is-disabled">
                <div class="btn-dot"></div>
                <div>Previous</div>
              </div>
              <div class="c-slider-control__btn slider-next">
                <div>Next</div>
                <div class="btn-dot next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-slider">
        <splide class="c-casestudy__slider" :options="casestudy">
          <splide-slide class="splide__slide c-casestudy">
            <nuxt-link class="w-inline-block" to="portfolio/qnightclub">
              <img
                class="cover-image"
                loading="lazy"
                src="/assets/images/casestudy-img-1.jpg"/>
              <div class="slide-details__wrapper">
                <div class="c-block__double"></div>
                <div class="slide-details__block">
                  <div class="slide-details__inner">
                    <h4 class="alt-h4">QNightClub</h4>
                    <h6 class="neutral-text">Sold Out Shows</h6>
                  </div>
                  <div class="right-arrow"></div>
                </div>
              </div>
            </nuxt-link>
          </splide-slide>

          <splide-slide class="splide__slide c-casestudy">
            <nuxt-link class="w-inline-block" to="portfolio/qnightclub">
              <img
                class="cover-image"
                loading="lazy"
                src="/assets/images/casestudy-img-2.jpg"/>
              <div class="slide-details__wrapper">
                <div class="c-block__double"></div>
                <div class="slide-details__block">
                  <div class="slide-details__inner">
                    <h4 class="alt-h4">Keep Your City Smiling</h4>
                    <h6 class="neutral-text">The Big Pivot</h6>
                  </div>
                  <div class="right-arrow"></div>
                </div>
              </div>
            </nuxt-link>
          </splide-slide>

          <splide-slide class="splide__slide c-casestudy">
            <nuxt-link class="w-inline-block" to="portfolio/qnightclub">
              <img
                class="cover-image"
                loading="lazy"
                src="/assets/images/casestudy-img-3.jpg"/>
              <div class="slide-details__wrapper">
                <div class="c-block__double"></div>
                <div class="slide-details__block">
                  <div class="slide-details__inner">
                    <h4 class="alt-h4">Ombraz Sunglasses</h4>
                    <h6 class="neutral-text">3.5x Return on Ad Spend</h6>
                  </div>
                  <div class="right-arrow"></div>
                </div>
              </div>
            </nuxt-link>
          </splide-slide>

          <splide-slide class="splide__slide c-casestudy">
            <nuxt-link class="w-inline-block" to="portfolio/qnightclub">
              <img
                class="cover-image"
                loading="lazy"
                src="/assets/images/casestudy-img-4.jpg"/>
              <div class="slide-details__wrapper">
                <div class="c-block__double"></div>
                <div class="slide-details__block">
                  <div class="slide-details__inner">
                    <h4 class="alt-h4">Frost</h4>
                    <h6 class="neutral-text">Driving Foot Traffic</h6>
                  </div>
                  <div class="right-arrow"></div>
                </div>
              </div>
            </nuxt-link>
          </splide-slide>

          <splide-slide class="splide__slide c-casestudy">
            <nuxt-link class="w-inline-block" to="portfolio/qnightclub">
              <img
                class="cover-image"
                loading="lazy"
                src="/assets/images/casestudy-img-6.jpg"/>
              <div class="slide-details__wrapper">
                <div class="c-block__double"></div>
                <div class="slide-details__block">
                  <div class="slide-details__inner">
                    <h4 class="alt-h4">Ably</h4>
                    <h6 class="neutral-text">
                      From 0 to 40k Instagram Followers
                    </h6>
                  </div>
                  <div class="right-arrow"></div>
                </div>
              </div>
            </nuxt-link>
          </splide-slide>
        </splide>
      </div>
      <c-button btn-text="View all case studies" centered link="/portfolio" />
    </div>

    <!-- Done -->
    <div class="l-section no-padding">
      <div class="c-services">
        <div class="l-container sm-container">
          <div class="c-services__header">
            <div>
              We’re a veritable one-stop shop for
              <span class="orange-text">all your social needs.</span>
            </div>
          </div>
          <div class="c-services__list">
            <service-accordion link="/capabilities/photo-video">
              <template #title> Photo &amp; Video </template>
              <template #content>
                Just the creative, nothing else. We’ll send you photos, videos,
                or both featuring your product, brand, or service in its finest
                moments.
              </template>
            </service-accordion>

            <service-accordion link="/capabilities/social-media-mgt">
              <template #title> Social Media Management (Organic) </template>
              <template #content>
                Hand us the keys to your social channels. Complete, done-for-you
                social media management solutions with growth strategies baked
                in.
              </template>
            </service-accordion>

            <service-accordion link="/capabilities/tiktok-mgt">
              <template #title> TikTok Account Management </template>
              <template #content>
                A first-of-its-kind channel management package created
                exclusively for TikTok. We do everything, you watch your
                business account grow.
              </template>
            </service-accordion>

            <service-accordion link="/capabilities/facebook-instagram-ads">
              <template #title> Facebook &amp; Instagram Ads </template>
              <template #content>
                Ad creation/distribution, copywriting, creative testing, and
                insightful reporting.
              </template>
            </service-accordion>

            <service-accordion link="/capabilities/google-ads">
              <template #title> Google Ads </template>
              <template #content>
                Show up where people are searching.
              </template>
            </service-accordion>

            <service-accordion link="/capabilities/tiktok-ads">
              <template #title> Tik Tok Ads </template>
              <template #content>
                The greenest ad space on the block.
              </template>
            </service-accordion>

            <service-accordion link="/capabilities/consulting">
              <template #title> Consulting </template>
              <template #content>
                You do it, we help. Stay the course with channel audits, video
                call check-ins, and ongoing consulting services.
              </template>
            </service-accordion>
          </div>
          <c-button btn-text="Book a Discovery call!" centered link="/" white />
        </div>
      </div>
    </div>

    <div class="l-section no-padding">
      <div class="l-section__header">
        <div class="l-container">
          <div class="c-section-header">
            <div>
              <h2>Meet the Charm</h2>
              <h4 class="neutral-text">
                3-5 teeing up the team, different perspectives, diverse group of
                personals .
              </h4>
            </div>
            <div class="c-slider-controls mobile-hide">
              <div class="c-slider-control__btn slider-prev is-disabled">
                <div class="btn-dot"></div>
                <div>Previous</div>
              </div>
              <div class="c-slider-control__btn slider-next">
                <div>Next</div>
                <div class="btn-dot next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-slider">
        <div class="splide c-team__slider">
          <div class="splide__track">
            <div class="splide__list">
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/team-img-1.jpg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Zak Kosher</div>
                      <p class="alt-paragraph neutral-text">Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/team-img-2.jpg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Dylan Rabinowitz</div>
                      <p class="alt-paragraph neutral-text">
                        Director Of Client Services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/team-img-3.jpg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Ashley Forst</div>
                      <p class="alt-paragraph neutral-text">
                        Organic Social Media Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/team-img-4.jpg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Jonathan Ochoa</div>
                      <p class="alt-paragraph neutral-text">
                        Social Media Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/team-img-5.jpg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Kortney Gloska</div>
                      <p class="alt-paragraph neutral-text">Creative Lead</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Tiare Bowman</div>
                      <p class="alt-paragraph neutral-text">
                        Social Media Marketing Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Sabrina Kosher</div>
                      <p class="alt-paragraph neutral-text">
                        Administrative Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="splide__slide c-team">
                <img
                  class="cover-image"
                  loading="lazy"
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
                <div class="slide-details__wrapper">
                  <div class="c-block__double"></div>
                  <div class="slide-details__block small">
                    <div class="slide-details__inner">
                      <div>Gianna Chen</div>
                      <p class="alt-paragraph neutral-text">
                        Field Social Media Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <c-button
        btn-text="Join the team!"
        centered
        hide-on-mobile
        link="/careers"/>
    </div>

    <!-- Done -->
    <div class="l-section no-padding">
      <div class="c-cta">
        <div class="l-container flex-container centralized">
          <div class="cta-text__wrapper">
            <div class="cta-text">
              Are you a micro or macro influencer, a model, aspiring?
            </div>
            <h5>
              The Nectr influencer &amp; model network exists to connect you
              with cool opportunities, made possible by our clients.
            </h5>
          </div>
          <c-button btn-text="Learn More" link="/network" white />
        </div>
      </div>
    </div>

    <div class="l-section no-padding">
      <div class="l-section__header">
        <div class="l-container">
          <div class="c-section-header">
            <div>
              <h2>Words of Validation</h2>
              <h4 class="neutral-text">
                Here’s what some of the amazing clients we’ve worked with have
                to say!
              </h4>
            </div>
            <div class="c-slider-controls mobile-hide">
              <div class="c-slider-control__btn slider-prev is-disabled">
                <div class="btn-dot"></div>
                <div>Previous</div>
              </div>
              <div class="c-slider-control__btn slider-next">
                <div>Next</div>
                <div class="btn-dot next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-slider no-margin">
        <splide class="splide c-testimonials__slider" :options="testimonials">
          <splide-slide class="c-testimonial">
            <div class="c-block__double orange"></div>
            <div class="c-testimonial__block">
              <div>
                <div class="c-testimonial__header">
                  <div class="quote-icon"></div>
                  <div class="logo-icon small black"></div>
                </div>
                <div>
                  <h5 class="c-testimonial__text">
                    In 3 months, our overall return on ad spend has doubled.
                    Since then we&#x27;ve continued to scale our ad spend at
                    profit. Communication is always great and the results speak
                    for themselves.
                  </h5>
                </div>
              </div>
              <div class="c-testimonial__details">
                <div class="c-testimonial__logo">
                  <img
                    loading="lazy"
                    src="/assets/images/testimonial-img-1.png"/>
                </div>
                <h4 class="alt-h4">Jensen Brehm</h4>
                <p class="neutral-text">
                  Co-founder,
                  <span class="medium-text">Ombraz Sunglasses</span>
                </p>
              </div>
            </div>
          </splide-slide>
          <splide-slide class="c-testimonial">
            <div class="c-block__double orange"></div>
            <div class="c-testimonial__block">
              <div>
                <div class="c-testimonial__header">
                  <div class="quote-icon black"></div>
                  <div class="logo-icon small black"></div>
                </div>
                <div>
                  <h5 class="c-testimonial__text">
                    Working with Nectr Social meant less stress for our team!
                    They were responsive and reliable, and flexed to fit our
                    ever-changing needs.
                  </h5>
                </div>
              </div>
              <div class="c-testimonial__details">
                <div class="c-testimonial__logo">
                  <img
                    loading="lazy"
                    src="/assets/images/testimonial-img-2.png"/>
                </div>
                <h4 class="alt-h4">Liza Sankar-Gorton</h4>
                <p class="neutral-text">
                  Social Media Strategist,
                  <span class="medium-text">Green Rubino</span>
                </p>
              </div>
            </div>
          </splide-slide>
          <splide-slide class="c-testimonial">
            <div class="c-block__double orange"></div>
            <div class="c-testimonial__block">
              <div>
                <div class="c-testimonial__header">
                  <div class="quote-icon"></div>
                  <div class="logo-icon small black"></div>
                </div>
                <div>
                  <h5 class="c-testimonial__text">
                    We&#x27;ve been working with Nectr Social and its principals
                    for 3 years now, and we could not be more pleased. Nectr is
                    clearly the #1 social agency in Seattle, and quite possibly
                    well beyond.
                  </h5>
                </div>
              </div>
              <div class="c-testimonial__details">
                <div class="c-testimonial__logo">
                  <img loading="lazy" src="/assets/images/ably-logo.png" />
                </div>
                <h4 class="alt-h4">Bobby Frank</h4>
                <p class="neutral-text">
                  COO, <span class="medium-text">Ably Apparel</span>
                </p>
              </div>
            </div>
          </splide-slide>
          <splide-slide class="c-testimonial">
            <div class="c-block__double orange"></div>
            <div class="c-testimonial__block">
              <div>
                <div class="c-testimonial__header">
                  <div class="quote-icon black"></div>
                  <div class="logo-icon small black"></div>
                </div>
                <div>
                  <h5 class="c-testimonial__text">
                    The team at Nectr has been an incredible partner in strategy
                    and campaign management for myself and my clients. They are
                    thoughtful and results-driven, and I would highly recommend
                    their services!
                  </h5>
                </div>
              </div>
              <div class="c-testimonial__details">
                <div class="c-testimonial__logo">
                  <img
                    loading="lazy"
                    src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
                </div>
                <h4 class="alt-h4">Marika Beroukas</h4>
                <p class="neutral-text">
                  Founder, <span class="medium-text">Marika Beroukas</span>
                </p>
              </div>
            </div>
          </splide-slide>
        </splide>
        <div class="c-slider-controls desktop-hide">
          <div class="c-slider-control__btn slider-prev is-disabled">
            <div class="btn-dot"></div>
            <div>Previous</div>
          </div>
          <div class="c-slider-control__btn slider-next">
            <div>Next</div>
            <div class="btn-dot next"></div>
          </div>
        </div>
        <div class="c-slider-progress">
          <div class="c-slider-progress_bar">
            <div class="c-slider-progress__inner"></div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      casestudy: {
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        focus: 0,
        type: 'slide',
        gap: '0px',
        arrows: 'slider',
        trimSpace: true,
        isNavigation: true
      },

      testimonials: {
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        focus: 0,
        type: 'slide',
        gap: '45px',
        arrows: 'slider',
        trimSpace: true,
        isNavigation: true
      }
    }
  },

  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: this.title,
      meta: [...this.meta]
    }
  },

  computed: {
    meta() {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description
      })
    },

    description() {
      return ''
    },

    title() {
      return 'NectrSocial'
    }
  },

  mounted() {}
}
</script>
