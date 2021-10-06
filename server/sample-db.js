const { Mongoose } = require('mongoose');
const Product = require('./model/products');

class SampleDb{
    constructor(){
        this.products=[
            {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'テキスト　テキスト　テキスト　テキスト',
                headingtext2: 'サンプル　サンプル　サンプル　サンプル',
                headingtext3: 'This is a lot of example than you think. You can get enough to eat.',
              },
              {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'テキスト　テキスト　テキスト　テキスト',
                headingtext2: 'サンプル　サンプル　サンプル　サンプル',
                headingtext3: 'This is a lot of example than you think. You can get enough to eat.',
              },
              {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'テキスト　テキスト　テキスト　テキスト',
                headingtext2: 'サンプル　サンプル　サンプル　サンプル',
                headingtext3: 'This is a lot of example than you think. You can get enough to eat.',
              },
              {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone special',
                price: 999,
                description: 'good',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'テキスト　テキスト　テキスト　テキスト',
                headingtext2: 'サンプル　サンプル　サンプル　サンプル',
                headingtext3: 'This is a lot of example than you think. You can get enough to eat.',
              }
            ];
    }

    pushProductsToDb(){
        this.products.forEach(
            ( product ) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }
    
    async initDb() {
        await this.cleanDb();
        this.pushProductsToDb();
    }

    seeDb() {
        this.pushProductsToDb();
    }

    async cleanDb(){
        await Product.deleteMany({});
    }


}

module.exports = SampleDb;