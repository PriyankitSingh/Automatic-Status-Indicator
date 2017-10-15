/**
 * Created by Jay on 10/4/2017.
 */

// Store previous state so we can show deltas.  This is important
// because the API currently doesn't fire idle messages, and we'd
// like to keep track of last time we went idle.
var laststate = null;
var laststatetime = null;

var data = [{
      "name": "Homer Simpson",
      "status": "available",
      "group": "Work"
    },{
      "name": "Marge Simpson",
      "status": "unavailable",
      "group": "Work"
    }
    ];

/**
 * Checks the current state of the browser.
 */
function checkState() {
    threshold = 15;

    // Request the state based off of the user-supplied threshold.
    chrome.idle.queryState(threshold, function(state) {
        var time = new Date();
        console.log(state);
        if (laststate != state) {
            laststate = state;
            laststatetime = time;
        }
    });
};

var browser = true;
var skype = true;
var facebook = true;



document.addEventListener('DOMContentLoaded', function() {
    $('.availablility').bootstrapToggle({
        on: 'Available',
        off: 'Unavailable',
        onstyle: 'success',
        offstyle: 'danger'
    });
    $(function() {
        $('#skype').change(function() {
            this.skype = $(this).prop('checked');
            if (this.skype == false){
                $('#overall').text('Overall status: ' + 'Unavailable');
            } else if (this.skype == true){
                $('#overall').text('Overall status: ' + 'Available');
            }
        })
    });
    $(function() {
        $('#facebook').change(function() {
            this.facebook = $(this).prop('checked');
            if (this.facebook == false){
                $('#overall').text('Overall status: ' + 'Unavailable');
            } else if (this.facebook == true){
                $('#overall').text('Overall status: ' + 'Available');
            }
        })
    });
    $(function() {
        $('#browser').change(function() {
            this.browser = $(this).prop('checked');
            // slack status doesn't matter
            if (this.skype == true || this.facebook == true){
                $('#overall').text('Overall status: ' + 'Available');
            }
        })
    });
    // Check every second (even though this is overkill - minimum idle
    // threshold is 15 seconds) so that the numbers appear to be counting up.
    checkState();
    window.setInterval(checkState, 1000);

    // Check every second (see above).
    // renderHistory();
    // window.setInterval(renderHistory, 1000);
});