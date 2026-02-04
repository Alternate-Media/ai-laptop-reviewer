import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./ui-tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:1313/ai-laptop-reviewer/",
    trace: "on-first-retry",
    screenshot: "on",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "mkdir -p temp_root/ai-laptop-reviewer && cp -r public/* temp_root/ai-laptop-reviewer/ && python3 -m http.server 1313 --bind 127.0.0.1 --directory temp_root",
    url: "http://127.0.0.1:1313/ai-laptop-reviewer/",
    reuseExistingServer: !process.env.CI,
    cwd: "./",
  },
});
