MIDISender
======

This plugin was developed with the intent of sending and receiving Program Change messages between the cordova app and attached hardware devices. It currently does not support other MIDI messages or other interfaces, such as virtual I/O. Should that be needed, this plugin may still be a good starting point.

Installation
-------

	cordova plugin add https://github.com/jonathanwkelly/cordova-plugin-midi-sender.git

Dependencies
-------

`CoreMIDI.framework` is required, and will be linked for you automatically


Methods
-------

	/**
	 * Sends a program change to all connected devices
	 * 
	 * @param number channelNum
	 * @param number statusData
	 * @return void
	 */
	cordova.MIDISender.sendProgramChange(channelNum, statusData);

	/**
	 * Listens for incoming program change message from all connected sources
	 * 
	 * @param function callback Is passed an object containing two properties {channel: <number>, data: <number>}
	 * @return void
	 */
	cordova.MIDISender.getIncoming(function(pc)
	{
		console.log(pc.channel); // 0-15
		console.log(pc.data); 	 // 1-128
	});

Permissions
-----------

    <feature name="MIDISender">
        <param name="ios-package" value="MIDISender" onload="true" />
    </feature>

Debugging
-----------

Debug messages are sent to `NSLog`

Resources
-----------

If you're unfamiliar with MIDI, checkout <a href="http://www.midi.org/techspecs/midimessages.php" target="_blank" title="MIDI Manufacturers Association">this spec</a> on MIDI messages.