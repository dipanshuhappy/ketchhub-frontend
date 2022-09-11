import random

import pymongo


class User:
    email = ''
    password = ''
    username = ''
    profile_href = ''
    posts = []
    followings = []
    following_count = 0
    followers = []
    follower_count = 0

    def __int__(self, username, p_href):
        self.username = username
        self.profile_href = p_href

    def addPost(self, R):
        self.posts.append(R)

    def delPost(self, R):
        self.posts.remove(R)

    def follow(self, other):
        self.followings.append(other)
        other.follower.append(self)
        self.updateFCount()

    def like(self, R):
        R.likes += 1

    def unlike(self, R):
        R.likes -= 1

    def updateFCount(self):
        self.following_count = len(self.followings)
        self.follower_count = len(self.followers)


class Recipe:
    name = ''
    image_href = ""
    recipe_href = ''
    ingredient_list = []
    ingredient_quantity = []  # Ingredient table -> Ingredient, Quantity, Units.
    ingredient_units = []  # list, quantity and units are corresponding values
    ingredient_count = 0  # Derived
    calorie_count = 0  # Derived
    description = "Sample Description - Random text"
    uploaded_by = User()
    ease_making = 0  # 0 - 5 -> Easy to Hard
    procedure = ["Step1", "Step2", "Step3", "..."]
    likes = 0

    # Add more attributes ...

    def __init__(self, name, img_ref, ing_lst, ing_quantity, ing_units, description, ease, procedure):
        self.name = name
        self.image_href = img_ref
        # self.recipe_href = recipe_ref
        self.ingredient_list = ing_lst
        self.ingredient_quantity = ing_quantity
        self.ingredient_units = ing_units
        self.description = description
        # self.uploaded_by = user
        self.ease_making = ease
        self.procedure = procedure

        self.ingredient_count = len(self.ingredient_list)
        self.calorie_count = self.calcCalories()

    def calcCalories(self):
        """
        Not implemented for this release. Should contain actual calc.
        """
        return random.choice(range(194, 1314))

    def __str__(self):
        return self.name + '\n' + str(self.procedure)


client = pymongo.MongoClient(
    "mongodb+srv://CodingBabas3:WeG0nnaRoc27h1s@cluster0.vuq2xuh.mongodb.net/?retryWrites=true&w=majority")
DB_Recipes = client["KitcHub"]
DB_Recipes_Details = DB_Recipes["Recipe"]

recipe_no = 1
Recipe_lst = []
while True:
    print(f"Recipe number: {recipe_no}")
    recipe_name = input("Input Recipe name: ")
    if recipe_name == '-1':
        break
    recipe_img_link = input("Input Recipe img link: ")
    # recipe_img_link

    recipe_ing_list = []
    recipe_quantity_list = []
    recipe_unit_list = []
    while True:
        print("Input in the following format only. Comma separated, -1 to end ing lst")
        recipe_ing_comb = input("ingredient_name, quantity, units: ").split(',')
        if recipe_ing_comb[0] == '-1':
            break
        print(recipe_ing_comb)
        recipe_ing_list.append(recipe_ing_comb[0])
        recipe_quantity_list.append(float(recipe_ing_comb[1]))
        recipe_unit_list.append(recipe_ing_comb[2])

    recipe_description = input("Enter Recipe description: ")
    recipe_ease = int(input("Enter ease 0-5: "))

    print("Enter procedure step by step: ")
    step = 1
    recipe_procedure = []
    while True:
        procedure = input(f"Step{step}: ")
        if procedure == '-1':
            break
        recipe_procedure.append(f"Step{step} " + procedure)
        print("Enter -1 to exit")
        step += 1

    R = Recipe(recipe_name, recipe_img_link, recipe_ing_list, recipe_quantity_list, recipe_unit_list,
               recipe_description, recipe_ease, recipe_procedure)

    DB_Recipes_Details.insert_one({"name": R.name,
                                   "ingredient_lst": R.ingredient_list,
                                   "image_href": R.image_href,
                                   "ingredient_quantity": R.ingredient_quantity,
                                   "ingredient_units": R.ingredient_units,
                                   "description": R.description,
                                   "ease": R.ease_making,
                                   "ingredient_count": R.ingredient_count,
                                   "ingredient_procedure": R.procedure,
                                   "calorie_count": R.calorie_count
                                   })
    print("Type -1 to end")
