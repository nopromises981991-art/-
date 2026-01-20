<script>
  import { Cpu, Menu, X } from 'lucide-svelte';
  import { page } from '$app/stores';

  let isOpen = false;

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Agents', href: '/agents' },
    { name: 'Vision', href: '/vision' },
    { name: 'Sandbox', href: '/sandbox' },
  ];
</script>

<nav class="bg-slate-900/80 backdrop-blur-md fixed w-full z-50 border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0 text-primary font-bold text-2xl flex items-center gap-2">
          <Cpu class="w-8 h-8" />
          OMAR AI
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            {#each links as link}
              <a
                href={link.href}
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors {$page.url.pathname === link.href ? 'bg-primary text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}"
              >
                {link.name}
              </a>
            {/each}
          </div>
        </div>
      </div>
      <div class="-mr-2 flex md:hidden">
        <button
          type="button"
          class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          on:click={() => (isOpen = !isOpen)}
        >
          <span class="sr-only">Open main menu</span>
          {#if isOpen}
            <X class="block h-6 w-6" />
          {:else}
            <Menu class="block h-6 w-6" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if isOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each links as link}
          <a
            href={link.href}
            class="block px-3 py-2 rounded-md text-base font-medium {$page.url.pathname === link.href ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
            on:click={() => (isOpen = false)}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>