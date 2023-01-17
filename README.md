### Product
A product has the folowing components:
* Image
* Title
* Description
* Reviews (part of description)
* Amount chooser
* Favourite heart
* Price
* Add button

Image of single product:
![single_product](https://user-images.githubusercontent.com/88390341/212904880-17a349a4-cc7f-42d4-97d5-a2d1c06f6126.PNG)

### Mock up
Mock up of full store:
![front_page](https://user-images.githubusercontent.com/88390341/212905435-d13d3fdf-1260-42c0-9fc1-8453bf4cfccc.PNG)

### Components
1. Search bar
2. Product item 

![components](https://user-images.githubusercontent.com/88390341/212911538-8dbca728-507c-465e-853a-a389f42db753.png)

3. Shopping cart

![cart](https://user-images.githubusercontent.com/88390341/212911567-78494037-65ae-432b-a4fe-b06ca7d72a0e.PNG)

4. Header

![header](https://user-images.githubusercontent.com/88390341/212911603-53fc83a4-870e-4d2f-8451-407775de9b3c.PNG)

### UML
![uml](https://user-images.githubusercontent.com/88390341/212916160-8c642b4e-0274-4bbd-9654-3aaa1788e74b.png)

### Test Data
![test_daten](https://user-images.githubusercontent.com/88390341/212918793-43423b0a-7303-4733-a5fd-3f049a3e0ffe.PNG)

Test data is handeld with migrations and seeders.


### Implemented aditions
* Security / User Login

![sign_up](https://user-images.githubusercontent.com/88390341/212922495-1e71ce22-6dff-42e0-a851-4f30156c7c06.PNG)


* User management with Token
```
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User 
     */
    public function createUser(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(), 
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(), 
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'name' => $user->name,
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
```


* Migrations
#### Migration
```
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description');
            $table->integer('price');
            $table->integer('ratings');
            $table->integer('reviews');
            $table->boolean('isAddedToCart');
            $table->boolean('isAddedBtn');
            $table->boolean('isFavourite');
            $table->integer('quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
```

#### Seeder
```
<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
              'id' => 1,
              'title' => 'Product 1',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 50,
              'ratings' => 3,
              'reviews' => 5,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 2,
              'title' => 'Product 2',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 35,
              'ratings' => 5,
              'reviews' => 10,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 3,
              'title' => 'Product 3',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 110,
              'ratings' => 2,
              'reviews' => 3,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 4,
              'title' => 'Product 4',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 50,
              'ratings' => 1,
              'reviews' => 0,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 5,
              'title' => 'Product 5',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 35,
              'ratings' => 4,
              'reviews' => 2,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 6,
              'title' => 'Product 6',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 110,
              'ratings' => 5,
              'reviews' => 1,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 7,
              'title' => 'Product 7',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 50,
              'ratings' => 5,
              'reviews' => 7,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 8,
              'title' => 'Product 8',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 35,
              'ratings' => 3,
              'reviews' => 0,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ],
            [
              'id' => 9,
              'title' => 'Product 9',
              'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              'price' => 110,
              'ratings' => 4,
              'reviews' => 2,
              'isAddedToCart' => false,
              'isAddedBtn' => false,
              'isFavourite' => false,
              'quantity' => 1
            ]
        ];

        foreach ($products as $product) {
            \App\Models\Product::create([
                'id' => $product['id'],
                'title' => $product['title'],
                'description' => $product['description'],
                'price' => $product['price'],
                'ratings' => $product['ratings'],
                'reviews' => $product['reviews'],
                'isAddedToCart' => $product['isAddedToCart'],
                'isAddedBtn' => $product['isAddedBtn'],
                'isFavourite' => $product['isFavourite'],
                'quantity' => $product['quantity']
            ]);
        }
    }
}
```


### How to run the Store

#### Set up Laravel API
The Laravel part needs to be run on a PHP server with a mysql database for example XAMPP.
After cloning the repository
Run these comands from the project folder

```
composer install
```
```
php artisan key:generate
```
Make sure you have an .env file.
If not copy paste the .env.example file into a new .env file.
Then run these comands.
```
php artisan migrate
```
```
php artisan db:seed
```

#### Run Laravel API
```
php artisan serve
```

#### Set up Vue App
Run this comand from the MyStore folder
```
npm install
```

#### Run Vue App
```
npm run dev
```
