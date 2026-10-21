FROM alpine:3.20
COPY . /site
CMD ["sh", "-c", "find /publicar -mindepth 1 -delete && cp -r /site/. /publicar/"]
