<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Activity, Zap, Server, ShieldCheck, Bot, Code } from "lucide-svelte";
</script>

<div class="space-y-6">
  <div>
    <h1 class="text-3xl font-bold tracking-tight">Dashboard</h1>
    <p class="text-muted-foreground">Overview of your AI operations.</p>
  </div>

  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">Total Automations</CardTitle>
        <Zap class="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">12</div>
        <p class="text-xs text-muted-foreground">+2 from last week</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">Active Agents</CardTitle>
        <Activity class="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">3</div>
        <p class="text-xs text-muted-foreground">Running optimally</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">System Load</CardTitle>
        <Server class="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">24%</div>
        <p class="text-xs text-muted-foreground">-4% from yesterday</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">Security Status</CardTitle>
        <ShieldCheck class="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">Secure</div>
        <p class="text-xs text-muted-foreground">Sandbox active</p>
      </CardContent>
    </Card>
  </div>

  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
    <Card class="col-span-4">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-8">
          <div class="flex items-center">
            <div class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">A</div>
            <div class="ml-4 space-y-1">
              <p class="text-sm font-medium leading-none">Agent Alpha</p>
              <p class="text-sm text-muted-foreground">Completed "Data Scrape" task</p>
            </div>
            <div class="ml-auto font-medium text-green-500">Success</div>
          </div>
          <div class="flex items-center">
            <div class="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">V</div>
            <div class="ml-4 space-y-1">
              <p class="text-sm font-medium leading-none">Vision Service</p>
              <p class="text-sm text-muted-foreground">Processed 500 images</p>
            </div>
            <div class="ml-auto font-medium">+5m ago</div>
          </div>
          <div class="flex items-center">
            <div class="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">S</div>
            <div class="ml-4 space-y-1">
              <p class="text-sm font-medium leading-none">Sandbox</p>
              <p class="text-sm text-muted-foreground">Container startup initiated</p>
            </div>
            <div class="ml-auto font-medium text-yellow-500">Pending</div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card class="col-span-3">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-2">
        <button class="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors text-sm">
          <Zap class="w-4 h-4" /> New Automation
        </button>
        <button class="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors text-sm">
          <Bot class="w-4 h-4" /> Deploy Agent
        </button>
        <button class="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors text-sm">
          <Code class="w-4 h-4" /> Open Sandbox
        </button>
      </CardContent>
    </Card>
  </div>
</div>