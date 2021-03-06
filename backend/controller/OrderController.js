const Order = require('../models/Order')



class OrderController{
    
        UpdateOrder =async(req,res)=>{
            
            
            try {
                const updatedOrder= await Order.findByIdAndUpdate(req.params.id,{
                    $set: req.body
                },{new: true})

                res.status(200).json(updatedOrder)

            } catch (error) {
                res.status(500).json(error.message)
            }
        }
      
        CreatOrder =async(req,res)=>{
                
            const newOrder = new Order(req.body)

            try {
                const savedOrder = await newOrder.save()
                res.status(200).json(savedOrder)
            } catch (error) {
                res.status(401).json(error.message)
            }
        }

        DeleteOrder = async(req,res)=>{
            try {
                await Order.findByIdAndDelete(req.params.id)

                res.status(200).json("Order item has been deleted")

            } catch (error) {
                res.status(500).json(error)
            }   
        }


        GetUserOrder = async(req,res)=>{
            try {
                const orders = await Order.find({userId: req.params.userId})

                res.status(200).json(orders)

                

            } catch (error) {
                res.status(500).json(error.message)
            }   
        }

        GetAllOrders = async(req,res)=>{

            try {
                const orders = await Order.find()
                res.status(200).json(orders)
            } catch (error) {
                res.status(500).json(error.message)
            }

        }

        GetIncome = async(req,res)=>{
            console.log("привет")
            const date = new Date();
            const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
            const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
            console.log(previousMonth)
            try {
                const income = await Order.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                    },
                },
                {
                    $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                    },
                },
                ]);
                res.status(205).json(income);
            } catch (err) {
                res.status(500).json(err);
            }
           
        }

    
}



module.exports = new OrderController;