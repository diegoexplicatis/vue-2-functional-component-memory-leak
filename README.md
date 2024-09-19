# Vue 2.7.14 Functional Component Memory Leak

## Project setup
```
npm install
```

### Run project
```
npm run serve
```

## How to reproduct memory leak

1. Open base url of project (printed in console)
2. Click on "Go to Test Component"
3. Click on Home
4. Open developer tools and take a heap snapshot
![HeapSnapshot](/assets/take_heapsnaphot.png)
5. Filter for "Objects retained by detached DOM nodes"
![Filter](/assets/filter.png)
6. See there are detached elements, e.g. a paragraph element with id = testParagraph.
![Detached](/assets/detached.png)
7. Manually trigger garbage collection
![GarbageCollection](/assets/garbage_collection.png)
8. Take another heap snapshot and filter for "Object retained by detached DOM nodes" again
9. See that e.g. the paragrpah is still being retained => paragraph element has leaked (it is detached from the DOM but is not being garbage collected)
![Not collected](/assets/not_collected.png)
10. Go to FunctionalComponent.vue to line 4 and change the parameter for functional to "false"
11. Redo steps 1 - 8
12. See that there are not detached elements (even without manually garbage collecting) => all elements have been properly garbage collected
![NoDetached](/assets/no_detached.png)
