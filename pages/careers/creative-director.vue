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
                <template #role> Creative Director </template>
                <template #type> Full Time, Salaried</template>
                <template #location> Seattle, WA</template>
                <template #summary>
                  Nectr Social is a small but dynamic social media marketing
                  agency based in the vibrant city of Seattle. We specialize in
                  creating innovative and impactful digital marketing solutions
                  for a diverse range of clients. We are currently seeking a
                  talented and experienced Creative Director to join our team
                  and lead our creative efforts.
                  <br />
                  <br />
                  To apply please submit your resume, portfolio, and a cover
                  letter highlighting your relevant experience and why you would
                  be a great fit for this role to zak@nectrsocial.com
                </template>
              </career-header>

              <career-list>
                <template #list-header>Duties and Responsibilities </template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Develop and execute creative concepts and strategies that
                      align with client objectives and brand guidelines.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Lead a team of designers, copywriters, and other creative
                      professionals to deliver high-quality work on time and
                      within budget.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Collaborate closely with the account management team to
                      understand client requirements and provide creative
                      solutions that exceed expectations.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Stay updated on industry trends and best practices, and
                      incorporate them into our creative processes to maintain a
                      competitive edge.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Provide clear and constructive feedback to team members to
                      ensure continuous improvement and growth.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Manage multiple projects simultaneously, prioritize tasks,
                      and meet deadlines in a fast-paced agency environment.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Present creative ideas and concepts to clients with
                      confidence and professionalism.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Foster a collaborative and positive work environment that
                      encourages creativity, innovation, and teamwork.
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Detailed Expectations</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Consistently elevate our team's quality of creative work,
                      demanding and upholding a high standard with all the
                      creative work we deliver to our clients.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Lead the creative team both by example and through clear
                      delegation. Have a shared goal of developing the skills of
                      our current team members and growing the company. The
                      delegation piece is very important, it is your
                      responsibility to ensure that our creative resources are
                      being utilized as efficiently as possible.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Constantly look for opportunities to strengthen our
                      current internal processes and workflows and identify
                      areas to add a non-existing process or workflow, in
                      situations where our team and our clients could benefit.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Create and further a standard of quality, backed by trend
                      awareness, growth of team creative production skills, and
                      nailing our client's vision.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Avoid repetition and stagnancy at all costs. There should
                      be no question that our creative team is continuously
                      trying new things on behalf of our clients while taking
                      note of what works very well and iterating on it. Our
                      content must continue to evolve with social best practices
                      and our client’s input.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Strong leadership of our team - making sure that the work
                      is getting done and getting done well. All while allowing
                      our creative team opportunities to be challenged and grow
                      as professionals.
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Qualifications</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Minimum of 5 years of experience in a creative role, with
                      at least 2 years in a leadership position.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Proven track record of successfully managing and
                      delivering creative projects for diverse clients.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Strong understanding of social media platforms, digital
                      marketing, and current design trends.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Excellent leadership and team management skills, with the
                      ability to inspire and motivate creative professionals.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Proficient in industry-standard design software (e.g.,
                      Adobe Creative Suite).
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Exceptional communication and presentation skills, with
                      the ability to articulate creative ideas effectively.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Strong attention to detail and ability to maintain high
                      standards of quality in a fast-paced environment.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Bachelor's degree in graphic design, advertising,
                      marketing, or a related field (preferred but not
                      required).
                    </template>
                  </career-list-item>
                </template>
              </career-list>

              <career-list>
                <template #list-header>Benefits</template>
                <template #list-block>
                  <career-list-item>
                    <template #list-text>
                      Competitive salary in the range of $70,000 - $80,000 per
                      year, based on experience and qualifications.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Healthcare stipend to support your well-being.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Opportunity for professional growth and career advancement
                      within a dynamic and growing agency.
                    </template>
                  </career-list-item>
                  <career-list-item>
                    <template #list-text>
                      Collaborative and supportive remote work environment that
                      values integrity, communication, creativity, and
                      experimentation.
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
                  typeform />
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
        message: '',
      },
    }
  },

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
      return 'Content Specialist | NectrSocial'
    },
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
    },
  },
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
