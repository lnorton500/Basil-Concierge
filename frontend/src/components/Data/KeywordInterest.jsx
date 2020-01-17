class KeywordInterestStorage {
    static Store(interestKeywords) {
        if (!KeywordInterestStorage.data)
            KeywordInterestStorage.data = {}



        KeywordInterestStorage.RunCallbacks()

        KeywordInterestStorage.data.keywords = interestKeywords
    }

    static Load() {
        if (!KeywordInterestStorage.data)
            return []
        if (!KeywordInterestStorage.data.keywords)
            return []
        return KeywordInterestStorage.data.keywords
    }

    static Callback(callback) {
        if (!KeywordInterestStorage.data)
            KeywordInterestStorage.data = {}
        if (!KeywordInterestStorage.data.callbacks)
            KeywordInterestStorage.data.callbacks = []

        KeywordInterestStorage.data.callbacks.push(callback)
    }

    static Has() {
        if (!KeywordInterestStorage.data)
            return true
        if (KeywordInterestStorage.data.keywords === undefined)
            return true

        return !(KeywordInterestStorage.data.keywords.length > 0)
    }

    static RunCallbacks() {
        if (!KeywordInterestStorage.data) return;
        if (!KeywordInterestStorage.data.callbacks) return;
        if (!KeywordInterestStorage.data.callbacks.length > 0) return;

        for (let index = 0; index < KeywordInterestStorage.data.callbacks.length; index++) {
            KeywordInterestStorage.data.callbacks[index](KeywordInterestStorage.data.keywords);
        }
    }
}

export default KeywordInterestStorage;