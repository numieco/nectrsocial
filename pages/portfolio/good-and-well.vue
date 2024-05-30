<template>
    <div>
        <Header is-inverted />

        <div class="scroller">
            <casestudy-header hero-img="/assets/images/gw-intro.jpeg" logo="/assets/images/gw-logo.svg">
                <template #title> Good & Well Supply Co. </template>
                <template #caption> Candles That Celebrate The Outdoors </template>
                <template #catchphrase> Fine Tuned Brand Voice <br />& 4x Return </template>
                <template #description>
                    Local candle company Good & Well Supply Co reached out to Nectr to manage their social media
                    accounts, create strong digital content and deploy conversion ads to help sell Good & Well Supply Co.’s products
                    online.
                    <br />
                    <br />
                    We decided that our Medium Social Media Management package would be the best place to start. Posting
                    original content to Good & Well Supply Co.’s Instagram, Facebook and TikTok channels five times per week. With this
                    strategy we re-engaged a previously stagnant audience, supplementing Good & Well Supply Co.’s following with new growth
                    as well.
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
                        <service-block icon="/assets/images/fb-ad.svg" link="/capabilities/fb-ads">
                            <template #service> Facebook &amp; Instagram Ads </template>
                            <template #service-details>
                                Ad creation/distribution, copywriting, creative testing, and
                                insightful reporting.
                            </template>
                        </service-block>


                        <service-block 
                        icon="/assets/images/social-media.svg"
                            link="/capabilities/social-media-management">
                            <template #service> Social Media Management (Organic) </template>
                            <template #service-details>
                                Hand us the keys to your social channels. Complete, done-for-you
                                social media management solutions with growth strategies baked
                                in.
                            </template>
                        </service-block>
                    </div>
                </div>

                <casestudy-metrics>
                    <template #header>Social media created:</template>

                    <template #metrics>
                        <metric-item>
                            <template #figure>38%</template>
                            <template #description>
                                increase in followers
                            </template>
                        </metric-item>

                        <metric-item>
                            <template #figure>200%</template>
                            <template #description>Increase in average engagement per post</template>
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
                                        After rebuilding a strong foundation on Good & Well Supply Co.’s organic social media channels, we
                                        introduced a Meta ads strategy to drive conversions on social media. This was an
                                        immediate success, as our organic social media posting strategy brought new
                                        prospective interest in the Good & Well brand and our meta ads strategy
                                        converted that interest into paying custome
                                    </h5>
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

                <casestudy-metrics>
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
                </casestudy-metrics>

                <c-button btn-text="Book a Discovery call!" centered typeform />
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
                        <div 
                        class="c-casestudy__wrapper">
                            <casestudy 
                            featured img-src="/assets/images/salish-header.jpeg"
                                link="/portfolio/keep-your-city-smiling">
                                <template #casestudy-name> Salish Lodge </template>
                                <template #featured-summary> Rebuilding Post-Pandemic </template>
                                <template #casestudy-details> Rebuilding Post-Pandemic </template>
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
            return 'Good & Well Supply Co. | NectrSocial'
        }
    },

    mounted() {
        this.$initScroll('.scroller')
        this.$paragraph()
    }
}
</script>

<style>
.c-work__logo {
    max-height: none;
}
</style>
