const EventEmitter = require("events").EventEmitter;

const orderEmitter = new EventEmitter();

orderEmitter.on("orderPlaced", (order) => {
  console.log("\n====================");
  console.log("       RECEIPT");
  console.log("====================");
  console.log("Order ID:", order.id);
  console.log("Item:", order.item);
  console.log("Amount: ₹" + order.amount);
  console.log("====================");
});

orderEmitter.emit("orderPlaced", { id: 101, item: "Keyboard", amount: 3499 });
orderEmitter.emit("orderPlaced", { id: 102, item: "Wireless Mouse", amount: 1299 });
orderEmitter.emit("orderPlaced", { id: 103, item: "Headphones", amount: 2999 });
