import bcrypt from 'bcryptjs';
const Data = {
    users: [
        {
            name: 'Dhananjay',
            email: "dhananjay@gmail.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        
    ],
    products: [
        {
            name: 'Nike Slim Shirts',
            category: 'Shirts',
            image: '/image/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.webp',
            price: 500,
            countInStock: 200,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
        },
        {
            name: 'Raymonds Slim Shirts',
            category: 'Shirts',
            image: '/image/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.webp',
            price: 600,
            countInStock: 100,
            brand: 'Raymonds',
            rating: 5,
            numReviews: 11,
            description: 'Medium quality product',
        },
        {   
            name: 'Adidas Slim Shirts',
            category: 'Shirts',
            image: '/image/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.webp',
            price: 700,
            countInStock: 250,
            brand: 'Adidas',
            rating: 4,
            numReviews: 23,
            description: 'High quality product',
        },
        {
            name: 'Being Human Slim Shirts',
            category: 'Shirts',
            image: '/image/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.webp',
            price: 500,
            countInStock: 0,
            brand: 'Being Human',
            rating: 3.5,
            numReviews: 35,
            description: 'Medium quality product',
        },
        {
            name: 'Monte Carlo Slim Shirts',
            category: 'Shirts',
            image: '/image/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.webp',
            price: 750,
            countInStock: 500,
            brand: 'Monte Carlo',
            rating: 4.5,
            numReviews: 50,
            description: 'High quality product',
        },
        {
            name: 'Allen Solly Slim Shirts',
            category: 'Shirts',
            image: '/image/d71045b2-4300-4395-b110-f652fa00e9e51579211471795-1.webp',
            price: 900,
            countInStock: 280,
            brand: 'Allen Solly',
            rating: 5,
            numReviews: 20,
            description: 'Medium quality product',
        },

    ]
}

export default Data;