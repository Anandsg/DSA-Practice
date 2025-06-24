var fullBloomFlowers = function (flowers, people) {
    const resp = Array(people.length).fill(0)
    const p2i = new Map()
    for (let i = 0; i < people.length; i++) {
        if (!p2i.has(people[i])) {
            p2i.set(people[i], [])
        }
        p2i.get(people[i]).push(i)
    }

    const peopleSorted = Array.from(new Set(people))
    peopleSorted.sort((a, b) => a - b)
    flowers.sort((a, b) => a[0] - b[0])

    let pnt = 0
    const pq = new MinPriorityQueue();

    for (const p of peopleSorted) {
        while (pnt < flowers.length && flowers[pnt][0] <= p) {
            pq.enqueue(flowers[pnt][1])
            pnt++
        }
        while (pq.front() && pq.front().element < p) {
            pq.dequeue()
        }
        const size = pq.size()
        const places = p2i.get(p)
        for (const pl of places) {
            resp[pl] = size
        }
    }
    return resp
};