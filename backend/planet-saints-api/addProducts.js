const { DynamoDB } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb');
const { v4: uuidv4 } = require('uuid');
const client = new DynamoDB();
const db = DynamoDBDocument.from(client);

const PRODUCTS_TABLE = 'planet-saints-products';

const products = [
    {
        name: 'T-shirt One',
        category: 't-shirt',
        gender: 'male',
        price: 19.99,
        imageUrl: 'https://canary.contestimg.wish.com/api/webimage/5ebbbc3f1ebbc25656a17866-large.jpg?cache_buster=440be7eed18cf8d2190446ca988a4eca'
    },
    {
        name: 'T-shirt Two',
        category: 't-shirt',
        gender: 'male',
        price: 19.99,
        imageUrl: 'https://m.media-amazon.com/images/I/51m0dl3OQaL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: 'T-shirt Three',
        category: 't-shirt',
        gender: 'male',
        price: 19.99,
        imageUrl: 'https://i.ebayimg.com/00/s/MTMzMFgxMzMw/z/2DoAAOSwu31jHies/$_57.JPG?set_id=8800005007'
    },
    {
        name: 'T-shirt Four',
        category: 't-shirt',
        gender: 'male',
        price: 19.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhv0J_G-02tTELn3xPQmoMKnJ1woBjkOM6ilxWCmOcidlXtzWrUUJ4MrRoM5BxSJPSdTE&usqp=CAU'
    },
    {
        name: 'Hoodie One',
        category: 'hoodie',
        gender: 'male',
        price: 29.99,
        imageUrl: 'https://i.pinimg.com/736x/6e/50/f6/6e50f64fe99f7d9c91df723fdb62f4f7.jpg'
    },
    {
        name: 'Hoodie Two',
        category: 'hoodie',
        gender: 'unisex',
        price: 39.99,
        imageUrl: 'https://ae01.alicdn.com/kf/Hf25734b1e9f6449085a5f4b50728c51f4.jpg_640x640q90.jpg'
    },
    {
        name: 'T-shirt Five',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://ih1.redbubble.net/image.209793306.0485/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,back,wide_portrait,750x1000-bg,f8f8f8.u2.jpg'
    },
    {
        name: 'T-shirt Six',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--sZNFTGnC--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1571669493:production:blanks:ubdc364ul1ggoulsfcnh,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1606979195/production/designs/16824149_0.jpg'
    },
    {
        name: 'T-shirt Seven',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://ih1.redbubble.net/image.2227006123.4421/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg'
    },
    {
        name: 'T-shirt Eight',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://ih1.redbubble.net/image.567742241.9603/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.u3.jpg'
    },
    {
        name: 'T-shirt Nine',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://ih1.redbubble.net/image.445344437.9150/ssrco,classic_tee,womens,531963:70d276b9c6,front_alt,square_product,600x600.jpg'
    },
    {
        name: 'T-shirt Ten',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://ih1.redbubble.net/image.5228441781.3860/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.u2.jpg'
    },
    {
        name: 'T-shirt Eleven',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://ih1.redbubble.net/image.32901091.9513/ssrco,classic_tee,womens,heather_light_grey,front_alt,square_product,600x600.jpg'
    },
    {
        name: 'T-shirt Twelf',
        category: 't-shirt',
        gender: 'female',
        price: 19.99,
        imageUrl: 'https://ih1.redbubble.net/image.370727626.2263/ssrco,slim_fit_t_shirt,womens,fafafa:ca443f4786,front,square_product,600x600.u4.jpg'
    },
    {
        name: 'T-shirt Steelport Garage',
        category: 't-shirt',
        gender: 'unisex',
        price: 19.99,
        imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--5Rx66fnn--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_563/c_crop,g_north_west,h_626,w_470,x_-30,y_-7/g_north_west,u_upload:v1571669493:production:blanks:ubdc364ul1ggoulsfcnh,x_-425,y_-332/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1721145562/production/designs/63004306_0'
    },
    {
        name: 'Saints Cap',
        category: 'cap',
        gender: 'unisex',
        price: 10.99,
        imageUrl: 'https://img.kwcdn.com/product/open/17c9888931b74f1fa281e188a58329da-goods.jpeg?imageView2/2/w/264/q/70/format/webp'
    },
    {
        name: 'Hoodie Steelport Garage',
        category: 'hoodie',
        gender: 'unisex',
        price: 29.99,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQa3nSkOJTzTS0WK8Iy-CpzD-l4q5FIbLQmbG_3-GqdAP02a2l77wsLrgHFzJTptuE_npg-0Z2VdQ1ppq4iBXk9IFYZuoDcHZQMgKWx7dt6CAyw7_WKuiKXomBU1C8zTPjw&usqp=CAc'
    },
    /*{
        name: '',
        category: '',
        gender: ['male', 'female'],
        price: 29.99,
        imagaeUrl: ''
    },
    {
        name: '',
        category: '',
        gender: ['male', 'female'],
        price: 29.99,
        imagaeUrl: ''
    },
    {
        name: '',
        category: '',
        gender: ['male', 'female'],
        price: 29.99,
        imagaeUrl: ''
    },*/
  
    // Adj hozzá még több terméket
];

async function addProducts() {
    for (let product of products) {
        const productWithId = {
            ...product, // Termék adatainak átvétele
            id: uuidv4(), // Generálj egy UUID-t az ID mezőhöz
        };

        try {
            await db.put({
                TableName: PRODUCTS_TABLE,
                Item: productWithId,
            });
            console.log(`Product ${productWithId.name} added successfully with ID: ${productWithId.id}`);
        } catch (error) {
            console.error(`Error adding product ${product.name}:`, error);
        }
    }
}

addProducts();
