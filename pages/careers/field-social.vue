<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <div class="l-section first-section">
        <div class="l-container">
          <nuxt-link class="back-btn w-inline-block" to="/careers">
            <h6 data-paragraph>Back to Careers</h6>
          </nuxt-link>

          <div class="c-role">
            <div class="c-role__wrapper">
              <career-header>
                <template #role> Field Social Media Manager </template>
                <template #type> Full Time</template>
                <template #loation> Seattle, WA / Portland, OR </template>
                <template #summary>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels. We're currently open to candidates
                  in both Seattle, WA and Portland, OR.
                </template>
              </career-header>

              <career-list>
                <template #list-header>Duties and Responsibilities </template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Schedule and manage photo/video shoots with up to six
                      clients concurrently.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Maintain steady internal and external communication across
                      multiple communication channels.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Work with clients to plan organic content for specific
                      dates and events.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Work closely with the internal team to strategize around
                      client-specific organic social posting strategies
                      (primarily Facebook, Instagram, Twitter, LinkedIn).
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Communicate with clients to understand upcoming
                      “social-worthy” opportunities.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Write channel-specific organic social copy in the brand
                      voice of various clients.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Monitor social trends to implement into organic
                      strategies.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Edit, organize and manage a social media content hub
                      unique to each client.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Execute daily posting of content to social channels using
                      Nectr’s scheduling platform.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Coordinate client approvals on social media content prior
                      to posting.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Community management across client social platforms.
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Qualifications</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text> 4-year college degree. </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      DSLR with appropriate lenses for product-focused
                      photography. iPhone 11 pro or newer.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Experience and strong comfortability with Adobe Lightroom
                      and Adobe Premiere, or similar editing software.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Experience in short-form social media copywriting.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Experience managing public social media accounts for
                      businesses and organizations.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Experience with timely, professional online communication.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Confidence with working with and supporting a team in a
                      professional environment.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Understanding of organic social media best practices.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Knowledge of social media placements and how they are used
                      within each platform.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Confident, self-starter able to work independently
                      alongside clients and manage time efficiently.
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Bonus, if you have </template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>Previous experience managing social media on behalf of
                      brands/businesses.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      A robust social media presence of your own.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Experience using Sprout Social.
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Other </template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>Previous experience managing social media on behalf of
                      brands/businesses.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      This role requires an appetite for learning and growing in
                      the social space, allowing for a flexible work schedule
                      and the ability to enhance our client’s social identities
                      with your creative eye.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Hourly position: $20-25/hour.
                    </template>
                  </career-list-item>
                </template>
              </career-list>
            </div>

            <div class="c-apply__wrapper">
              <div class="c-block__double orange"></div>

              <div class="c-apply__block">
                <div class="c-apply__inner">
                  <h3 class="alt-h4">Apply for this role</h3>
                  <h6 class="neutral-text">
                    Interested in this role? Tell us why you might be a good fit
                    and we&#x27;ll get in touch.
                  </h6>
                </div>

                <div class="c-apply__form w-form">
                  <form
                    id="email-form"
                    class="apply-form__inner"
                    name="email-form">
                    <div class="form-column">
                      <div class="field-wrapper">
                        <div class="form-label">First name</div>
                        <input
                          id="first-name"
                          v-model="formData.firstName"
                          class="form-field w-input"
                          maxlength="256"
                          name="first-name"
                          placeholder="First name"
                          required
                          type="text"
                          @input="showLabel($event)"/>
                      </div>

                      <div class="field-wrapper">
                        <div class="form-label">Last name</div>
                        <input
                          id="last-name"
                          v-model="formData.lastName"
                          class="form-field w-input"
                          maxlength="256"
                          name="last-name"
                          placeholder="Last name"
                          required
                          type="text"
                          @input="showLabel($event)"/>
                      </div>
                    </div>

                    <div class="field-wrapper">
                      <div class="form-label">Email address</div>
                      <input
                        id="email"
                        v-model="formData.email"
                        class="form-field w-input"
                        maxlength="256"
                        name="email"
                        placeholder="Email address"
                        required
                        type="email"
                        @input="showLabel($event)"/>
                    </div>

                    <div class="field-wrapper">
                      <div class="form-label">LinkedIn URL</div>
                      <input
                        id="linkedin"
                        v-model="formData.linkedin"
                        class="form-field w-input"
                        maxlength="256"
                        name="linkedin"
                        placeholder="LinkedIn URL"
                        type="text"
                        @input="showLabel($event)"/>
                    </div>

                    <div class="field-wrapper">
                      <div class="form-label">Enter a short message</div>
                      <textarea
                        id="message"
                        v-model="formData.message"
                        class="form-field message w-input"
                        maxlength="5000"
                        name="message"
                        placeholder="Enter a short message"
                        @input="showLabel($event)"></textarea>
                    </div>
                  </form>
                </div>

                <c-button
                  btn-text="Apply for this role"
                  centered
                  link="/"
                  submit/>
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
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        linkedin: '',
        message: ''
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
      return 'Field Social Media Manager | NectrSocial'
    }
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
  },

  methods: {
    showLabel(e) {
      if (e.target.value !== '') {
        e.target.previousElementSibling.style.height = '24px'
      } else e.target.previousElementSibling.style.height = '0px'
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 991px) {
  .form-column {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
}
.form-label {
  transition-property: height;
  transition-duration: 350ms;
  transition-timing-function: ease;
}
.field-wrapper {
  margin-bottom: 32px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  width: 100%;
}
</style>
