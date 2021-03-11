<script>
export let label;
export let relatedHeadline;
export let relatedBrief;
export let relatedImage; 
export let relatedURL;
</script>
<style>
 /* footer index */
    .related--story-card {
      font-family: 'Unify Sans', Tahoma, sans-serif;
      cursor: pointer;
      margin: 5% 0;
      /* max-width: 500px; */
      flex-flow: row;
    }
    .related--story-card a{
      text-decoration: none;
    }
    .related--story-image {
      background-size: cover;
      background-position: center 20%;
      display: block;
      width: auto;
      height: 100%;
      min-height: 150px;
      margin-bottom: 10px;
      box-shadow: 0px 0px 3px #fff;
    }
    .related--story-image:hover{
      box-shadow: 0px 0px 3px #415bca;
    }
    .related--kicker{
      color: #415bca;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      margin: 1%;
    }
    .related--story-text, .related--story-hed {
      font-family: "Unify Sans";
      font-size: 13px;
      font-weight: 400;
      line-height: 1.3;
      letter-spacing: 0;
    }
    .related--story-hed {
      font-size: 18px;
      font-weight: 700;
      display: block;
      margin-bottom: 5px;
      text-transform: none;
      color: #222;
    }
    .related--story-text {
      font-family: "Unify Sans";
      display: block;
      color: #636363;
    }
</style>

<!-- <div class="parts">
    <div> -->
        <div class="related--story-card">
        {#if label !== ''}
          <span class="related--kicker" style="margin: 0;">{label}</span>
        {/if}
          <a href="{relatedURL}">
              <span class="related--story-hed">{relatedHeadline}</span>

              {#if relatedImage !== ''}
                <span class="related--story-image" style="background-image: url('{relatedImage}')"></span>
              {/if}

              {#if relatedBrief !== ''}
                <div class="related--story-text">{relatedBrief}</div>
              {/if}
          </a>
        </div>
    <!-- </div>
</div> -->