import pymongo
client = pymongo.MongoClient("mongodb+srv://CodingBabas3:WeG0nnaRoc27h1s@cluster0.vuq2xuh.mongodb.net/?retryWrites=true&w=majority")

def searchRecipeFromIngredient(UserInput):
    global client
    """ 
    Finds recipes that are subsets of UserInput
    """

    filter = {
        'ingredient_lst': {
            '$not': {
                '$elemMatch': {
                    '$nin': UserInput
                }
            }
        }
    }
    result = client['KitcHub']['Recipe'].find(
        filter=filter
    )
    return result

print(list(searchRecipeFromIngredient(['onion', 'green chillies', 'potato']))[0]['name'])