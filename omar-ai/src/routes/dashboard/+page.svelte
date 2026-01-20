<script>
  import { Activity, Users, Shield, Zap } from 'lucide-svelte';

  const stats = [
    { name: 'Active Agents', value: '12', icon: Users, color: 'text-green-400' },
    { name: 'Tasks Completed', value: '1,234', icon: Activity, color: 'text-blue-400' },
    { name: 'Sandbox Uptime', value: '99.9%', icon: Shield, color: 'text-purple-400' },
    { name: 'Efficiency', value: '+24%', icon: Zap, color: 'text-yellow-400' },
  ];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <h1 class="text-3xl font-bold text-white mb-8">Dashboard</h1>
  
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {#each stats as stat}
      <div class="bg-slate-800 overflow-hidden shadow rounded-lg border border-white/5">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svelte:component this={stat.icon} class="h-6 w-6 {stat.color}" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-400 truncate">{stat.name}</dt>
                <dd>
                  <div class="text-lg font-medium text-white">{stat.value}</div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
    <!-- Recent Activity -->
    <div class="bg-slate-800 shadow rounded-lg border border-white/5 p-6">
      <h2 class="text-xl font-semibold text-white mb-4">Recent Activity</h2>
      <ul class="space-y-4">
        {#each [1, 2, 3] as i}
          <li class="flex items-center space-x-3 text-sm">
            <div class="h-2 w-2 rounded-full bg-primary"></div>
            <span class="text-gray-300">Agent Alpha completed task "Data Scraping"</span>
            <span class="text-gray-500 ml-auto">2m ago</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- System Status -->
    <div class="bg-slate-800 shadow rounded-lg border border-white/5 p-6">
      <h2 class="text-xl font-semibold text-white mb-4">System Status</h2>
      <div class="space-y-4">
        <div>
          <div class="flex justify-between text-sm text-gray-400 mb-1">
            <span>CPU Usage</span>
            <span>45%</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2">
            <div class="bg-primary h-2 rounded-full" style="width: 45%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-sm text-gray-400 mb-1">
            <span>Memory Usage</span>
            <span>60%</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2">
            <div class="bg-secondary h-2 rounded-full" style="width: 60%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>