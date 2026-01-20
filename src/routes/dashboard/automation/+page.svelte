<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "$lib/components/ui/card";
  import { Plus, Play, Pause, MoreHorizontal } from "lucide-svelte";
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Automation</h1>
      <p class="text-muted-foreground">Manage your automated workflows.</p>
    </div>
    <Button class="gap-2">
      <Plus class="w-4 h-4" /> New Workflow
    </Button>
  </div>

  <div class="grid gap-4">
    <!-- Workflow Item -->
    <Card>
      <CardHeader class="flex flex-row items-center justify-between pb-2">
        <div class="space-y-1">
          <CardTitle class="text-base">Daily Data Sync</CardTitle>
          <CardDescription>Syncs database with CRM every 24h</CardDescription>
        </div>
        <div class="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Play class="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal class="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div class="flex items-center gap-4 text-sm text-muted-foreground">
          <span class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-green-500"></span> Active
          </span>
          <span>Last run: 2 hours ago</span>
          <span>Success rate: 99%</span>
        </div>
      </CardContent>
    </Card>

    <!-- Workflow Item -->
    <Card>
      <CardHeader class="flex flex-row items-center justify-between pb-2">
        <div class="space-y-1">
          <CardTitle class="text-base">Email Categorizer</CardTitle>
          <CardDescription>Uses NLP to sort incoming support emails</CardDescription>
        </div>
        <div class="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Pause class="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal class="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div class="flex items-center gap-4 text-sm text-muted-foreground">
          <span class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-yellow-500"></span> Paused
          </span>
          <span>Last run: 1 day ago</span>
        </div>
      </CardContent>
    </Card>
  </div>
</div>