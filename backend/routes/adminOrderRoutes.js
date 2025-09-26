const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * @route   GET /api/admin/orders
 * @desc    Get all orders (Admin only)
 * @access  Private/Admin
 */
router.get("/", protect, admin, async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email")
      .sort({ createdAt: -1 }); // newest first
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

/**
 * @route   PUT /api/admin/orders/:id
 * @desc    Update order status
 * @access  Private/Admin
 */
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (status) {
      order.status = status;
      order.isDelivered = status === "Delivered";
      order.deliveredAt = status === "Delivered" ? Date.now() : order.deliveredAt;
    }

    const updatedOrder = await order.save();
    console.log(`✅ Order ${order._id} updated to status: ${updatedOrder.status}`);

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

/**
 * @route   DELETE /api/admin/orders/:id
 * @desc    Delete an order
 * @access  Private/Admin
 */
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.deleteOne();
    console.log(`🗑️ Order ${order._id} deleted by Admin ${req.user._id}`);

    res.status(200).json({ message: "Order removed", id: order._id });
  } catch (error) {
    console.error("Error deleting order:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
