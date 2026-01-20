<script>
  import { Play, Square, Settings } from 'lucide-svelte';

  const agents = [
    { id: 1, name: 'Web Scraper Alpha', status: 'Running', type: 'Automation' },
    { id: 2, name: 'Image Analyzer Beta', status: 'Idle', type: 'Vision' },
    { id: 3, name: 'Chat Support Bot', status: 'Stopped', type: 'NLP' },
  ];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-3xl font-bold text-white">My Agents</h1>
    <button class="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-md transition-colors">
      Create New Agent
    </button>
  </div>

  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each agents as agent}
      <div class="bg-slate-800 rounded-lg border border-white/5 p-6 flex flex-col">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-lg font-medium text-white">{agent.name}</h3>
            <p class="text-sm text-gray-400">{agent.type}</p>
          </div>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
            {agent.status === 'Running' ? 'bg-green-100 text-green-800' : 
             agent.status === 'Idle' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}">
            {agent.status}
          </span>
        </div>
        
        <div class="mt-auto flex space-x-3">
          <button class="flex-1 bg-white/5 hover:bg-white/10 text-white py-2 rounded-md flex items-center justify-center gap-2 transition-colors">
            <Play class="w-4 h-4" /> Start
          </button>
          <button class="flex-1 bg-white/5 hover:bg-white/10 text-white py-2 rounded-md flex items-center justify-center gap-2 transition-colors">
            <Square class="w-4 h-4" /> Stop
          </button>
          <button class="p-2 bg-white/5 hover:bg-white/10 text-white rounded-md transition-colors">
            <Settings class="w-4 h-4" />
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>