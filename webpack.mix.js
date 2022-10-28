const mix = require("laravel-mix")

mix.setPublicPath('assets')
  .ts('./resources/ts/main.ts', 'js')
  .postCss('./resources/css/style.css', 'css')
  .disableSuccessNotifications()

