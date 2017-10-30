// We must wait for the "deviceready" event to fire
// before we can use the store object.
document.addEventListener('deviceready', initializeStore, false);
$('#pro_button').click(function(){
    store.order("pro");
  });
function initializeStore() {

    // Let's set a pretty high verbosity level, so that we see a lot of stuff
    // in the console (reassuring us that something is happening).
    store.verbosity = store.INFO;

    // We register a dummy product. It's ok, it shouldn't
    // prevent the store "ready" event from firing.
    store.register({
        id:    "com.whitejaa.damage.pro_version",
        alias: "pro",
        type: store.NON_RENEWING_SUBSCRIPTION
    });
    if(store.get("pro").owned) {
      console.log("Owned.");
    }
    else {
      console.log("Not owned.");
    }

    // When every goes as expected, it's time to celebrate!
    // The "ready" event should be welcomed with music and fireworks,
    // go ask your boss about it! (just in case)
    store.ready(function() {
        console.log("\\o/ STORE READY \\o/");
    });

    store.when("pro").approved(function (order) {
        console.log("You unlocked the pro version!");
        order.finish();
    });

    // After we've done our setup, we tell the store to do
    // it's first refresh. Nothing will happen if we do not call store.refresh()
    store.refresh();
}
