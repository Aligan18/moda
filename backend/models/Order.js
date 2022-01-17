
  
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    name:{type: String, required: true},
    userId: { type: String, required: true },
    products: [
      {
        _id: {
          type: String,required: true
        },
        quantity: { type: Number, required: true}
      },
    ],
    phone: { type: String, required: true},
    total: { type: Number, required: true },
    adress: { type: Object, required: true },
    status: { type: String, default: "Не оплачено" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);