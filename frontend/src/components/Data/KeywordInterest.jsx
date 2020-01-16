class KeywordInterestStorage {
    static Store(interestKeywords) {
        if (!KeywordInterestStorage.data)
            KeywordInterestStorage.data = {}

        for (let index = 0; index < KeywordInterestStorage.data.callbacks.length; index++) {
            KeywordInterestStorage.data.callbacks[index](interestKeywords);
        }

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
}

export default KeywordInterestStorage;