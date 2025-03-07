<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header hero-img="/assets/images/astra_hotel.jpg" logo="/assets/images/astrahotel.jpg">
        <template #title> Astra Hotel Seattle </template>
        <template #caption>
          Sleek, Modern Hospitality in the Heart of Seattle
        </template>
        <template #catchphrase>
          Building an Award Winning Social Presence
        </template>
        <template #description>
          Astra Hotel Seattle partnered with Nectr Social to establish a strong
          online presence from the ground up. As a new hotel, Astra needed an
          engaging and creative social media strategy to build brand awareness,
          connect with the local community, and position itself as a top-tier
          hospitality destination in Seattle.
          <br />
          <br />
          We implemented our Medium Social Media Management package, managing
          their Instagram, Facebook, and TikTok accounts and publishing original
          content five times per week. By combining high-quality visual
          storytelling and strategic audience engagement, we grew Astra’s online
          presence and created buzz around their unique offerings.
        </template>
      </casestudy-header>

      <div class="l-section no-padding">
        <div class="c-work-services">
          <div class="c-services__header">
            <h2 data-paragraph>Services Provided</h2>
            <h4 class="neutral-text" data-paragraph>
              These are the services that were used in this project.
            </h4>
          </div>

          <div class="c-services__wrapper">
            <service-block icon="/assets/images/social-media.svg" link="/capabilities/social-media-management">
              <template #service> Social Media Management (Organic) </template>
              <template #service-details>
                Hand us the keys to your social channels. Complete, done-for-you
                social media management solutions with growth strategies baked
                in.
              </template>
            </service-block>

            <service-block icon="/assets/images/fb-ad.svg" link="capabilities/meta-ads">
              <template #service> Meta Ads </template>
              <template #service-details>
                Ad creation/distribution, copywriting, creative testing, and
                insightful reporting.
              </template>
            </service-block>
          </div>
        </div>

        <casestudy-metrics>
          <template #header>Social media created:</template>

          <template #metrics>
            <metric-item>
              <template #figure>4.5M</template>
              <template #description> total reach across platforms </template>
            </metric-item>
            <metric-item>
              <template #figure>13M</template>
              <template #description>impressions</template>
            </metric-item>
            <metric-item>
              <template #figure>22K+</template>
              <template #description>total followers (starting from 0)</template>
            </metric-item>
            <metric-item>
              <template #figure>Over 20K</template>
              <template #description>combined comments, saves, and shares on Instagram
                content</template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Work</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    Our efforts included content collaborations with notable
                    personalities and organizations, such as WNBA star Nika
                    Muhl, Seattle Kraken, Seattle Storm and Climate Pledge
                    Arena. These partnerships showcased Astra’s connection to
                    the local community and elevated the brand’s appeal to
                    diverse audiences.
                    <br />
                    <br />
                    This strategic approach led Astra to win Marriott’s 'Biggest
                    Marketing Splash’ award in both 2023 and 2024, cementing
                    their position as a leader in hospitality marketing.
                  </h5>
                  <div class="astra" style="
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                      align-items: center;
                      gap: 20px;
                      height: 600px;
                      width: 100%;
                      margin: 0 auto;
                    ">
                    <img src="/assets/images/astra_award.jpg" alt="Astra hotel award"
                      style="height: 100%; width: 70%; object-fit: cover" />
                    <video src="/assets/videos/astra_hotel.mp4" autoplay loop playsinline webkit-playsinline muted
                      style="
                        height: 100%;
                        width: 30%;
                        object-fit: cover;
                      "></video>
                  </div>
                </div>
              </div>
              <!--   <div class="c-writeup-img__block">
                <img
                  alt=""
                  class="c-writeup__img"
                  loading="lazy"
                  src="/assets/images/work-img.jpg"/>
              </div> -->
            </div>
          </div>
        </div>

        <!-- <casestudy-metrics>
                    <template #header>Ads</template>
                    <template #metrics>
                        <metric-item small>
                            <template #figure>471</template>
                            <template #description> total purchases</template>
                        </metric-item>

                        <metric-item small>
                            <template #figure>416%</template>
                            <template #description>return on advertising</template>
                        </metric-item>

                        <metric-item small>
                            <template #figure>3,339</template>
                            <template #description>new visitors </template>
                        </metric-item>
                    </template>
                </casestudy-metrics> -->

        <c-button btn-text="Get in Touch!" centered typeform />
      </div>

      <div class="l-section">
        <div class="l-section__header no-padding">
          <div class="l-container">
            <div class="c-section-header">
              <div>
                <h2 class="no-margin" data-paragraph>
                  Check out another project
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="c-casestudies">
          <div class="l-container">
            <div class="c-casestudy__wrapper">
              <casestudy featured img-src="/assets/images/gw-intro.jpg" link="/portfolio/good-and-well">
                <template #casestudy-name> Good & Well Supply Co. </template>
                <template #featured-summary>
                  Candles That Celebrate The Outdoors
                </template>
                <template #casestudy-details>
                  Candles That Celebrate The Outdoors
                </template>
              </casestudy>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'en',
      },
      title: this.title,
      meta: [...this.meta],
    }
  },

  computed: {
    meta() {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description,
      })
    },

    description() {
      return ''
    },

    title() {
      return 'Astra Hotel Seattle | NectrSocial'
    },
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
  },
}
</script>

<style>
.c-work__logo {
  max-height: none;
}
</style>
