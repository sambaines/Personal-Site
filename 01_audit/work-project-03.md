---
title: Spreading Joy
---

#Allowing a simple interaction that lets users send little packages of digital joy to one another

##Origin & Problem
The problem users faced was not having a simple way to give other people they work with recognition for ‘doing a good job’ or ‘top sudoku score’ without using a proper messaging channel such as Slack. We wanted to solve for that in a simple way, select a user, choose a message and sticker and away you go.

- Business goal
- Create a feature that makes employees feel more appreciated and in turn leads to higher engagement with their employer.

- User impact goal
- Create a simple feature which users can utilise to express their appreciation of their colleagues and their hard work.

##How it works
Designed and built on top of our current in-app search component, used for challenging people to duels, and around our leaderboard system - a user can select up to 5 other users to send a message to. They can customise their message from a pre-selected bank of simple phrases, a set of stickers and a set of backgrounds, giving a lot of possibilities. Optionally, they could add a preset YuCoin (in-app currency) amount for those really special friends.

##Impact
Stats on usage of the system, but more importantly - this initial system laid the groundwork for a larger one to be built on top, Reward and Recognition from within our HR Portal - where managers and HR users could opt to send employees their own gifts as a reward for hard work or going to extra mile.

18k users sent a gift (40% of MAU)
42k gifts sent since launch
3 gifts sent on average per user
480k YuCoin Gifted (£50k worth)

##Competitor analysis & main flow
We went deep on competitor analysis and what was being offered in the market (both Japan and the UK) - this formed the basis of what we wanted to build, helped inform the user stories and direction for the main flow of the feature.

##Speed of design
This was a feature that needed to be built with speed, partly so we could get it out to users to test, but also to see the uptake for a feature like this. We had a lot of components already in place from our search feature, so we had to put them together and account for several edge cases for this specific use.

Firstly, we need to create one new component, the avatar tray, a simple way to show the users already selected for receiving a gift - pinned to the top of the screen and following a well known pattern from elsewhere. Then we had the actual search and the empty state associated with that. Finally, we had to consider potential abuse of the system. Two-fold, users who would try and game the currency system and simply users who you wouldn’t want to be contacted by. The first was a simple daily limit, the second involved a more meaningful opt-out flow from a single user.

##Simple customisation
We wanted this whole experience to be simple - hence the design choice to opt for a lot of pre-selected options, in an attempt to keep the overall cognitive load down for the user and the flow as short as possible. Starting with a simple set of stickers and only 5 message options felt right for that simplicity. We eventually added more variety in the messages and some more themed stickers after the initial testing phase as some users felt limited.

##A delight to receive
As part of this, we spent some time thinking about a simple but effective way to add subtle motion and delight to the gift when a user receives it. As part of this work we redesigned part of our notification inbox to give more visual distinction between gifts and messages.

When a user opens a gift, they see a simple animated loader themed around gifting, this felt nice but also allowed for the details in the customisation of the gift to be pulled from the server without delay - forced friction for a more pleasant experience. At this point, once opened, we designed a simple interaction for simply saying thanks - building a full circle moment of kindness.

