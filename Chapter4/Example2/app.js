/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    "use strict";

    var addCommentFromInputBox = function (user) {
        var $newComment;

      	if(user == 1)
        {         
        	if ($("#user1 input").val() !== "") {
                $newComment = $("<p>").addClass("userA").text
                          ($("#user1 input").val());
                $newComment.hide();
                $(".comments").append($newComment);
                $newComment.fadeIn();
                $("#user1 input").val("");
        	}
        }
        else if (user == 2)
        {
    		if ($("#user2 input").val() !== "") {
                $newComment = $("<p>").addClass("userB").text
                          ($("#user2 input").val());
                $newComment.hide();
                $(".comments").append($newComment);
                $newComment.fadeIn();
                $("#user2 input").val("");
        	}
        }
    };

    $("#user1 button").on("click", function (event) {
        addCommentFromInputBox(1);
    });

    $("#user2 button").on("click", function (event) {
        addCommentFromInputBox(2);
    });

    $("#user1 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox(1);
        }
    });

    $("#user2 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox(2);
        }
    });

};

$(document).ready(main);