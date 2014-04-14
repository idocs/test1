define([
    "lodash",
    "mixpanel"
], function(_, mixpanel) {
    mixpanel.init("1f5033587f88da58f941f96f804a4ca6", {
        loaded: function() {
            track("View");
        }
    });

    var isAvailable = function() {
        return (
            typeof mixpanel !== "undefined" &&
            typeof mixpanel.track === "function"
        );
    };

    var track = function(e, data) {
        if (!isAvailable()) {
            console.warn("tracking not available!");
            return;
        }
        console.log("track", e);
        mixpanel.track(e, _.extend(data || {}, {
            'domain': window.location.host
        }));
    };

    return {
        isAvailable: isAvailable,
        track: track
    };
});