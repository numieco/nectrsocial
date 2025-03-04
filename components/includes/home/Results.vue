<template>
  <div class="l-section no-padding">
    <div class="l-section__header">
      <div class="l-container">
        <div class="c-section-header">
          <div>
            <h2 data-paragraph>Real Results</h2>
            <h4 class="neutral-text" data-paragraph>
              Real Results. Let the numbers do the talking.
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="l-section__header">
      <div class="l-container">
        <div class="c-section-header">
          <div class="image-grid">
            <img alt="Screenshot 1" src="/assets/images/s-6.png">
            <img alt="Screenshot 2" src="/assets/images/s-2.png">
            <img alt="Screenshot 3" src="/assets/images/s-4.png">
            <img alt="Screenshot 4" src="/assets/images/s-5.png">
            <img alt="Screenshot 5" src="/assets/images/s-3.png">
            <img alt="Screenshot 6" src="/assets/images/s-1.png">
          </div>
        </div>
      </div>
    </div>




    <div class="dummy-block"></div>
  </div>

</template>

<style scoped>
    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, auto));
      gap: 10px;
      /* padding: 20px;
      background: #0A151F; */
      border-radius: 10px;
      width: 100%;
    }

        @media screen and (max-width: 767px) {
          .image-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, auto));
          }
        }
  
    .image-grid img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      border: 1px solid #DEDEDE;
    }
</style>
