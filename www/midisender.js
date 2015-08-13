
var exec = require('cordova/exec');

var MIDISender = function() {};

// -----

/**
 * @param {number} channelNum 0-15 
 * @param {number} programNum 1-128
 * @return {void}
 */
MIDISender.sendProgramChange = function(channelNum, programNum) 
{
	// add 192 for the 192-207 program change range
	channelNum = parseInt(channelNum) + 192;

    exec(function(){}, function(){}, "MIDISender", "sendProgramChange", [channelNum, programNum]);
};

// -----

/**
 * @param {function} callback
 * @return {void}
 */
MIDISender.getIncoming = function(callback) 
{
	exec(
		function(data)
		{
			if(angular.isObject(data) && angular.isDefined(data.channel))
			{
				data.channel = parseInt(data.channel) - 192;

				callback.call(this, data);
			}
		},
		function() {},
		"MIDISender",
		"getIncoming",
	  	{}
	  );
};

// -----

module.exports = MIDISender;