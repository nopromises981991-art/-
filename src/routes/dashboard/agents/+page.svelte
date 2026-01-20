<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "$lib/components/ui/card";
  import { Plus, Bot, Settings, Trash2 } from "lucide-svelte";
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Agents</h1>
      <p class="text-muted-foreground">Deploy and manage your AI workforce.</p>
    </div>
    <Button class="gap-2">
      <Plus class="w-4 h-4" /> New Agent
    </Button>
  </div>

  <div class="grid md:grid-cols-3 gap-6">
    <Card>
      <CardHeader>
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
          <Bot class="w-8 h-8" />
        </div>
        <CardTitle>Customer Support Bot</CardTitle>
        <CardDescription>Handles L1 support queries via chat.</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-muted-foreground">Status</span>
            <span class="text-green-500 font-medium">Online</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Model</span>
            <span>GPT-4o</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Conversations</span>
            <span>1,240</span>
          </div>
        </div>
      </CardContent>
      <CardFooter class="border-t pt-4 flex gap-2">
        <Button variant="outline" class="w-full gap-2">
          <Settings class="w-4 h-4" /> Configure
        </Button>
      </CardFooter>
    </Card>

    <Card>
      <CardHeader>
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
          <Bot class="w-8 h-8" />
        </div>
        <CardTitle>Market Analyst</CardTitle>
        <CardDescription>Scrapes and analyzes competitor pricing.</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-muted-foreground">Status</span>
            <span class="text-yellow-500 font-medium">Idle</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Model</span>
            <span>Claude 3.5 Sonnet</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">Reports</span>
            <span>45</span>
          </div>
        </div>
      </CardContent>
      <CardFooter class="border-t pt-4 flex gap-2">
        <Button variant="outline" class="w-full gap-2">
          <Settings class="w-4 h-4" /> Configure
        </Button>
      </CardFooter>
    </Card>

    <Card class="border-dashed flex items-center justify-center min-h-[300px] hover:bg-muted/50 cursor-pointer transition-colors">
      <div class="text-center space-y-2">
        <div class="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
          <Plus class="w-6 h-6 text-muted-foreground" />
        </div>
        <h3 class="font-semibold">Create New Agent</h3>
      </div>
    </Card>
  </div>
</div>