<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @viteReactRefresh
        @vite('resources/js/index.tsx')
        @vite('resources/css/app.css')
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
