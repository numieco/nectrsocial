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
                <template #role> Creative Specialist </template>
                <template #type> Part Time, Hourly Rate</template>
                <template #location> Seattle, WA</template>
                <template #summary>
                  We are seeking a highly motivated and creative individual to
                  join our team as a Creative Specialist. This position will
                  report to our Creative Director and will be responsible for
                  pre-shoot planning, content creation, and post-production
                  editing. The ideal candidate will have experience in content
                  creation and be able to work with multiple clients and their
                  specific styles.
                  <br />
                  <br />
                  This is a contract-to-hire position, with the potential for
                  full-time employment based on performance. If you are a
                  creative individual with a passion for social media and
                  content creation, we encourage you to apply for this exciting
                  opportunity at Nectr Social.
                </template>
              </career-header>

              <career-list>
                <template #list-header>Duties and Responsibilities </template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Work with our account coordinators to identify content
                      opportunities for our clients
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Create shot lists and pre-shoot plans based on client
                      needs
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Managing social media calendars and publishing
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Attend shoots and execute content creation, including
                      shooting videos and photos
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Edit content in a style particular to the client's brand
                      and deliver completed assets to the internal team
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Collaborate with the creative team to brainstorm and
                      develop new content ideas
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Stay up-to-date with the latest trends in social media and
                      content creation
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Requirements</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Experience creating content, preferably in a professional
                      setting
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Ability to work on multiple projects simultaneously
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Excellent communication and collaboration skills
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Proficiency in Adobe Creative Suite (Premiere Pro,
                      Photoshop, and Lightroom)
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Familiarity with social media platforms, including
                      Instagram, Facebook, and TikTok
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Passion for social media and content creation
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Qualifications</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      1-2 years of experience in content creation, video
                      production, or a related field
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Strong organizational skills and attention to detail
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Ability to manage multiple projects and deadlines in a
                      fast-paced environment
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Proficient in DSLR photography and videography
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Experience with video and photo editing software, such as
                      Adobe Premiere Pro and Adobe Lightroom
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Ability to work well independently as well as within a
                      team
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Strong interpersonal and communication skills
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      A portfolio of previous content creation work is preferred
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

                <!--          <div class="c-apply__form w-form">
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
                </div> -->

                <c-button
                  id="JKGjqVay"
                  btn-text="Apply for this role"
                  centered
                  submit
                  typeform/>
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
      return 'Content Specialist | NectrSocial'
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
.c-apply__wrapper {
  height: auto;
}

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
