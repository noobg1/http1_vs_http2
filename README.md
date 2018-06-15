# http1.1 vs http2 using node's http2 and hapijs

For explanation, differences, what http2 can over please follow this [link](https://medium.com/@noobj/)

# To Run on your machine!
```
nvm install 10 && nvm use 10
git clone https://github.com/noobg1/http1_vs_http2.git
cd http1_vs_http
yarn
```
> Since we need two servers, one serving http1 and the other http2
> In one terminal run,
```
node http1Server.js
```
> In another
```
node http2Server.js
```

Now navigate to `http://127.0.0.1:8002` and `https://127.0.0.1:8000` in different tabs


### Voila! You should be seeing this
![Demo](out.gif?raw=true "Demo : gui mode")

### Note:
> credits to https://www.onlineconverter.com/ for helping to convert vidoe to gif

> Feel free to use image-tiles as you like in public folder; I clicked it :sunglasses:


