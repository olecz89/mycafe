"use strict";
var chai = require("chai"),
    expect = chai.expect,
    sinon = require("sinon"),
    orderSystemWith = require("../lib/orders");


describe("Customer displays order", function() {
  context("Given that the order is empty", function() {
    beforeEach(function() {
      var orderDAO = {
        byId: sinon.stub()
      },
          orderSystem = orderSystemWith(orderDAO);

      orderDAO.byId..withArgs("some empty order id").returns([]);
      
      this.result = orderSystem.display("some empty order id");
    });

    it("will show no order item");
    it("will show 0 as the total price");
    it("will only be possible to add a beverage");
  });

  context("Given that the order contains beverages", function () {
    it("will show one item per beverage");
    it("will show the sum of beverages as total price");
    it("will be possible to place the order");
    it("will be possible to add a beverage");
    it("will be possible to remove a beverage");
    it("will be possible to change quantity of beverages");
  });

  context("Given that the order has pending messages", function() {
    it("will show the pending messages");
    it("there will be no more pending messages");
  });
});
