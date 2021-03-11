<script>
	import { onMount } from 'svelte';
	// import { sticky } from 'waypoints';
	import Category from './Category.svelte';
	import Reporter from './Reporters.svelte';
	import Credit from './Credits.svelte';
	import Related from './Related.svelte';

	let categories = [];
	let reporters = [];
	let related = [];
	let credits = [];

	onMount(async () => {
		const res = await fetch(`data.json`);
		const data = await res.json();
		categories = data.categories;
		reporters = data.reporters;
		credits = data.credits;
		related = data.related;
	});
</script>

<style>
</style>

<div class="flex-container">
{#each categories as category, i}
	<Category category = {category.category} ID = {category.ID} info = {category.info} link = {category.link} url = {category.url} questions = {category.questions}/>
{/each}

	<div class="extra-container">
		<div class="reporters">
			<h3 class="label-block" id="credits">Credits</h3>
			{#each credits as credit}
				<Credit label = {credit.label} text = {credit.text}/>
			{/each}
		</div>

		<div class="related">
			<h3 class="label-block">More election coverage</h3>
			{#each related as related}
				<Related label = {related.label} relatedHeadline = {related.relatedHeadline} relatedBrief = {related.relatedBrief} relatedImage = {related.relatedImage} relatedURL = {related.relatedURL}/>
			{/each}
		</div>
	</div>
</div>