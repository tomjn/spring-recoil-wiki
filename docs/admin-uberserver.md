---
title: "Admin:Uberserver"
source_url: "https://springrts.com/wiki/Admin:Uberserver"
categories:
  - "Administration"
  - "Lobby"
---
# Admin:Uberserver

<div class="mw-parser-output">

## set spring version on the official server (info for spring server admins)

with springlobby type this as admin user into the server window:

     SETLATESTSPRINGVERSION 106.0

to make it persistent, edit /home/lobby/uberserver/args.txt:

     --latestspringversion 106.0

## control the systemd service

as user lobby:

    sudo /bin/systemctl status uberserver.service
    sudo /bin/systemctl start uberserver.service
    sudo /bin/systemctl stop uberserver.service
    sudo /bin/systemctl restart uberserver.service

as user lobbydev:

    sudo /bin/systemctl status uberserver-dev.service
    sudo /bin/systemctl start uberserver-dev.service
    sudo /bin/systemctl stop uberserver-dev.service
    sudo /bin/systemctl restart uberserver-dev.service

</div>

---

*Imported from the springrts.com wiki (public domain). Original page: [Admin:Uberserver](https://springrts.com/wiki/Admin:Uberserver).*
