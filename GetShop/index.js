module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var shop = context.bindings.shop;

    if (shop) {
        context.res = {
            status: 200,
            body: {
                name: shop.name,
                aaddress: shop.address
            }
        };
    }
    else {
        context.res = {
            status: 404,
            body: "Not Found"
        };
    }
};
