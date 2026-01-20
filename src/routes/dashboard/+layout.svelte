<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/button";
  import { LayoutDashboard, Workflow, Eye, Code, Bot, Settings, LogOut } from "lucide-svelte";

  let currentPath = "";
  $: currentPath = $page.url.pathname;

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/automation", label: "Automation", icon: Workflow },
    { href: "/dashboard/vision", label: "Vision", icon: Eye },
    { href: "/dashboard/sandbox", label: "Sandbox", icon: Code },
    { href: "/dashboard/agents", label: "Agents", icon: Bot },
  ];
</script>

<div class="flex min-h-screen w-full bg-muted/40">
  <!-- Sidebar -->
  <aside class="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
    <div class="border-b p-4 flex items-center gap-2 font-bold text-xl text-primary">
      <Bot class="w-6 h-6" />
      OMAR AI
    </div>
    <nav class="flex-1 flex flex-col gap-2 p-4">
      {#each navItems as item}
        <Button
          variant={currentPath === item.href ? "secondary" : "ghost"}
          class="justify-start gap-2"
          href={item.href}
        >
          <svelte:component this={item.icon} class="w-4 h-4" />
          {item.label}
        </Button>
      {/each}
    </nav>
    <div class="p-4 border-t">
      <Button variant="ghost" class="w-full justify-start gap-2 text-destructive" href="/">
        <LogOut class="w-4 h-4" />
        Logout
      </Button>
    </div>
  </aside>

  <!-- Main Content -->
  <div class="flex flex-col sm:pl-64 w-full">
    <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:py-4">
      <div class="flex items-center gap-2 font-semibold sm:hidden">
        <Bot class="w-6 h-6" />
        OMAR AI
      </div>
      <div class="ml-auto flex items-center gap-2">
        <span class="text-sm text-muted-foreground">user@omar-ai.com</span>
        <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span class="font-bold text-xs">US</span>
        </div>
      </div>
    </header>
    <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <slot />
    </main>
  </div>
</div>