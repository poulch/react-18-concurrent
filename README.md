# React 18 concurrent features

Purpes of this project is to test how new concurrent feature in React 18 works and how much faster rendering
React 18 provide Transition API which can be use to mark some update (setState, dispatch etc) as low priority

## How does it work

In React 18 we have two type of updates, first High Priority which is for example update text in input when user typing. Second one is Low Priority. Generaly it works in the way that each High Priority update stops Low Priority update. Low Priority update only happen when there will not be any High Pririty updates.

We can use Transition API to make update a Low Priority

```
import { useTransition, useState } from 'react'

const Component = () => {
const [isPending, startTransition] = useTransition()
const [highPriorityQuery, setHighPriorityQuery] = useState()
const [lowPrirityFilter, setLowPrirityFiler] = useState()

    const handleOnChange = (e) => {
        setHighPriorityQuery(e.target.value)

        startTransition(() => {
            setLowPrirityFiler(e.target.value)
        })
    }

    ....

}
```

## How to run project

1. Install depedeci

`npm install`

2. Run project

`npm run dev`
