<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header hero-img="/assets/images/picklewood_cover.jpg" logo="/assets/images/picklewood.png">
        <template #title> Launching Seattle's Picklewood Destination </template>
        <template #caption>
          Pickleball and Social Destination
        </template>
        <template #catchphrase>
          Generating Hype Before The Doors Open
        </template>
        <template #description>
          Picklewood is a new, high-energy pickleball and social destination designed to bring people together through sport, food, and community. With food & drinks by Ethan Stowell, Picklewood blends competitive play with hospitality-driven experiences, positioning itself as more than just a place to play, but a place to gather.
          <br />
          <br />
          From day one, the goal was to build a strong local following before the doors opened in November 2025. With no physical space open yet, social media needed to do the heavy lifting. Our strategy focused on seeding hype early, building anticipation over time, and creating a sense of community before opening day.
          
        </template>
      </casestudy-header>

        <casestudy-metrics>
          <template #header>The Results</template>

          <template #metrics>
            <metric-item small>
              <template #figure>1.2M</template>
              <template #description> total social media views </template>
            </metric-item>
            <metric-item small>
              <template #figure>9K</template>
              <template #description>followers built into active online community</template>
            </metric-item>
            <metric-item small>
              <template #figure>41.5K</template>
              <template #description>profile visits</template>
            </metric-item>
            <metric-item small>
              <template #figure>199K</template>
              <template #description>launch video views (Instagram)</template>
            </metric-item>

            <metric-item small>
              <template #figure>2.4K+</template>
              <template #description>launch video saves & shares</template>
            </metric-item>

            <metric-item small>
              <template #figure>4.2K+</template>
              <template #description>interactions on launch content</template>
            </metric-item>
          </template>
        </casestudy-metrics>


<div class="l-container">
           <div style="margin:20px 0 40px 0; display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                    <img src="/assets/images/picklewood-1.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/picklewood-2.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/picklewood-3.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/picklewood-4.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                  </div>
                  </div>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Approach</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                   With no physical space open yet, social media needed to do the heavy lifting. Our strategy focused on seeding hype early, building anticipation over time, and creating a sense of community before opening day.
                  </h5>
                  <br />
          
                  <h5 class="neutral-text" data-paragraph>
                     Through teaser-led content, launch-focused storytelling, and consistent organic publishing, we introduced the Picklewood brand, established its voice, and steadily grew an engaged audience that felt invested well before the doors opened. We also partnered with local micro-influencers who helped extend the story into trusted, community-driven networks and accelerate awareness ahead of launch.
                    </h5>
                    <br />
          
                   <h5 class="neutral-text" data-paragraph>
                     Through teaser-led content, launch-focused storytelling, and consistent organic publishing, we introduced the Picklewood brand, established its voice, and steadily grew an engaged audience that felt invested well before the doors opened. We also partnered with local micro-influencers who helped extend the story into trusted, community-driven networks and accelerate awareness ahead of launch.
                  </h5>
                  <br />

                   <h5 class="neutral-text" data-paragraph>
                    The goal wasn’t just awareness, it was to ensure Picklewood launched with momentum already in motion.
                    </h5>
                

                </div>
              </div>
            </div>
          </div>
        </div>

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
          </div>
        </div>


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
              <casestudy featured img-src="/assets/images/the_westin_cover.jpg" link="/portfolio/westin-seattle">
                <template #casestudy-name> The Westin Seattle </template>
                <template #featured-summary>
                    Consistent, Authentic On-Property Content
                </template>
                <template #casestudy-details>
                    Landmark downtown hotel builds steady social media momentum
                    through authentic, narrative-driven content.
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
      return 'Picklewood | NectrSocial'
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
