<script>
	import "../app.css";
</script>

<div class="app-container">
	<main>
		<slot />
	</main>
</div>

<style>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--color-bg);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		width: 100%;
		/* max-width: 600px; Mobile-first limit */
		margin: auto;
	}
</style>
