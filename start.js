module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "{{platform === 'win32' ? 'launch-windows.bat' : platform === 'darwin' ? 'launch-macos.sh' : 'launch-linux.sh'}}"
        ],
        on: [
          {
            event: "/http:\\/\\/\\S+/", // Listen for URL to set WebUI link
            done: true
          },
          {
            event: "/error:/i", // Listen for 'error:' (case-insensitive)
            break: false       // Don’t terminate script on this match
          }
        ]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
