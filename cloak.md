---
layout: default
content_type: md
title: Concealing Your IP on Freenode
---

# Concealing Your IP on Freenode
Freenode offers users the ability to conceal their IP with a cloak (vhost) on IRC.  With one, instead of seeing "AngryFeminist!~ROAR@ip-address.city.state.isp.net", people will see you as "AngryFeminist!~ROAR@unaffiliated/AngryFeminist".  We highly advise everyone to obtain a cloak, especially those who are using their campus or work internet. Below are the steps for obtaining and using your cloak.

## Register a nick
This requires a valid e-mail address.  Do not try to use a throwaway e-mail service or your account will be frozen.  After choosing your nick name, the following is the command for registering a nickname: `/msg NickServ REGISTER password valid@email.com` Be sure to replace password with your desired password and the e-mail with an actual e-mail. After registering, you'll receive a confirmation e-mail with a command for you to verify your account.

If any of this is at all confusing type `/msg NickServ help REGISTER` into your client for details on registering.

## Obtaining a cloak
Now that you have a registered nick, you may request a cloak to conceal your IP.  The simplest way to go about this is typing the command `/stats p` It gives a list of freenode staff who are available for help.  Choose any of the nicks and type `/msg staffnick Hello, may I have an unaffiliated cloak?` Be sure to replace staffnick with one of the nicks listed with `/stats p`

If a nick doesn't show up in the list, you have the option of waiting and trying again later or joining the public support channel #freenode and asking for a cloak there. It is not uncommon for many staffers to be available, but none listed in `/stats p`

## SASL
The final step is making sure that your cloak is applied automatically whenever you connect to Freenode.  The simplest way to ensure this is with a login method known as SASL, which identifies you to NickServ and applies your cloak during the server connection process.  Unfortunately, not all clients support this.  Freenode has been kind enough to amass a [list of clients with SASL support](https://freenode.net/sasl/) as well as some guides on enabling it. If this is your first IRC client, we recommend HexChat for Windows/Linux and [Textual IRC](http://inzain.net/textual-builds/) for Mac.

Happy IRCing!