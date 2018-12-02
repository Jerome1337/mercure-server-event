FROM gentoo/portage as portage

FROM gentoo/stage3-amd64

COPY --from=portage /usr/portage /usr/portage

RUN emerge --jobs $(nproc) -qv www-servers/apache net-misc/curl net-misc/openssh

RUN /usr/bin/ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key -N ''
RUN /usr/bin/ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key -N ''
RUN sed -i 's/#PubkeyAuthentication/PubkeyAuthentication/' /etc/ssh/sshd_config
RUN mkdir -p /root/.ssh && chmod 700 /root/.ssh && touch /root/.ssh/authorized_keys

COPY entrypoint.sh /
COPY infinite_curl.sh /
RUN chmod u+x /entrypoint.sh /infinite_curl.sh
ENTRYPOINT ["/entrypoint.sh"]
