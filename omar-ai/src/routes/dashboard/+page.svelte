<script>
  import { Activity, Users, Zap, Server, Bot } from "lucide-svelte";
</script>

<div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
  <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-2">
    <div class="flex items-center justify-between">
       <span class="text-sm font-medium text-muted-foreground">Active Agents</span>
       <Users class="size-4 text-muted-foreground" />
    </div>
    <div class="text-2xl font-bold">12</div>
    <p class="text-xs text-muted-foreground">+2 from last hour</p>
  </div>
    <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-2">
    <div class="flex items-center justify-between">
       <span class="text-sm font-medium text-muted-foreground">Automations</span>
       <Zap class="size-4 text-muted-foreground" />
    </div>
    <div class="text-2xl font-bold">540</div>
    <p class="text-xs text-muted-foreground">+18% efficiency</p>
  </div>
    <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-2">
    <div class="flex items-center justify-between">
       <span class="text-sm font-medium text-muted-foreground">Sandbox Usage</span>
       <Activity class="size-4 text-muted-foreground" />
    </div>
    <div class="text-2xl font-bold">89%</div>
    <p class="text-xs text-muted-foreground">High load</p>
  </div>
    <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-2">
    <div class="flex items-center justify-between">
       <span class="text-sm font-medium text-muted-foreground">System Status</span>
       <Server class="size-4 text-muted-foreground" />
    </div>
    <div class="text-2xl font-bold text-green-500">Operational</div>
    <p class="text-xs text-muted-foreground">All systems normal</p>
  </div>
</div>

<div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <div class="xl:col-span-2 rounded-xl border bg-card text-card-foreground shadow-sm">
        <div class="p-6 flex flex-col gap-1">
            <h3 class="text-lg font-semibold">Recent Activity</h3>
            <p class="text-sm text-muted-foreground">Latest actions performed by your agents.</p>
        </div>
        <div class="p-6 pt-0">
            <div class="space-y-4">
                {#each [1,2,3,4,5] as i}
                    <div class="flex items-center gap-4">
                        <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Bot class="size-4 text-primary" />
                        </div>
                        <div class="flex-1 space-y-1">
                            <p class="text-sm font-medium leading-none">Agent Alpha processed new dataset</p>
                            <p class="text-xs text-muted-foreground">2 minutes ago</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    
    <div class="rounded-xl border bg-card text-card-foreground shadow-sm">
        <div class="p-6 flex flex-col gap-1">
            <h3 class="text-lg font-semibold">Quick Actions</h3>
        </div>
        <div class="p-6 pt-0 flex flex-col gap-2">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Create New Agent
            </button>
             <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                New Automation Flow
            </button>
        </div>
    </div>
</div>
