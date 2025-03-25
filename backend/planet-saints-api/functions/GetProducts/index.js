const { db } = require("../../services/index");
const { sendResponse, sendError } = require("../../responses/index");

exports.handler = async (event) => {
    try {
        const params = {
            TableName: "planet-saints-products", // Módosított táblanév
        };

        const result = await db.scan(params);

        return sendResponse(200, result.Items);
    } catch (error) {
        console.error("Error fetching products:", error);
        console.error("Error details:", error.stack);
        return sendError(500, "Failed to retrieve products");
    }
};
