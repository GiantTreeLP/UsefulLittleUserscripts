// ==UserScript==
// @name         Twitch: Twitchls tweaks
// @version      0.3
// @description  adds a button to watch the stream on twitchls.com and more tweaks
// @author       GiantTree
// @include      /^https?\:\/\/(www|player)\.twitch\.tv/
// @include      /^https?\:\/\/twitchls\.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.URL.includes("www.twitch.tv/")) {
        console.log("Trying to add button");
        addButton();
    } else if(document.URL.includes("twitchls.com/")) {
        console.log("Trying to adjust stream size");
        doTwitchls();
    } else if(document.URL.includes("player.twitch.tv/")) {
        console.log("Trying to add doubleclick listener");
        doTwitchPlayer();
    }
})();

function addButton() {
    if(!jQuery("div.channel-actions").length) {
        setTimeout(addButton, 500);
        return;
    }
    jQuery("div.channel-actions").append("<a class='button action' href='" + "http://twitchls.com" + document.URL.substring(document.URL.lastIndexOf("/")) + "'>Watch on Twitchls.com</a>");
    console.log("Button added");
}

function doTwitchls() {
    jQuery("#player").css("width", "1280px");
    jQuery("#chat").css("left", "1280px");
    console.log("Size adjusted to 720p");
}

function doTwitchPlayer() {
    if(!jQuery(".ima-ads-container").length) {
        setTimeout(doTwitchPlayer, 500);
        return;
    }
    jQuery(".ima-ads-container").dblclick(function() {
        jQuery(".js-control-fullscreen").click();
    });
    console.log("Added doubleclick listener");
}
