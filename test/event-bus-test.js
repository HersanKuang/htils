const { HXEventBus } = require('../src')

const eventBus = new HXEventBus()

const khxCallback1 = (...payload) => {
  console.log("khxCallback1:", payload)
}

const khxCallback2 = (...payload) => {
  console.log("khxCallback1:", payload)
}

const lileiCallback1 = (...payload) => {
  console.log("lileiCallback1:", payload)
}

eventBus.on("khx", khxCallback1)
eventBus.on("khx", khxCallback2)
eventBus.on('lilei', lileiCallback1)
eventBus.once("khx", (...payload) => {
  console.log("khx once:", payload)
})

setTimeout(() => {
  eventBus.emit("khx", "abc", "cba", "nba")
  eventBus.emit("lilei", "abc", "cba", "nba")
}, 1000);

setTimeout(() => {
  eventBus.off("khx", khxCallback1)
  eventBus.off("lilei", lileiCallback1)
}, 2000);

setTimeout(() => {
  eventBus.emit("khx")
  eventBus.emit("lilei")
}, 3000);
