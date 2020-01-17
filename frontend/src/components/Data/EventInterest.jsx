class EventInterestStorage {
    static Store(interestEvents) {
        if (!EventInterestStorage.data)
            EventInterestStorage.data = {}


        EventInterestStorage.data.Events = interestEvents
        EventInterestStorage.RunCallbacks()
    }

    static Add(id) {
        if (!EventInterestStorage.data)
            EventInterestStorage.data = {}

        if (EventInterestStorage.data.Events)
            EventInterestStorage.Store([...EventInterestStorage.data.Events, id])
        else
            EventInterestStorage.Store([id])

        EventInterestStorage.RunCallbacks()
    }

    static Load() {
        if (!EventInterestStorage.data)
            return []

        return EventInterestStorage.data.Events
    }

    static Callback(callback) {
        if (!EventInterestStorage.data)
            EventInterestStorage.data = {}
        if (!EventInterestStorage.data.callbacks)
            EventInterestStorage.data.callbacks = []

        EventInterestStorage.data.callbacks.push(callback)
    }

    static Has() {
        if (!EventInterestStorage.data)
            return false

        return EventInterestStorage.data.Events === undefined
    }

    static RunCallbacks() {
        if (!EventInterestStorage.data) return;
        if (!EventInterestStorage.data.callbacks) return;
        if (!EventInterestStorage.data.callbacks.length > 0) return;

        for (let index = 0; index < EventInterestStorage.data.callbacks.length; index++) {
            EventInterestStorage.data.callbacks[index](EventInterestStorage.data.Events);
        }
    }
}

export default EventInterestStorage;