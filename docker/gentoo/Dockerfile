FROM gentoo/portage as portage

FROM gentoo/stage3-amd64

COPY --from=portage /usr/portage /usr/portage
COPY package.use /etc/portage

RUN emerge -vq net-misc/openssh dev-libs/openssl
RUN emerge nodejs

COPY script.js /

CMD  node script.js
