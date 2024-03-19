<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @viteReactRefresh
        @vite('resources/js/index.tsx')
        @vite('resources/css/app.css')
        <title>To-do list application</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
