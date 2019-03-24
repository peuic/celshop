class Repository(object):
 def __init__(self, adapter=None):
   self.client = adapter()

 def find_all(self, selector):
   return self.client.find_all(selector)
 
 def find(self, selector):
   return self.client.find(selector)
 
 def create(self, order):
   return self.client.create(order)
  
 def update(self, selector, order):
   return self.client.update(selector, order)
  
 def delete(self, selector):
   return self.client.delete(selector)