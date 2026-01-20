<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <main class="flex-grow pt-16">
    <slot />
  </main>
  <footer class="bg-slate-900 border-t border-white/10 py-8 text-center text-gray-400">
    <p>&copy; 2026 OMAR AI. All rights reserved.</p>
  </footer>
</div>