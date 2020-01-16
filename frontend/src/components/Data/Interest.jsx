class InterestStorage {
    static StoreKeywords(interestKeywords) {
        if (!InterestStorage.data)
            InterestStorage.data = {}

        for (let index = 0; index < InterestStorage.data.callbacks.length; index++) {
            InterestStorage.data.callbacks[index](interestKeywords);
        }
        InterestStorage.data.keywords = interestKeywords
    }

    static LoadKeywords() {
        if (!InterestStorage.data)
            return []
        return InterestStorage.data.keywords
    }

    static KeywordCallback(callback) {
        if (!InterestStorage.data)
            InterestStorage.data = {}
        if (!InterestStorage.data.callbacks)
            InterestStorage.data.callbacks = []

        InterestStorage.data.callbacks.push(callback)
    }

    static HasKeywords() {
        if (!InterestStorage.data)
            return true
        if (InterestStorage.data.keywords === undefined)
            return true

        return !(InterestStorage.data.keywords.length > 0)
    }
}

export default InterestStorage;