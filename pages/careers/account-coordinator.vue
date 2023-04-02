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
                <template #role> Account Coordinator</template>
                <template #type> Full Time, Salaried</template>
                <template #location> Seattle, WA</template>
                <template #summary>
                  Nectr Social, a social media agency based in Seattle, WA, is
                  looking for an entry-level Account Coordinator to join our
                  team. This position reports to the Director of Client Services
                  and will be responsible for managing the day-to-day social
                  media activities of a variety of clients.
                </template>
              </career-header>

              <career-list>
                <template #list-header>Duties and Responsibilities </template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Post captioning/copywriting for a variety of clients
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Managing and updating editorial calendars
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Managing social media calendars and publishing
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Assisting with client meetings and client communications
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Working collaboratively with our creative team to identify
                      opportunities to create content based on what's working,
                      upcoming content needs on the editorial calendar, and
                      other opportunities
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Requirements</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>Strong attention to detail and ability to work in a
                      fast-paced environment with multiple competing priorities
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Efficient and proactive communicator
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Fluent in social media language and understanding how to
                      write for a variety of brands
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Enjoy being organized and detail-oriented
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Ability to work collaboratively in a team environment
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Ability to manage multiple tasks and prioritize
                      effectively
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Qualifications</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Bachelor's degree in Communications, Marketing, or related
                      field preferred
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Experience with social media platforms and management
                      tools
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Excellent written and verbal communication skills
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Strong organizational skills
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Basic design skills preferred
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Previous experience in a similar role or in a marketing
                      agency is highly desirable
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Benefits </template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Healthcare stipend available
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Opportunity for growth and advancement within the company
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

                <!-- <div class="c-apply__form w-form">
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
                  id="/"
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
      return 'Account Coordinator | NectrSocial'
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
