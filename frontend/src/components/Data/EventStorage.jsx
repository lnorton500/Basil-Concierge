class EventStorage {
    data = {}

    static Store(event) {
        EventStorage.data = EventStorage.data || {}
        EventStorage.data.events = EventStorage.data.events || []

        EventStorage.data.events = event
        EventStorage.CallSubs()
    }

    static Get() {
        if (!EventStorage.data) return []
        return EventStorage.data.events || []
    }

    static GetCatagories() {
        var categories = {}
        var data = EventStorage.Get()

        data = data.slice(0, 5)

        for (let index = 0; index < data.length; index++) {
            try {
                const element = data[index].enriched_description.categories;
                for (let catIndex = 0; catIndex < element.length; catIndex++) {
                    const catagory = element[catIndex];
                    var name = catagory.label.split('/').slice(-1)[0]

                    if (name in categories) {
                        var newScore = categories[name].score + catagory.score
                        var newSum = categories[name].sum
                        categories[name] = {
                            label: name,
                            sum: newScore,
                            count: newSum
                        }
                    }

                    categories[name] = {
                        label: name,
                        sum: catagory.score,
                        count: 1
                    }
                }
            } catch (error) { continue }
        }

        var array = Object.keys(categories).map(function (key) {
            return {
                name: categories[key]["label"],
                score: Number((categories[key]["sum"] / categories[key]["count"]) * 100).toFixed(0)
            };
        });

        array.sort((a, b) => {
            return b.score - a.score
        }).slice(0, 4)

        return array

    }

    static Subscribe(func) {
        EventStorage.callbacks = func
    }

    static CallSubs() {
        if (EventStorage.callbacks)
            EventStorage.callbacks(EventStorage.GetCatagories())
    }
}

export default EventStorage;