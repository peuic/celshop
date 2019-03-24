import os
from pymongo import MongoClient

COLLECTION_NAME = 'orders'

class MongoRepository(object):
 def __init__(self):
   mongo_url = os.environ.get('MONGO_URL')
   self.db = MongoClient(mongo_url).orders

 def find_all(self, selector):
   return self.db.orders.find(selector)
 
 def find(self, selector):
   return self.db.orders.find_one(selector)
 
 def create(self, order):
   return self.db.orders.insert_one(order)

 def update(self, selector, order):
   return self.db.orders.replace_one(selector, order).modified_count
 
 def delete(self, selector):
   return self.db.orders.delete_one(selector).deleted_count