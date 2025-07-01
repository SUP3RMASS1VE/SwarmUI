module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "echo Enhancing ComfyUI Python environment with missing packages..."
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "{{platform === 'win32' ? 'dlbackend\\\\comfy\\\\python_embeded\\\\python.exe' : 'dlbackend/ComfyUI/venv/bin/python'}} -s -m pip install {{platform === 'win32' ? '--isolated' : ''}} rembg onnxruntime matplotlib opencv-python-headless imageio-ffmpeg dill ultralytics==8.3.155"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "echo Installing build tools for omegaconf..."
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "{{platform === 'win32' ? 'dlbackend\\\\comfy\\\\python_embeded\\\\python.exe' : 'dlbackend/ComfyUI/venv/bin/python'}} -s -m pip install {{platform === 'win32' ? '--isolated' : ''}} --upgrade pip setuptools wheel"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "echo Installing antlr4-python3-runtime with no-build-isolation..."
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "{{platform === 'win32' ? 'dlbackend\\\\comfy\\\\python_embeded\\\\python.exe' : 'dlbackend/ComfyUI/venv/bin/python'}} -s -m pip install {{platform === 'win32' ? '--isolated' : ''}} --no-build-isolation antlr4-python3-runtime==4.9.3"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "echo Installing omegaconf..."
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "{{platform === 'win32' ? 'dlbackend\\\\comfy\\\\python_embeded\\\\python.exe' : 'dlbackend/ComfyUI/venv/bin/python'}} -s -m pip install {{platform === 'win32' ? '--isolated' : ''}} omegaconf"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "echo Installing ComfyUI-Manager..."
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "{{platform === 'win32' ? 'app\\\\dlbackend\\\\comfy\\\\ComfyUI\\\\custom_nodes' : 'app/dlbackend/comfy/ComfyUI/custom_nodes'}}",
        message: [
          "git clone https://github.com/ltdrdata/ComfyUI-Manager comfyui-manager"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "echo ComfyUI Python environment enhancement complete - all packages and ComfyUI-Manager installed!"
        ]
      }
    }
  ]
}
