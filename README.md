# docker-in-action
docker demos

## build
> https://www.yuque.com/ryoma/blog/mk748r
- docker build -t node-web-app:2.0.0 .
- docker image ls
- docker run -d -p 20000:3000 node-web-app:2.0.0
- docker tag node-web-app:1.0.1 ryoma1992/node-web-app:1.0.1
- docker push ryoma1992/node-web-app:1.0.1