module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/mcmonkeyprojects/SwarmUI app",
        ]
      }
    },
    
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          
        ]
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": [
          "git clone https://github.com/SUP3RMASS1VE/Models",
        ],
        "path": "app"
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": [
          "git clone https://github.com/SUP3RMASS1VE/Output",
        ],
        "path": "app"
      }
    },
    {
      "method": "fs.share",
      "params": {
        "drive": {
          "checkpoints": "app/Models/Stable-Diffusion/OfficialStableDiffusion",
          "clip": "app/Models/clip",
          "clip_vision": "app/models/clip_vision",
          "configs": "app/Models/configs",
          "controlnet": "app/Models/controlnet",
          "embeddings": "app/Models/Embeddings",
          "loras": "app/Models/Lora",
          "upscale_models": "app/Models/upscale_models",
          "vae": "app/Models/VAE",
          "vae_approx": "app/Models/VAE-approx",
          "diffusers": "app/Models/diffusers",
          "unet": "app/Models/unet",
          "vae_approx": "app/Models/vae_approx",
          "hypernetworks": "app/Models/hypernetworks",
          "gligen": "app/Models/gligen",
          "style_models": "app/Models/style_models",
          "photomaker": "app/Models/photomaker",
          "outputs": "app/Output"
        },
        "peers": [
          "https://github.com/cocktailpeanutlabs/automatic1111.git",
          "https://github.com/cocktailpeanutlabs/fooocus.git",
          "https://github.com/cocktailpeanutlabs/comfyui.git",
          "https://github.com/pinokiofactory/stable-diffusion-webui-forge.git",
          "https://github.com/SUP3RMASS1VE/RuinedFooocus.git",
          "https://github.com/SUP3RMASS1VE/SwarmUI.git",
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    },
  ]
}


