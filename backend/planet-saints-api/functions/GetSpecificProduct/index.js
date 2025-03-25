const { db } = require("../../services/index");
const { sendResponse, sendError } = require("../../responses/index");

exports.handler = async (event) => {
    try {
        const productId = event.pathParameters.id;

        const params = {
            TableName: "planet-saints-products", // Módosított táblanév
            Key: {
                id: productId,
            },
        };

        const result = await db.get(params);

        if (!result.Item) {
            return sendError(404, "Product not found");
        }

        return sendResponse(200, result.Item);
    } catch (error) {
        console.error("Error fetching product:", error);
        return sendError(500, "Failed to retrieve product");
    }
};
