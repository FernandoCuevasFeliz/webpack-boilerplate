# Webpack 5 boilerplate (pug, js|ts, css|sass, images)

notes:

- The srcs of images or elements that require an image or icon in pug must be done with a require('image path'). example: img(src = require (imgpath))

- In case of a scafording modification for css files | scss and pug files change the publicpath property of the htmlwebpackplugin and minicssextractplugin to point to the output folder (dist | public | whatever you call that folder) since by default it will point to the folder where the files are hosted (if there is any image paths in the css | scss because minicssextractplugin will think that the main directory will be the css folder and will look for the assets inside this folder and the same happens with htmlwebpackplugin)
