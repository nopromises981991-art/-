<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Bot } from "lucide-svelte";
</script>

<div class="min-h-screen flex items-center justify-center bg-muted/20 px-4">
  <Card class="w-full max-w-md">
    <CardHeader class="text-center">
      <div class="flex justify-center mb-4">
        <Bot class="w-12 h-12 text-primary" />
      </div>
      <CardTitle class="text-2xl">Welcome back</CardTitle>
      <CardDescription>Enter your email to sign in to your account</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div class="space-y-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </CardContent>
    <CardFooter class="flex flex-col gap-4">
      <Button class="w-full" href="/dashboard">Sign In</Button>
      <div class="text-center text-sm text-muted-foreground">
        Don't have an account? <a href="/signup" class="underline hover:text-primary">Sign up</a>
      </div>
    </CardFooter>
  </Card>
</div>