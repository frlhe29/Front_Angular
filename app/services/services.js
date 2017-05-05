app.factory('billData', function() {

    return {

        billOne: {
            entityName: 'entity',
            clientName: 'client',
            products: [
                {"name":"p1","price":50},
                {"name":"p2","price":150},
                {"name":"p3","price":120},
                {"name":"p4","price":50}
            ],
            email: 'foo@bar.com',
            status : false
        }
    }

});

app.factory('billChecker',function () {
    return{
        validateBill:function()
        {
            alert("Im here ");
        }
    }
});